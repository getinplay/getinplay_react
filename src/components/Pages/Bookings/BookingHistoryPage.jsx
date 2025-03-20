import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";
import ReactPaginate from "react-paginate";

function BookingHistoryPage() {
  const [bookings, setBookings] = useState({
    upcoming: [],
    past: [],
    cancelled: [],
  });
  const [activeTab, setActiveTab] = useState("upcoming");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentBookings = bookings[activeTab].slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
              onClick={() => {
                setActiveTab(key);
                setCurrentPage(0);
              }}>
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
          {currentBookings.length > 0 ? (
            currentBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                date={booking.book_date}
                price={"100"}
                game={booking.game_name}
                slot={booking.slot}
                showCancel={activeTab === "upcoming"}
                id={booking.id.toString()}
                game_id={booking.game_id}
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

        {bookings[activeTab].length > itemsPerPage && (
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={Math.ceil(bookings[activeTab].length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center space-x-2 mt-5"}
            pageClassName={
              "px-1 sm:px-3 py-0.5 sm:py-1 bg-gray-200 rounded cursor-pointer list-none"
            }
            activeClassName={"bg-blue-600 text-blue-700 font-bold"}
            previousClassName={
              "px-1 sm:px-3 py-0.5 sm:py-1 bg-gray-300 rounded cursor-pointer list-none"
            }
            nextClassName={
              "px-1 sm:px-3 py-0.5 sm:py-1 bg-gray-300 rounded cursor-pointer list-none"
            }
            disabledClassName={"opacity-50 cursor-not-allowed"}
            pageLinkClassName={"block px-1 sm:px-3 py-0.5 sm:py-1"}
            previousLinkClassName={"block px-1 sm:px-3 py-0.5 sm:py-1"}
            nextLinkClassName={"block px-1 sm:px-3 py-0.5 sm:py-1"}
            breakLabel={"..."}
            breakClassName={"list-none"}
            pageRangeDisplayed={0}
            marginPagesDisplayed={1}
          />
        )}
      </div>
    </div>
  );
}

export default BookingHistoryPage;
