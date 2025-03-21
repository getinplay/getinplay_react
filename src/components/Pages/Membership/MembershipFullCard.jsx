import React from "react";

function MembershipFullCard({
  cancellation,
  bookBefore,
  personAllowedPerTable,
  amount,
  popular,
  onClick,
  isPlanActive,
  isCurrentPlan,
  children,
}) {
  return (
    <div
      className={`group select-none xs:max-w-[350px] max-w-[300px] flex flex-col gap-1 bg-white rounded-xl border-1 ${
        isCurrentPlan
          ? "border-green-600"
          : isPlanActive
          ? "border-gray-300 "
          : "border-gray-300 hover:shadow-lg hover:bg-gray-100 hover:scale-103"
      }  duration-300`}>
      <div
        className={`${
          isCurrentPlan
            ? "bg-green-200"
            : isPlanActive
            ? "text-gray-600"
            : "group-hover:shadow-lg group-hover:bg-[#4A5BE6] group-hover:text-white"
        } relative p-5 sm:py-8 flex bg-gray-100 flex-col gap-1 rounded-xl items-start duration-300`}>
        <p className='text-xl sm:text-2xl font-medium'>{children}</p>
        <p
          className={`text-lg sm:text-xl text-gray-500 ${
            !isPlanActive && !isCurrentPlan ? " group-hover:text-gray-300 " : ""
          } duration-300`}>
          <span
            className={`text-3xl sm:text-4xl font-semibold text-black duration-300 ${
              !isPlanActive && !isCurrentPlan ? "group-hover:text-white" : ""
            }`}>
            ₹{amount}{" "}
          </span>
          /per month
        </p>
        {popular && (
          <div
            className={`${
              isCurrentPlan
                ? "bg-green-700"
                : isPlanActive
                ? "bg-gray-500 text-gray-200"
                : "group-hover:text-[#4A5BE6] group-hover:bg-white bg-[#4A5BE6]"
            } rounded-full absolute top-5 right-5 px-2 py-1 text-white `}>
            Popular
          </div>
        )}
        <button
          onClick={isPlanActive || isCurrentPlan ? () => {} : onClick}
          className={`text-lg sm:text-xl font-medium text-white rounded-xl p-1 sm:p-2 mt-3 sm:mt-5 w-full ${
            isCurrentPlan
              ? "bg-green-700"
              : isPlanActive
              ? "bg-gray-500"
              : "group-hover:bg-[#34409e] bg-[#4A5BE6] cursor-pointer hover:bg-white duration-300 hover:text-[#4A5BE6]"
          }`}>
          {isCurrentPlan ? "Current Plan" : isPlanActive ? "Active" : "Upgrade"}
        </button>
      </div>
      <div
        className={`${
          isPlanActive ? "text-gray-400" : ""
        } p-5 flex flex-col rounded-xl gap-3 sm:gap-4 text-start`}>
        <p>30min - 1hr Booking</p>
        <p>Cancellation {cancellation}hrs before game</p>
        <p>Book before {bookBefore}hrs</p>
        <p>Extend slot if free</p>
        <p>Upto {personAllowedPerTable} person on single table</p>
      </div>
    </div>
  );
}

export default MembershipFullCard;
