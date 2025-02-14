import Navlink from "../Navlink";
import LoginButton from "../LoginButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className='relative flex w-full max-sm:px-1 py-1 items-center justify-between border-b-1 border-gray-200'>
        <div className='flex items-center text-2xl mx-2 z-20'>
          <FontAwesomeIcon icon={faPlaystation} className='text-red-500' />
          <h1 className='mx-2 font-semibold'>GetInPlay</h1>
        </div>
        <div
          className={`${
            showNav ? "" : "max-lg:hidden"
          } max-lg:right-0 lg:relative max-lg:px-10 absolute max-lg:top-10 h-max w-full z-10`}>
          <div className='relative bg-gray-50 lg:bg-white flex lg:flex-row flex-col grow items-center lg:gap-2 border-gray-200 border-2 lg:border-none lg:m-0 rounded-lg m-5'>
            <Navlink>Home</Navlink>
            <Navlink>Games</Navlink>
            <Navlink>Membership</Navlink>
            <Navlink>Contact Us</Navlink>
            <Navlink>About Us</Navlink>
          </div>
        </div>
        <div className='flex items-center text-md font-semibold z-20 '>
          <LoginButton />
          <button
            onClick={() => {
              setShowNav(!showNav);
            }}>
            <FontAwesomeIcon
              icon={faBars}
              className='px-2 cursor-pointer lg:!hidden'
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
