import React from "react";

function MembershipFullCard({
  amount,
  popular,
  onClick,
  isPlanActive,
  isCurrentPlan,
  children,
  features,
}) {
  return (
    <div
      className={`group select-none xs:max-w-[350px] max-w-[300px] flex flex-col gap-1 bg-white rounded-xl border-1 ${
        isCurrentPlan
          ? "border-green-600"
          : isPlanActive
          ? "border-gray-300 "
          : "border-gray-300 hover:shadow-lg duration-300 hover:bg-gradient-to-tr from-indigo-500 via-violet-600 to-cyan-400"
      }  duration-300`}>
      <div
        className={`${
          isCurrentPlan
            ? "bg-green-200"
            : isPlanActive
            ? "text-gray-600"
            : "group-hover:shadow-lg group-hover:bg-white/40 group-hover:text-white"
        } relative p-5 sm:py-8 flex bg-gray-100 flex-col gap-1 rounded-xl items-start duration-300`}>
        <p className='text-xl sm:text-2xl font-medium'>{children}</p>
        <p
          className={`text-lg sm:text-xl ${
            !isPlanActive && !isCurrentPlan
              ? " group-hover:text-gray-100 "
              : " "
          }`}>
          <span
            className={`text-3xl sm:text-4xl font-semibold text-black duration-300  ${
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
                : "group-hover:text-[#4A5BE6] group-hover:bg-white/80 bg-[#4A5BE6]"
            } rounded-full absolute top-5 right-5 px-2 py-1 text-white `}>
            Popular
          </div>
        )}
      </div>
      <div
        className={`${
          isPlanActive ? "text-gray-400" : ""
        } p-5 grow flex flex-col rounded-xl gap-3 sm:gap-4 text-start`}>
        {features}
      </div>
      <div className='p-4'>
        <button
          onClick={isPlanActive || isCurrentPlan ? () => {} : onClick}
          className={`sm:text-lg text-white rounded-xl p-1 w-full ${
            isCurrentPlan
              ? "bg-green-700"
              : isPlanActive
              ? "bg-gray-500"
              : " bg-[#4A5BE6] cursor-pointer group-hover:bg-white/40 hover:bg-white/60 duration-300 hover:text-"
          }`}>
          {isCurrentPlan ? "Current Plan" : isPlanActive ? "Active" : "Upgrade"}
        </button>
      </div>
    </div>
  );
}

export default MembershipFullCard;
