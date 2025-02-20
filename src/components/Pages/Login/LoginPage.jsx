import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// const PostRequestComponent = () => {
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async () => {
//     const url = 'http://192.168.0.130/html/Api/check_login.php';
//     const data = {
//       username: 'hello',
//       password: '12341234',
//     };
//     try {
//       const res = await axios.post(url, data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Response:', res.data);
//       setResponse(res.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setResponse(error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div >
//       <button className='border-2 p-2 w-max cursor-pointer' onClick={handleSubmit}>Send POST Request</button>
//       {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
//     </div>
//   );
// };

// export default PostRequestComponent;

function LoginPage() {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      setError("Username cannot be empty!");
    } else if (!password) {
      setError("Password cannot be empty!");
    } else if (username.length < 8) {
      setError("Username cannot be less than 8 characters!");
    } else if (password.length < 8) {
      setError("Password cannot be less than 8 characters!");
    } else {
      setError(null);
    }
  }

  return (
    <div className='w-full h-[100vh] py-10 flex items-center justify-center'>
      <img
        src='/assets/images/cricket.jpeg'
        alt='Background'
        className='absolute inset-0 w-full h-full object-cover blur-sm -z-10'
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className='lg:w-[50%] md:w-[65%] max-md:w-[90%] max-w-[500px] h-full min-h-max py-5 shadow-gray-500 shadow-xl rounded-xl bg-white flex flex-col gap-4 items-center justify-between'>
        <div>
          <p className='text-4xl font-bold text-red-500 text-center'>
            WELCOME BACK
          </p>
          <p className='text-xl font-semibold text-gray-700'>
            Login to your account
          </p>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-3 '>
          <div className='text-gray-700 flex items-center gap-2 shadow-gray-500 focus-within:shadow-md focus-within:scale-[1.02] shadow-sm duration-300 rounded-lg p-2 m-2 bg-gray-100 w-5/6'>
            <FontAwesomeIcon icon={faCircleUser} size='xl' />
            <input
              required
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              className='grow outline-none border-none'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='text-gray-700 flex items-center gap-2 shadow-gray-500 focus-within:shadow-md focus-within:scale-[1.02] shadow-sm duration-300 rounded-lg p-2 m-2 bg-gray-100 w-5/6'>
            <FontAwesomeIcon icon={faLock} size='xl' />
            <input
              required
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='grow outline-none border-none'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='w-5/6 flex justify-between select-none'>
            <div className='flex items-center gap-2'>
              <input type='checkbox' name='remember-me' id='remember-me' />
              <label htmlFor='remember-me'>Remember Me</label>
            </div>
            <Link to={"#"} className='hover:text-red-500'>
              Forgot password?
            </Link>
          </div>
        </div>
        <p className='text-red-500 font-bold mx-5 text-center text-base min-h-[1.5rem]'>
          {error}{" "}
        </p>

        <button
          type='submit'
          className='cursor-pointer bg-red-500 p-2 rounded-lg tracking-wide text-white font-bold text-xl active:translate-y-2 active:shadow-none duration-300 shadow-gray-500 shadow-lg w-5/6'>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
