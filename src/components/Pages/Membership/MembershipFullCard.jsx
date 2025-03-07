import React from "react";

function MembershipFullCard({
  cancellation,
  bookBefore,
  personAllowedPerTable,
  amount,
  popular,
  onClick,
  isPlanActive,
  children,
}) {
  return (
    <div className='select-none xs:max-w-[350px] max-w-[300px] flex flex-col bg-white gap-1 bg-gray-100 rounded-xl border-1 border-gray-300 shadow-lg'>
      <div
        className={`${
          isPlanActive
            ? "text-gray-600"
            : "hover:shadow-lg hover:bg-red-500 hover:scale-[1.1] hover:text-white"
        } relative group shadow-red-400 p-5 sm:py-8 flex bg-gray-100 flex-col gap-3 rounded-xl items-start duration-300`}>
        <p className='text-2xl sm:text-3xl font-semibold'>{children}</p>
        <p className='text-lg sm:text-2xl font-semibold'>
          <span className='text-3xl sm:text-4xl font-bold'>${amount}</span>
          /month
        </p>
        {popular && (
          <div
            className={`${
              isPlanActive
                ? "bg-gray-500 text-gray-200"
                : "group-hover:text-red-500 group-hover:bg-white bg-red-500"
            } rounded-full absolute top-5 right-5 px-2 py-1 text-white `}>
            Popular
          </div>
        )}
        <button
          onClick={isPlanActive ? () => {} : onClick}
          className={`text-lg sm:text-xl font-medium text-white rounded-xl p-1 sm:p-2 mt-3 sm:mt-5 w-full ${
            isPlanActive
              ? "bg-gray-500"
              : "group-hover:bg-red-300 bg-red-500 cursor-pointer"
          }`}>
          {isPlanActive ? "Active" : "Upgrade"}
        </button>
      </div>
      <div
        className={`${
          isPlanActive ? "text-gray-400" : ""
        } p-5 flex flex-col rounded-xl gap-3 sm:gap-6 text-xl text-start font-medium`}>
        <p>30min - 1hr Booking</p>
        <p>
          Cancellation{" "}
          <span
            className={`${
              isPlanActive ? "text-red-400" : "text-red-500"
            } font-bold`}>
            {cancellation}hrs
          </span>
          before game
        </p>
        <p>
          Book before{" "}
          <span
            className={`${
              isPlanActive ? "text-red-400" : "text-red-500"
            } font-bold`}>
            {bookBefore}hrs
          </span>
        </p>
        <p>Extend slot if free</p>
        <p>
          Upto{" "}
          <span
            className={`${
              isPlanActive ? "text-red-400" : "text-red-500"
            } font-bold`}>
            {personAllowedPerTable}
          </span>{" "}
          person on single table
        </p>
      </div>
    </div>
  );
}

export default MembershipFullCard;
