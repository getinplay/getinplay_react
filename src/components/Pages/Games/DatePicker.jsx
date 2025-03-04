import React from "react";

function DatePicker({ selectedDate, setSelectedDate }) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const getWeekday = (date) => date.toLocaleDateString("en-US", { weekday: "short" });
  const getDay = (date) => date.getDate();
  const getMonth = (date) => date.toLocaleDateString("en-US", { month: "short" });

  const dates = [today, tomorrow, dayAfterTomorrow];

  return (
    <div className="w-max flex bg-gray-200 rounded-lg">
      {dates.map((date, index) => (
        <button
          key={index}
          onClick={() => setSelectedDate(date)}
          className={`px-3 rounded-lg cursor-pointer ${
            selectedDate.toDateString() === date.toDateString()
              ? "bg-red-500 text-white shadow-[2px_2px_5px_rgb(150,150,150)]"
              : "text-gray-900"
          } flex flex-col items-center justify-center`}
        >
          <span className={`text-xs sm:text-sm font-semibold ${selectedDate.toDateString() === date.toDateString() ? "text-red-200" : "text-gray-500"}`}>
            {getWeekday(date)}
          </span>
          <span className="text-lg sm:text-xl font-semibold">{getDay(date)}</span>
          <span className={`text-xs sm:text-sm font-semibold ${selectedDate.toDateString() === date.toDateString() ? "text-red-200" : "text-gray-500"}`}>
            {getMonth(date)}
          </span>
        </button>
      ))}
    </div>
  );
}

export default DatePicker;
