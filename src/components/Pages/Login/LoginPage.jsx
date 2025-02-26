import { useState } from "react";
import axios from "axios";
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
        className="lg:w-[50%] md:w-[65%] max-md:w-[90%] max-w-[500px] h-full min-h-max py-5 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-xl bg-white flex flex-col gap-4 items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-red-500 text-center">
            WELCOME BACK
          </p>
          <p className="text-xl font-semibold text-gray-700">
            Login to your account
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 ">
          <div className="text-gray-700 flex items-center gap-2 shadow-gray-500 focus-within:shadow-md focus-within:scale-[1.02] shadow-sm duration-300 rounded-lg p-2 m-2 bg-gray-100 w-5/6">
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
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
          <div className="text-gray-700 flex items-center gap-2 shadow-gray-500 focus-within:shadow-md focus-within:scale-[1.02] shadow-sm duration-300 rounded-lg p-2 m-2 bg-gray-100 w-5/6">
            <FontAwesomeIcon icon={faLock} size="xl" />
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
          <div className="w-5/6 flex justify-between select-none">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="show-password"
                id="show-password"
                checked={showPass}
                onChange={() => setShowPass((prev) => !prev)}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
          </div>
        </div>
        <p className="text-red-500 font-bold mx-5 text-center text-base min-h-[1.5rem]">
          {error}{" "}
        </p>

        <button
          type="submit"
          className="cursor-pointer bg-red-500 p-2 rounded-lg tracking-wide text-white font-bold text-xl active:translate-y-2 active:shadow-none duration-300 shadow-gray-500 shadow-lg w-5/6">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
