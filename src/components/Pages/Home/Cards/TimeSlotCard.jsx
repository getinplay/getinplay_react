import React from "react";

function TimeSlotCard({ children, isBooked }) {
  return (
    <div
      className={`sm:px-3 duration-300 ${
        isBooked
          ? "bg-gray-300 text-gray-100 border-gray-300"
          : "bg-white text-red-500 border-red-500 active:text-white active:bg-red-500 focus:bg-red-500 focus:text-white hover:bg-red-500 hover:text-white cursor-pointer"
      } py-1 outline-none select-none border-2 text-sm xs:text-base sm:text-lg font-semibold rounded-lg`}>
      {children}
    </div>
  );
}

export default TimeSlotCard;
