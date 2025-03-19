import React from "react";
import MembershipCard from "../Cards/MembershipCard";

function MembershipSection() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='subtitle'>Membership Plans</h2>
      <p className='sm:text-base text-sm'>
        Choose the best plan for your game slot bookings.
      </p>
      <div className='flex lg:flex-row flex-col w-[80vw] gap-4 pt-10 justify-evenly items-center'>
        <MembershipCard rate={"₹0"} popular={false} onlineAccess={true}>
          BASIC
        </MembershipCard>
        <MembershipCard rate={"₹50"} popular={true} onlineAccess={true}>
          SILVER
        </MembershipCard>
        <MembershipCard rate={"₹100"} popular={false} onlineAccess={true}>
          GOLD
        </MembershipCard>
      </div>
    </div>
  );
}

export default MembershipSection;
