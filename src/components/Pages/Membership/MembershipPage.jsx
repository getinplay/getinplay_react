import React from "react";
import MembershipFullCard from "./MembershipFullCard";

function MembershipPage() {
  return (
    <div className="flex w-full flex-col gap-2 items-center p-5">
      <h1 className="text-red-500 sm:text-5xl text-4xl font-bold p-3">
        Compare our plans and find yours
      </h1>
      <p className="text-lg font-[400] text-gray-400">
        We offer exciting plan that makes you play hustle-free and enjoy the
        time.
      </p>
      <div className="py-5 w-full h-full justify-center items-center flex flex-col lg:flex-row gap-5 overflow-x-auto">
        <MembershipFullCard
          allSlotBooking={true}
          cancellation={4}
          bookBefore={24}
          extendSlot={true}
          stickAllowed={false}
          personAllowedPerTable={4}
          amount={0}
          popular={false}>
          Normal
        </MembershipFullCard>
        <MembershipFullCard
          allSlotBooking={true}
          cancellation={3}
          bookBefore={48}
          extendSlot={true}
          stickAllowed={true}
          personAllowedPerTable={5}
          amount={50}
          popular={true}>
          Silver
        </MembershipFullCard>
        <MembershipFullCard
          allSlotBooking={true}
          cancellation={2}
          bookBefore={72}
          extendSlot={true}
          stickAllowed={true}
          personAllowedPerTable={6}
          amount={100}
          popular={false}>
          Gold
        </MembershipFullCard>
      </div>
    </div>
  );
}

export default MembershipPage;
