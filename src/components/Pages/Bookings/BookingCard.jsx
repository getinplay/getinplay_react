import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function BookingCard({ date, price, game, slot, showCancel, id }) {
  return (
    <div className='flex shadow-[0_2px_16px_rgba(0,0,0,0.3)] bg-white px-2 rounded-md text-start'>
      {showCancel && (
        <div className='flex gap-1'>
          <div className='flex hover:text-red-400 items-center justify-center text-lg text-gray-400 cursor-pointer'>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
          <div className='bg-gray-300 w-0.25 h-full'></div>
        </div>
      )}
      <div className='w-full flex flex-col gap-1 px-2 py-1'>
        <div className='flex text-lg sm:text-xl justify-between gap-2'>
          <div className='flex flex-col'>
            <p className='font-medium'>{date}</p>
            <p className='text-gray-400 max-sm:text-sm text-base'>
              Booking-ID: #{id}
            </p>
          </div>
          <p className='font-semibold  text-red-400'>₹{price}</p>
        </div>
        {/* <hr className='text-gray-300' /> */}
        <div className='flex max-2xs:flex-col sm:text-lg justify-between 2xs:gap-2'>
          <p className='font-medium tracking-wide'>{game.toUpperCase()}</p>
          <p className=''>{slot}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
