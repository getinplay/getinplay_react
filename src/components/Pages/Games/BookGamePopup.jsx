import React, { useRef, useState } from "react";

function BookGamePopup({ terms, hideBooking, agree, setAgree }) {
  const bookingRef = useRef();

  const hideBookingPage = (e) => {
    if (bookingRef.current === e.target) {
      hideBooking();
    }
  };

  return (
    <div
      ref={bookingRef}
      onClick={hideBookingPage}
      className="flex items-center justify-center inset-0 fixed bg-gray-200/50 backdrop-blur-xs z-30">
      <div className="flex flex-col items-center gap-2 max-w-[85vw] sm:max-w-150 sm:w-[80vw] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.3)] overflow-hidden rounded-xl p-5">
        <p className="font-bold text-lg text-gray-700">TERMS & CONDITIONS</p>

        <div className="bg-gray-100 overflow-hidden rounded-lg">
          <p
            dangerouslySetInnerHTML={{
              __html: terms,
            }}
            className="p-2 pl-6 overflow-y-auto max-h-50 text-sm sm:text-base text-justify text-gray-600"></p>
        </div>
        <p className="flex items-center w-full gap-2">
          <input
            value={agree}
            onChange={() => setAgree((prev) => !prev)}
            type="checkbox"
            name="terms"
            id="terms"
          />{" "}
          <label htmlFor="terms">I agree the Terms & Conditions</label>
        </p>
        <button
          className={`${
            agree
              ? "bg-red-600 cursor-pointer active:translate-y-1 active:bg-gray-300"
              : "bg-gray-300"
          } duration-300 text-white rounded-lg font-medium text-lg px-3`}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookGamePopup;
