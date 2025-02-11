import Navlink from "./Navlink";

function Navbar() {
  return (
    <>
      <div className="flex ">
        <div className="flex items-center">
          <div className="h-[50px] w-[50px] bg-amber-400"></div>
          <h1 className="mx-4 text-2xl">GetInPlay</h1>
        </div>
        <div className="flex grow items-center gap-2 ">
          <Navlink>Home</Navlink>
          <Navlink>Games</Navlink>
          <Navlink>Membership</Navlink>
          <Navlink>Contact Us</Navlink>
          <Navlink>About Us</Navlink>
        </div>
        <div className="flex items-center gap-2 px-10 py-1 shadow-gray-200 shadow-lg my-2 mx-5 cursor-pointer border-gray-200 border-1 rounded-xl active:translate-y-1 active:shadow-none duration-300">
          <div className="bg-amber-100 w-[15px] h-[15px]"></div>
          <div>Login</div>
        </div>
        <div className="flex items-center gap-2 px-10 py-1 shadow-red-200 shadow-lg my-2 mx-5 cursor-pointer bg-red-500 text-white rounded-xl active:translate-y-1 active:shadow-none duration-300">
          <div className="bg-amber-100 w-[15px] h-[15px]"></div>
          <div>Signup</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
