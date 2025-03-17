import React, { useRef } from "react";
import { toast, Bounce } from "react-toastify";
import ConfirmActionToast from "../../ConfirmToast";
import axios from "axios";

function BookGamePopup({
  terms,
  hideBooking,
  agree,
  setAgree,
  slotTime,
  gameId,
  gameName,
  selectedDate,
  setRefreshPage,
}) {
  const bookingRef = useRef();

  const hideBookingPage = (e) => {
    if (bookingRef.current && !bookingRef.current.contains(e.target)) {
      setAgree(false);
      hideBooking();
    }
  };

  const bookSlot = async (slot, game_id) => {
    const data = {
      token: document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1],
      date: selectedDate.toISOString().split("T")[0].replace(/-/g, "/"),
      slot: slot,
      game_id: game_id,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/Api's/book_game.php`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  };

  const confirmBooking = async () => {
    if (!agree) return;

    hideBooking();

    const userConfirmed = await ConfirmActionToast(
      `Are you sure you want to book '${slotTime}' slot for ${gameName} on ${selectedDate
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "/")}?`
    );

    if (!userConfirmed) return;

    try {
      await toast.promise(
        new Promise(async (resolve, reject) => {
          const res = await bookSlot(slotTime, gameId);
          if (res.success) {
            resolve(res.message);
          } else {
            reject(new Error(res.message));
          }
        }),
        {
          pending: "Booking in progress...",
          success: {
            render({ data }) {
              return data; 
            },
          },
          error: {
            render({ data }) {
              return data.message || "Booking failed. Please try again.";
            },
          },
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
          transition: Bounce,
        }
      );

      setRefreshPage((prev) => !prev);
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div
      onClick={hideBookingPage}
      className='flex items-center justify-center inset-0 fixed bg-gray-200/50 backdrop-blur-xs z-30'>
      <div
        ref={bookingRef}
        className='flex flex-col items-center gap-2 max-w-[85vw] sm:max-w-150 sm:w-[80vw] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.3)] overflow-hidden rounded-xl p-5'>
        <p className='font-bold text-lg text-gray-700'>TERMS & CONDITIONS</p>

        <div className='bg-gray-100 overflow-hidden rounded-lg'>
          <p
            dangerouslySetInnerHTML={{ __html: terms }}
            className='p-2 pl-6 overflow-y-auto max-h-50 text-sm sm:text-base text-justify text-gray-600'></p>
        </div>

        <p className='flex items-center w-full gap-2'>
          <input
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
            type='checkbox'
            name='terms'
            id='terms'
          />
          <label htmlFor='terms'>I agree to the Terms & Conditions</label>
        </p>

        <button
          onClick={confirmBooking}
          className={`${
            agree
              ? "bg-red-600 cursor-pointer active:translate-y-1 active:bg-gray-300"
              : "bg-gray-300"
          } duration-300 text-white rounded-lg font-medium text-lg px-3`}>
          Continue Booking
        </button>
      </div>
    </div>
  );
}

export default BookGamePopup;
