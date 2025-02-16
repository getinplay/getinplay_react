import React from "react";

function TimeSlotCard({ children }) {
  return (
    <div className="px-3 py-1 select-none border-3 border-red-500 text-red-500 bg-white text-lg font-semibold rounded-lg">
      {children}
    </div>
  );
}

export default TimeSlotCard;
