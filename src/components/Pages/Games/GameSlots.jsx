import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TimeSlotCard from "../Home/Cards/TimeSlotCard";
import ButtonGroupBtn from "./ButtonGroupBtn";
import DatePicker from "./DatePicker";
import axios from "axios";
import ConfirmLogin from "../../ConfirmLogin";
import BookGamePopup from "./BookGamePopup";

function GameSlots() {
  const [isLogin, setIsLogin] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [refreshPage, setRefreshPage] = useState(false);
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState({
    name: "",
  });
  const [originalSlots, setOriginalSlots] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [terms, setTerms] = useState("");
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const filterOptions = ["All", "30min", "1hr"];
  const [selectedSlot, setSelectedSlot] = useState("");

  const filterSlots = (timeSlots, option) => {
    return timeSlots.filter((slot) => {
      return option == "All" || slot.filter == option;
    });
  };

  useEffect(() => {
    const fetchTerms = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Api's/term_condition.php`
      );
      setTerms(res.data);
    };
    const fetchAllSlots = async () => {
      let bookedSlots;
      let allSlots;
      let filter;
      const date = selectedDate.toJSON().slice(0, 10).replace(/-/g, "/");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/Api's/filter_time.php`,
        { id: id, date: date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      allSlots = res.data.slots;
      filter = res.data.filter;
      const res2 = await axios.post(
        `${import.meta.env.VITE_API_URL}/Api's/book_slots.php`,
        { game_id: id, date: date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      bookedSlots = res2.data.booked_slots.map((slot) => slot.slot);
      let tempTimeSlots = [];
      allSlots.forEach((slot, index) => {
        if (bookedSlots.includes(slot)) {
          tempTimeSlots.push({
            time: slot,
            isBooked: true,
            filter: filter[index],
          });
        } else {
          tempTimeSlots.push({
            time: slot,
            isBooked: false,
            filter: filter[index],
          });
        }
      });
      setOriginalSlots(tempTimeSlots);
      setTimeSlots(filterSlots(tempTimeSlots, filterOptions[selected]));
    };
    const checkLogin = async () => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/Api's/decode.php`,
        {
          token: document.cookie
            .split("; ")
            .find((row) => row.startsWith("authToken="))
            ?.split("=")[1],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLogin(res.data.success);
    };
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Api's/game_data.php`
      );
      setCurrentGame(res.data.find((ele) => ele.id == id));
    };

    fetchData();
    fetchAllSlots();
    fetchTerms();
    if (document.cookie) {
      checkLogin();
    }
  }, [selectedDate, refreshPage]);

  return (
    <div className='w-[90vw] md:w-[80vw] p-5 flex flex-col gap-5'>
      <h2 className='text-3xl p-3 sm:text-4xl font-black text-gray-700'>
        {currentGame.name.toUpperCase()}
      </h2>
      <img
        className='shadow-[0_2px_16px_rgba(0,0,0,0.3)] h-[30vh] sm:h-[50vh] min-h-[200px] object-cover rounded-lg'
        src={`${import.meta.env.VITE_API_URL}/admin/${currentGame.slot_image}`}
        alt={`image`}
      />
      <div className='flex w-full flex-col xs:flex-row gap-5 justify-between max-xs:items-start items-center'>
        <div>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className='flex  bg-gray-200 rounded-full duration-300'>
          {filterOptions.map((ele, index) => (
            <ButtonGroupBtn
              onClickHandler={() => {
                setTimeSlots(filterSlots(originalSlots, ele));
                setSelected(index);
              }}
              index={index}
              key={index}
              isSelected={index === selected}>
              {ele}
            </ButtonGroupBtn>
          ))}
        </div>
      </div>
      {timeSlots.length > 0 ? (
        <>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-evenly'>
            {timeSlots.map((slot, index) => (
              <TimeSlotCard
                key={index}
                onClick={
                  slot.isBooked
                    ? () => {}
                    : async () => {
                        if (isLogin) {
                          setShowBookingConfirm(true);
                          setSelectedSlot(slot.time);
                        } else {
                          ConfirmLogin();
                        }
                      }
                }
                isBooked={slot.isBooked}>
                {slot.time}
              </TimeSlotCard>
            ))}
          </div>
          {showBookingConfirm && (
            <BookGamePopup
              terms={terms}
              setAgree={setAgree}
              agree={agree}
              slotTime={selectedSlot}
              gameId={id}
              gameName={currentGame.name}
              selectedDate={selectedDate}
              setRefreshPage={setRefreshPage}
              showTerms={showBookingConfirm}
              hideBooking={() => setShowBookingConfirm(false)}
            />
          )}
        </>
      ) : (
        <p className='text-gray-700 italic text-lg'>
          No Slots Available for this Game
        </p>
      )}
    </div>
  );
}

export default GameSlots;
