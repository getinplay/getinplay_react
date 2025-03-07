import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimeSlotCard from "../Home/Cards/TimeSlotCard";
import ButtonGroupBtn from "./ButtonGroupBtn";
import DatePicker from "./DatePicker";
import axios from "axios";

function GameSlots() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [refreshPage, setRefreshPage] = useState(false);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [originalSlots, setOriginalSlots] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [terms, setTerms] = useState(
    "<ul><li>Condition</li><li>Condition</li><li>Condition</li></ul></p>"
  );
  const filterOptions = ["All", "30min", "1hr"];

  const filterSlots = (timeSlots, option) => {
    return timeSlots.filter((slot) => {
      return option == "All" || slot.filter == option;
    });
  };

  const bookSlot = async (slot, game_id) => {
    const data = {
      token: document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1],
      date: selectedDate.toISOString().split("T")[0].replace(/-/g, "/"),
      slot: slot,
      game_id: game_id,
    };
    const res = await axios.post(
      "http://192.168.0.130/final_project/final_project/Api's/book_game.php",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  };

  useEffect(() => {
    const fetchTerms = async () => {
      const res = await axios.get(
        "http://192.168.0.130/final_project/final_project/Api's/term_condition.php"
      );
      setTerms(res.data);
    };
    const fetchAllSlots = async () => {
      let bookedSlots;
      let allSlots;
      let filter;
      const date = selectedDate.toJSON().slice(0, 10).replace(/-/g, "/");
      const res = await axios.post(
        "http://192.168.0.130/final_project/final_project/Api's/filter_time.php",
        { id: id, date: date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      allSlots = res.data.slots;
      filter = res.data.filter;
      setName(res.data.name);
      const res2 = await axios.post(
        "http://192.168.0.130/final_project/final_project/Api's/book_slots.php",
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
        "http://192.168.0.130/final_project/final_project/Api's/decode.php",
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
    fetchAllSlots();
    fetchTerms();
    if (document.cookie) {
      checkLogin();
    }
  }, [selectedDate, refreshPage]);

  return (
    <div className="w-[80vw] p-5 flex flex-col gap-5">
      <h2 className="text-3xl p-3 sm:text-4xl font-black text-gray-700">
        {name.toUpperCase()}
      </h2>
      <div className="flex w-full flex-col sm:flex-row gap-5 justify-between items-center">
        <div>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="flex  bg-gray-200 rounded-full duration-300">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-evenly">
            {timeSlots.map((slot, index) => (
              <TimeSlotCard
                key={index}
                onClick={
                  slot.isBooked
                    ? () => {}
                    : async () => {
                        if (isLogin) {
                          if (
                            confirm(
                              `Are you sure you want to Book '${
                                slot.time
                              }' for ${name} on ${selectedDate
                                .toISOString()
                                .split("T")[0]
                                .replace(/-/g, "/")}`
                            )
                          ) {
                            const res = await bookSlot(slot.time, id);
                            alert(res.message);
                            setRefreshPage((prev) => !prev);
                          }
                        } else {
                          if (
                            confirm("Please Login to continue before Booking!")
                          ) {
                            navigate("/login");
                          }
                        }
                      }
                }
                isBooked={slot.isBooked}>
                {slot.time}
              </TimeSlotCard>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-max text-lg text-gray-700">
              <p className="font-bold">TERMS & CONDITIONS</p>
              <p
                dangerouslySetInnerHTML={{ __html: terms }}
                className="text-base text-start text-gray-600"></p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-700 italic text-lg">
          No Slots Available for this Game
        </p>
      )}
    </div>
  );
}

export default GameSlots;
