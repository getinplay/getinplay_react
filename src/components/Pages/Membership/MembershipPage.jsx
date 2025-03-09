import React, { useEffect, useState } from "react";
import MembershipFullCard from "./MembershipFullCard";
import axios from "axios";

function MembershipPage() {
  const [currentPlan, setCurrentPlan] = useState(0);

  const fetchPlan = async () => {
    if (!document.cookie) {
      return;
    }
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/Api's/decode.php`,
      {
        token: document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          ?.split("=")[1],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setCurrentPlan(res.data.data.membership_id);
  };

  const upgradePlan = async (planId) => {
    if (!confirm("Are you sure you want to Upgrade your membership?")) {
      return;
    }
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/Api's/update_membership.php`,
      {
        token: document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          ?.split("=")[1],
        membership_id: planId,
      }
    );
    if (res.data.success) {
      setCurrentPlan(planId);
      alert(res.data.message);
    }
  };

  useEffect(() => {
    fetchPlan();
  }, []);

  return (
    <div className="flex w-full flex-col gap-2 items-center p-5">
      <h1 className="text-red-500 sm:text-5xl text-4xl font-bold p-3">
        Compare our plans and find yours
      </h1>
      <p className="sm:text-lg font-[400] text-gray-400">
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
          popular={false}
          isPlanActive={currentPlan >= 1}
          onClick={() => upgradePlan(1)}>
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
          popular={true}
          isPlanActive={currentPlan >= 2}
          onClick={() => upgradePlan(2)}>
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
          popular={false}
          isPlanActive={currentPlan >= 3}
          onClick={() => upgradePlan(3)}>
          Gold
        </MembershipFullCard>
      </div>
    </div>
  );
}

export default MembershipPage;
