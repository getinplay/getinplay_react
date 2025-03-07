import React, { useState } from "react";
import TimeSlotCard from "../Cards/TimeSlotCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SlotsSection() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([
    { id: 1, time: "10:00-10:30AM" },
    { id: 2, time: "10:30-11:30AM" },
    { id: 3, time: "11:30-12:30PM" },
    { id: 4, time: "12:30-01:30PM" },
    { id: 5, time: "01:30-02:30PM" },
    { id: 6, time: "02:30-03:30PM" },
    { id: 7, time: "03:30-04:30PM" },
    { id: 8, time: "04:30-05:30PM" },
    { id: 9, time: "05:30-06:30PM" },
    { id: 10, time: "06:30-07:30PM" },
    { id: 11, time: "07:30-08:30PM" },
    { id: 12, time: "08:30-09:30PM" },
    { id: 13, time: "09:30-10:30PM" },
    { id: 14, time: "10:30-11:30PM" },
  ]);

  return (
    <div className='flex flex-col items-center justify-center w-[80vw]'>
      <h2 className='subtitle'>Slots Available For Today</h2>
      <div className='flex items-center justify-center gap-2 w-full py-3'>
        <button
          type='button'
          className='flex items-center justify-center cursor-pointer active:text-gray-200 duration-200 text-red-500 z-20 custom-prev-2'>
          <FontAwesomeIcon size='2xl' icon={faSquareCaretLeft} />
        </button>
        <div className='min-w-[70%] flex items-center justify-center'>
          <Swiper
            modules={[Navigation, Mousewheel]}
            breakpoints={{
              320: { slidesPerView: 1 },
              450: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 5 },
              2560: { slidesPerView: 6 },
            }}
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next-2",
              prevEl: ".custom-prev-2",
              disabledClass: "!text-gray-300 !cursor-default",
            }}
            mousewheel={{ forceToAxis: true }}>
            {slots.map((slot) => (
              <SwiperSlide key={slot.id}>
                <TimeSlotCard
                  onClick={() => {
                    navigate("/games");
                  }}>
                  {slot.time}
                </TimeSlotCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type='button'
          className='flex items-center justify-center cursor-pointer active:text-gray-200 duration-200 text-red-500 z-20 custom-next-2'>
          <FontAwesomeIcon size='2xl' icon={faSquareCaretRight} />
        </button>
      </div>
    </div>
  );
}

export default SlotsSection;
