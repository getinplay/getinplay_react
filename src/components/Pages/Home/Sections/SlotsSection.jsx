import React, { useState } from "react";
import TimeSlot from "../Cards/TimeSlotCard";
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

function SlotsSection() {
  const [slots, setSlots] = useState([
    { id: 1, time: "10:30am" },
    { id: 2, time: "11:30am" },
    { id: 3, time: "12:30pm" },
    { id: 4, time: "01:30pm" },
    { id: 5, time: "02:30pm" },
    { id: 6, time: "03:30pm" },
    { id: 7, time: "04:30pm" },
    { id: 8, time: "05:30pm" },
    { id: 9, time: "06:30pm" },
    { id: 10, time: "07:30pm" },
    { id: 11, time: "08:30pm" },
    { id: 12, time: "09:30pm" },
    { id: 13, time: "10:30pm" },
    { id: 14, time: "11:30pm" },
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-[80vw]">
      <h2 className="subtitle">Slots available for Today</h2>
      <div className="flex items-center justify-center gap-2 w-full py-3">
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer active:text-gray-200 duration-200 text-red-500 z-20 custom-prev-2">
          <FontAwesomeIcon size="2xl" icon={faSquareCaretLeft} />
        </button>
        <div className="min-w-[70%] flex items-center justify-center">
          <Swiper
            modules={[Navigation, Mousewheel]}
            breakpoints={{
              320: { slidesPerView: 1 },
              425: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 6 },
              2560: { slidesPerView: 7 },
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
                <TimeSlot>{slot.time}</TimeSlot>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer active:text-gray-200 duration-200 text-red-500 z-20 custom-next-2">
          <FontAwesomeIcon size="2xl" icon={faSquareCaretRight} />
        </button>
      </div>
    </div>
  );
}

export default SlotsSection;
