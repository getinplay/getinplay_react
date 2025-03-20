import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";

function BookingHistoryPage() {
  const [bookings, setBookings] = useState({ upcoming: [], past: [] });
  const [isUpcoming, setIsUpcoming] = useState(true);

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
      <div className='flex flex-col justify-center w-full md:px-15 lg:px-30'>
        <div className='bg-white flex text-lg sm:text-xl lg:px-5 px-2 lg:gap-5 gap-2'>
          <button
            className={`cursor-pointer w-[50%] px-2 py-1 rounded-t-lg border-b-3 duration-300 ${
              isUpcoming
                ? " font-semibold text-blue-700"
                : "text-gray-700 border-transparent"
            }`}
            onClick={() => setIsUpcoming(true)}>
            Upcoming
          </button>
          <button
            className={`cursor-pointer w-[50%] px-2 py-1 rounded-t-lg border-b-3 duration-300 ${
              !isUpcoming
                ? "font-semibold text-blue-700 "
                : "text-gray-400 border-transparent"
            }`}
            onClick={() => setIsUpcoming(false)}>
            Past
          </button>
        </div>
        <div className='h-max md:grow lg:p-5 p-2 max-md:w-max rounded-lg lg:gap-5 gap-2 justify-center items-stretch grid md:grid-cols-2'>
          {bookings[isUpcoming ? "upcoming" : "past"].map((booking) => (
            <BookingCard
              key={booking.id}
              date={booking.book_date}
              price={"100"} // Price is not in the response, consider fetching it from API
              game={booking.game_name}
              slot={booking.slot}
              showCancel={isUpcoming}
              id={booking.id.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryPage;
