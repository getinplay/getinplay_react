import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ForgotPassword() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    e.preventDefault();
    if (!email) {
      setError("Email cannot be empty!");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email-id!");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full duration-500 h-[100vh] py-10 flex items-center justify-center">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="lg:w-[50%] md:w-[65%] duration-500 max-md:w-[90%] max-w-[500px] min-h-max py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-xl bg-white flex flex-col gap-3 items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-red-600 text-center">
            FORGOT PASSWORD?
          </p>
          <p className="text-lg font-semibold text-gray-400">
            We'll send you reset instructions.
          </p>
        </div>
        <div className="pt-2 text-xl font-medium flex flex-col items-center justify-center w-full gap-3 ">
          <div className="text-gray-600 flex items-center rounded-xl gap-2 focus-within:shadow-md focus-within:scale-[1.02] duration-300 px-4 py-2 m-2 bg-gray-200 w-5/6">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <input
              required
              type="email"
              name="email-id"
              id="email-id"
              placeholder="Email-Id"
              value={email}
              className="grow outline-none border-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <p className="sticky text-red-600 font-bold mx-5 text-center text-base">
          {error} &nbsp;
        </p>

        <button
          type="submit"
          className="cursor-pointer mb-5 bg-red-600 p-2 rounded-lg tracking-wide text-white font-bold text-xl active:translate-y-2 active:shadow-none duration-300 shadow-gray-400 hover:shadow-xl shadow-lg w-5/6">
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
