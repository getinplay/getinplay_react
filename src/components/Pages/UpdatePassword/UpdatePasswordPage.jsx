import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function UpdatePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Simplified password validation function
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!oldPassword) {
      newErrors.oldPassword = "Old password is required";
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (!validatePassword(newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Get token from cookies
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];

      if (!token) {
        console.error("Auth token not found");
        toast.error("You are not authenticated. Please login again.", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        navigate("/home");
        return;
      }

      // Parse the token to get user_id
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.user_id;

      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/final_project/final_project/Api's/change_password.php`,
        {
          token: token,
          user_id: userId,
          old_password: oldPassword,
          new_password: newPassword,
        }
      );

      if (response.data.status === "success") {
        toast.success("Password updated successfully!", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        // Clear form
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrors({});

        // Redirect after successful update
        setTimeout(() => navigate("/profile"), 2000);
      } else {
        toast.error(response.data.message || "Failed to update password", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      }
    } catch (error) {
      console.error("Error updating password:", error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message, {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      } else if (error.response?.status === 401) {
        toast.error("Invalid old password. Please try again.", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      } else if (error.response?.status === 400) {
        toast.error("Bad request. Please check your input.", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      } else if (error.response?.status === 500) {
        toast.error("Server error. Please try again later.", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      } else {
        toast.error("An error occurred. Please try again.", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:w-lg shadow-[0_2px_16px_rgba(0,0,0,0.4)] mt-5 rounded-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-700 pb-3 text-center">
        Update Your Password
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 items-center justify-center w-full sm:text-lg font-medium text-gray-600">
          <div className="flex flex-col text-start w-full">
            <label htmlFor="old-password" className="px-2">
              Old Password
            </label>
            <div className="flex items-center gap-1 focus-within:shadow-md focus-within:scale-[1.02] duration-300 rounded-xl px-4 py-2 bg-gray-200 w-full">
              <input
                type={showOldPassword ? "text" : "password"}
                name="old-password"
                id="old-password"
                placeholder="Old Password"
                className="grow min-w-0 outline-none border-none bg-transparent"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="text-gray-500 focus:outline-none">
                <FontAwesomeIcon icon={showOldPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="select-none text-red-500 text-sm px-2">
              {errors.oldPassword || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col text-start w-full">
            <label htmlFor="new-password" className="px-2">
              New Password
            </label>
            <div className="flex items-center gap-1 focus-within:shadow-md focus-within:scale-[1.02] duration-300 rounded-xl px-4 py-2 bg-gray-200 w-full">
              <input
                type={showNewPassword ? "text" : "password"}
                name="new-password"
                id="new-password"
                placeholder="New Password"
                className="grow min-w-0 outline-none border-none bg-transparent"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="text-gray-500 focus:outline-none">
                <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="select-none text-red-500 text-sm px-2">
              {errors.newPassword || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col text-start w-full">
            <label htmlFor="confirm-password" className="px-2">
              Confirm New Password
            </label>
            <div className="flex items-center gap-1 focus-within:shadow-md focus-within:scale-[1.02] duration-300 rounded-xl px-4 py-2 bg-gray-200 w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm New Password"
                className="grow min-w-0 outline-none border-none bg-transparent"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-gray-500 focus:outline-none">
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            <p className="select-none text-red-500 text-sm px-2">
              {errors.confirmPassword || "\u00A0"}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`select-none mt-5 cursor-pointer bg-[#4A5BE6] p-2 rounded-lg tracking-wide font-normal text-white sm:text-lg active:translate-y-2 active:shadow-none duration-300 shadow-gray-400 hover:shadow-xl shadow-lg w-full ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}>
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordPage;
