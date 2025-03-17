import React from "react";
import { toast, Bounce } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function showConfirmActionToast(title) {
  return new Promise((resolve) => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-2 text-start text-lg">
          <p className="px-2 text-gray-700 font-semibold">{title}</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                resolve(true); // User confirmed
                closeToast();
              }}
              className="flex items-center gap-2 font-semibold cursor-pointer bg-green-500 text-white px-3 py-[1px] rounded-lg">
              <FontAwesomeIcon icon={faCircleCheck} />
              Yes
            </button>
            <button
              onClick={() => {
                resolve(false); // User canceled
                closeToast();
              }}
              className="flex items-center gap-2 font-semibold cursor-pointer bg-red-500 text-white px-3 py-[1px] rounded-lg">
              <FontAwesomeIcon icon={faCircleXmark} />
              No
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        transition: Bounce,
      }
    );
  });
}

export default showConfirmActionToast;
