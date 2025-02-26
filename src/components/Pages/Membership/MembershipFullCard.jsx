import React from "react";

function MembershipFullCard({
  allSlotBooking,
  cancellation,
  bookBefore,
  extendSlot,
  personAllowedPerTable,
  amount,
  popular,
  children,
}) {
  return (
    <div className="w-[350px] flex flex-col bg-white gap-1 bg-gray-100 rounded-xl border-1 border-gray-300 shadow-lg">
      <div className="relative group cursor-pointer shadow-red-400 hover:shadow-lg p-5 py-10 flex bg-gray-100 flex-col gap-3 rounded-xl items-start hover:scale-[1.1] hover:bg-red-500 hover:text-white duration-300">
        <p className="text-3xl font-semibold">{children}</p>
        <p className="text-2xl font-semibold">
          <span className="text-4xl font-bold">${amount}</span>/month
        </p>
        {popular && (
          <div className="rounded-full absolute top-5 right-5 px-2 py-1 bg-red-500 text-white group-hover:bg-white group-hover:text-red-500">
            Popular
          </div>
        )}
        <button className="text-xl font-medium text-white rounded-xl p-2 mt-5 w-full bg-red-500 cursor-pointer group-hover:bg-red-300 ">
          Upgrade
        </button>
      </div>
      <div className="p-5 flex flex-col rounded-xl gap-6 text-xl text-start font-medium">
        <p className={`${allSlotBooking ? "" : "text-gray-300 line-through"}`}>
          30min - 1hr Booking
        </p>
        <p>
          Cancellation <span className='text-red-500 font-bold'>{cancellation}hrs</span> before game
        </p>
        <p>
          Book before <span className='text-red-500 font-bold'>{bookBefore}hrs</span>
        </p>
        <p className={`${extendSlot ? "" : "text-gray-300 line-through"}`}>
          Extend slot if free
        </p>
        <p>
          Upto <span className='text-red-500 font-bold'>{personAllowedPerTable}</span> person on single table
        </p>
      </div>
    </div>
  );
}

export default MembershipFullCard;
