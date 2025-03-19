import React, { useEffect, useState } from "react";
import MembershipFullCard from "./MembershipFullCard";
import axios from "axios";
import ConfirmLogin from "../../ConfirmLogin";
import ConfirmDialog from "../../ConfirmDialog";
import { toast, Bounce } from "react-toastify";

function MembershipPage() {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const membershipPlans = [
    {
      id: 1,
      name: "Basic",
      allSlotBooking: true,
      cancellation: 4,
      bookBefore: 24,
      extendSlot: true,
      stickAllowed: false,
      personAllowedPerTable: 4,
      amount: 0,
      popular: false,
    },
    {
      id: 2,
      name: "Silver",
      allSlotBooking: true,
      cancellation: 3,
      bookBefore: 48,
      extendSlot: true,
      stickAllowed: true,
      personAllowedPerTable: 5,
      amount: 50,
      popular: true,
    },
    {
      id: 3,
      name: "Gold",
      allSlotBooking: true,
      cancellation: 2,
      bookBefore: 72,
      extendSlot: true,
      stickAllowed: true,
      personAllowedPerTable: 6,
      amount: 100,
      popular: false,
    },
  ];

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

  const handleUpgradeClick = (planId) => {
    if (!document.cookie) {
      ConfirmLogin();
      return;
    }
    setSelectedPlan(planId);
    setShowConfirmModal(true);
  };

  const upgradePlan = async () => {
    setShowConfirmModal(false);
    if (!selectedPlan) return;
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/Api's/update_membership.php`,
      {
        token: document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          ?.split("=")[1],
        membership_id: selectedPlan,
      }
    );
    if (res.data.success) {
      setCurrentPlan(selectedPlan);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    fetchPlan();
  }, []);

  return (
    <div className='flex w-full flex-col gap-2 items-center p-5'>
      <h1 className='text-gray-700 sm:text-5xl text-4xl font-bold p-3'>
        Compare our plans and find yours
      </h1>
      <p className='sm:text-lg font-[400] text-gray-400'>
        We offer exciting plans that make you play hustle-free and enjoy the
        time.
      </p>
      <div className='py-5 w-full h-full justify-center items-center flex flex-col lg:flex-row gap-5 overflow-x-auto'>
        {membershipPlans.map((plan) => (
          <MembershipFullCard
            key={plan.id}
            {...plan}
            isPlanActive={currentPlan > plan.id}
            isCurrentPlan={currentPlan === plan.id}
            onClick={() => handleUpgradeClick(plan.id)}>
            {plan.name}
          </MembershipFullCard>
        ))}
      </div>
      <ConfirmDialog
        isOpen={showConfirmModal}
        title='Confirm Upgrade'
        message={
          <>
            Are you sure you want to <b>Upgrade</b> your <b>Membership?</b>
          </>
        }
        onConfirm={upgradePlan}
        onCancel={() => setShowConfirmModal(false)}
      />
    </div>
  );
}

export default MembershipPage;
