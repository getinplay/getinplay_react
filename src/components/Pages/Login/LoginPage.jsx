import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      setError("Username cannot be empty!");
    } else if (!password) {
      setError("Password cannot be empty!");
    } else if (password.length < 8) {
      setError("Password cannot be less than 8 characters!");
    } else {
      setError("");
      const url =
        "http://192.168.0.130/final_project/final_project/Api's/check_login.php";
      const data = {
        username: username,
        password: password,
      };
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message);
    }
  };

  return (
    <div className="w-full h-[100vh] py-10 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="lg:w-[50%] md:w-[65%] max-md:w-[90%] max-w-[500px] min-h-max py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-xl bg-white flex flex-col gap-3 items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-red-500 text-center">
            WELCOME BACK
          </p>
          <p className="text-lg font-semibold text-gray-400">
            Login to your account
          </p>
        </div>
        <div className="flex flex-col pt-2 items-center justify-center w-full gap-3 sm:text-lg font-medium text-xl text-gray-600">
          <div className="flex items-center gap-2 focus-within:shadow-md focus-within:scale-[1.02] duration-300 rounded-xl px-4 py-2 m-2 bg-gray-200 w-5/6">
            <FontAwesomeIcon icon={faCircleUser} size="lg" />
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="grow outline-none border-none"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 focus-within:shadow-md focus-within:scale-[1.02] duration-300 rounded-xl px-4 py-2 m-2 bg-gray-200 w-5/6">
            <FontAwesomeIcon icon={faLock} size="lg" />
            <input
              required
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="grow outline-none border-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-5/6 flex justify-between select-none px-1">
            <div className="flex items-center gap-2 ">
              <div className="inline-flex items-center">
                <label
                  htmlFor="show-password"
                  className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    name="show-password"
                    id="show-password"
                    checked={showPass}
                    onChange={() => setShowPass((prev) => !prev)}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                  </span>
                </label>
              </div>
              <label className="cursor-pointer" htmlFor="show-password">
                Show Password
              </label>
            </div>
            <Link
              to={"/forgot-password"}
              className="hover:text-red-500"
              viewTransition>
              Forgot password?
            </Link>
          </div>
        </div>
        <p className="text-red-500 font-bold mx-5 text-center text-base">
          {error}&nbsp;
        </p>

        <button
          type="submit"
          className="mb-5 cursor-pointer bg-red-500 p-2 rounded-lg tracking-wide text-white font-bold text-xl active:translate-y-2 active:shadow-none duration-300 shadow-gray-400 hover:shadow-xl shadow-lg w-5/6">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
