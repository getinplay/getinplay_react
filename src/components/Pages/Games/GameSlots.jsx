import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TimeSlotCard from "../Home/Cards/TimeSlotCard";
import ButtonGroupBtn from "./ButtonGroupBtn";
import DatePicker from "./DatePicker";
import axios from "axios";

function GameSlots() {
  const [selected, setSelected] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const [name, setName] = useState("");
  const [originalSlots, setOriginalSlots] = useState([]);
  const [timeSlots, setTimeSlots] = useState([
    // { time: "10:00-10:30AM", isBooked: false },
    // { time: "10:30-11:30AM", isBooked: false },
    // { time: "11:30-12:30PM", isBooked: false },
    // { time: "12:30-01:30PM", isBooked: false },
    // { time: "01:30-02:30PM", isBooked: false },
    // { time: "02:30-03:30PM", isBooked: false },
    // { time: "03:30-04:30PM", isBooked: false },
    // { time: "04:30-05:30PM", isBooked: true },
    // { time: "05:30-06:30PM", isBooked: false },
    // { time: "06:30-07:30PM", isBooked: false },
    // { time: "07:30-08:30PM", isBooked: false },
    // { time: "08:30-09:30PM", isBooked: false },
    // { time: "09:30-10:30PM", isBooked: true },
    // { time: "10:30-11:30PM", isBooked: true },
  ]);
  useEffect(() => {
    const fetchAllSlots = async () => {
      let bookedSlots;
      let allSlots;
      let filter;
      const res = await axios.post(
        "http://192.168.0.130/final_project/final_project/Api's/slots_data.php",
        { id: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      allSlots = res.data.slots;
      filter = res.data.filter;
      setName(res.data.name);
      const date = selectedDate.toJSON().slice(0, 10).replace(/-/g, "/");
      const res2 = await axios.post(
        "http://192.168.0.130/final_project/final_project/Api's/book_slots.php",
        { game_id: id, date: date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      bookedSlots = res2.data.booked_slots;
      let timeSlots = [];
      allSlots.forEach((slot, index) => {
        if (bookedSlots.includes(slot)) {
          timeSlots.push({ time: slot, isBooked: true, filter: filter[index] });
        } else {
          timeSlots.push({
            time: slot,
            isBooked: false,
            filter: filter[index],
          });
        }
      });
      setOriginalSlots(timeSlots);
      setTimeSlots(timeSlots);
    };

    fetchAllSlots();
  }, [selectedDate]);

  return (
    <div className="w-[80vw] flex flex-col gap-5">
      <h2 className="text-4xl font-black text-gray-700">
        {name.toUpperCase()}
      </h2>
      <div className='flex w-full flex-col sm:flex-row gap-5 justify-between items-center'>
        <div>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className='flex  bg-gray-200 rounded-full duration-300'>
          {["All", "30min", "1hr"].map((ele, index) => (
            <ButtonGroupBtn
              onClickHandler={() => {
                setTimeSlots(
                  originalSlots.filter((slot) => {
                    return ele == "All" || slot.filter == ele;
                  })
                );
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
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-evenly'>
        {timeSlots.map((slot, index) => (
          <TimeSlotCard key={index} isFlex={false} isBooked={slot.isBooked}>
            {slot.time}
          </TimeSlotCard>
        ))}
      </div>
    </div>
  );
}

export default GameSlots;
