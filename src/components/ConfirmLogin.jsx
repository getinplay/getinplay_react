import React from "react";
import { toast, Bounce } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ConfirmLoginToast({ closeToast }) {
  const navigate = useNavigate();

  return (
    <div className="flex-col gap-2 items-center text-start">
      <p className="px-2">Please login before you upgrade your membership!</p>
      <button
        onClick={() => {
          navigate("/login");
          closeToast(); // Close the toast after clicking Login
        }}
        className="flex gap-2 items-center justify-center font-semibold cursor-pointer bg-red-500 m-2 text-white px-3 py-[1px] rounded-lg">
        <FontAwesomeIcon icon={faRightToBracket} />
        Login
      </button>
    </div>
  );
}

function showConfirmLoginToast() {
  toast(({ closeToast }) => <ConfirmLoginToast closeToast={closeToast} />, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
    transition: Bounce,
  });
}

export default showConfirmLoginToast;
