import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";

function BookingHistoryPage() {
  const [bookings, setBookings] = useState({
    upcoming: [],
    past: [],
    cancelled: [],
  });
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          ?.split("=")[1];

        if (!token) {
          console.error("Auth token not found");
          return;
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/Api's/history_user.php`,
          { token },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data.success) {
          setBookings({
            upcoming: response.data.upcoming || [],
            past: response.data.past || [],
            cancelled: response.data.deleted || [],
          });
        } else {
          console.error("Failed to fetch booking history");
        }
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className='w-full grow py-10'>
      <div className='flex flex-col justify-center w-full xs:px-15 lg:px-30'>
        <div className='bg-white flex text-lg sm:text-xl justify-center lg:px-5 px-5 lg:gap-5 gap-2'>
          {[
            { label: "Upcoming", key: "upcoming" },
            { label: "Past", key: "past" },
            { label: "Cancelled", key: "cancelled" },
          ].map(({ label, key }) => (
            <button
              key={key}
              className={`relative flex items-center justify-center gap-0.5 cursor-pointer 2xs:w-[33.3%] py-1 rounded-t-lg border-b-3 duration-300 ${
                activeTab === key
                  ? "font-semibold text-blue-700"
                  : "text-gray-400 border-transparent"
              }`}
              onClick={() => setActiveTab(key)}>
              {label}

              {activeTab === key && (
                <span
                  className={`text-white text-xs font-normal aspect-square px-2 w-5 flex justify-center items-center rounded-full ${
                    activeTab === key ? "bg-blue-700" : "bg-gray-400"
                  }`}>
                  {bookings[key]?.length || 0}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className='h-max grow lg:px-5 px-2 py-5 rounded-lg lg:gap-5 gap-2 justify-center w-full items-stretch grid grid-cols-1 md:grid-cols-2'>
          {bookings[activeTab].length > 0 ? (
            bookings[activeTab].map((booking) => (
              <BookingCard
                key={booking.id}
                date={booking.book_date}
                price={"100"}
                game={booking.game_name}
                slot={booking.slot}
                showCancel={activeTab === "upcoming"}
                id={booking.id.toString()}
              />
            ))
          ) : (
            <div className='text-gray-500 italic text-lg font-medium text-center col-span-2 py-5'>
              {activeTab === "upcoming"
                ? "No upcoming game bookings. Book a slot now!"
                : activeTab === "past"
                ? "No past game bookings. Start playing and check your history here!"
                : "No cancelled bookings."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryPage;
