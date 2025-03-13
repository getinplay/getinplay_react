import React, { useState } from "react";

function TimeSlotCard({ children, isBooked, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered((prev) => !prev)}
      onMouseLeave={() => setHovered((prev) => !prev)}
      onClick={onClick}
      className={`sm:px-3 duration-200 ${
        isBooked
          ? "bg-gray-300 text-gray-100 border-gray-300"
          : "bg-white text-red-600 border-red-600 active:text-white active:bg-red-600 focus:bg-red-600 focus:text-white hover:bg-red-600 hover:text-white cursor-pointer"
      } py-1 outline-none select-none border-2 text-sm xs:text-base sm:text-lg font-semibold rounded-lg`}>
      {hovered ? "Book Now" : children}
    </div>
  );
}

export default TimeSlotCard;
