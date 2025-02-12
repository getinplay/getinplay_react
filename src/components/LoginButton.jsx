import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function LoginButton() {
  return (
    <>
      <button className="select-none bg-red-500 text-white hover:bg-red-400 flex items-center gap-2 py-1 px-2 md:px-6 h-min shadow-gray-400 shadow-md my-2 m-2 cursor-pointer rounded-xl active:translate-y-1 active:shadow-none duration-300">
        <FontAwesomeIcon icon={faRightToBracket} />
        <div>Login</div>
      </button>
    </>
  )
}

export default LoginButton;

{/* <div className="flex items-center gap-2 px-10 py-1 shadow-red-200 shadow-lg my-2 mx-5 cursor-pointer bg-red-500 text-white rounded-xl active:translate-y-1 active:shadow-none duration-300">
  <div className="bg-amber-100 w-[15px] h-[15px]"></div>
  <div>Signup</div>
</div> */ }