import NavBarLink from "./NavBarLink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="sticky md:px-15 top-0 z-30 bg-white h-[60px] flex w-full max-sm:px-1 py-1 items-center justify-between border-b-1 border-gray-200">
      <div className="flex items-center text-xl sm:text-2xl mx-2 z-20">
        <FontAwesomeIcon icon={faPlaystation} className="text-red-500" />
        <h1 className="mx-2 font-semibold">GetInPlay</h1>
      </div>
      <div
        className={`${
          showNav ? "" : "max-lg:hidden"
        } lg:relative max-lg:flex justify-center left-0 absolute max-lg:top-17 h-max w-full z-10`}>
        <div className="bg-gray-50 text-sm sm:text-base lg:bg-white flex max-lg:w-[70%] lg:flex-row flex-col items-center lg:gap-2 border-gray-200 border-2 lg:border-none lg:m-0 rounded-lg">
          <NavBarLink onClick={() => setShowNav(false)} toLink="/">
            Home
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink="/games">
            Games
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink="/membership">
            Membership
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink="/contact-us">
            Contact Us
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink="/about-us">
            About Us
          </NavBarLink>
        </div>
      </div>
      <div className="flex items-center text-sm sm:text-base font-semibold z-20 ">
        <Link
          to="/login"
          target="_blank"
          className="select-none bg-red-500 text-white hover:bg-red-400 flex items-center gap-2 py-1 px-2 md:px-6 h-min shadow-gray-400 shadow-md my-2 m-2 cursor-pointer rounded-xl active:translate-y-1 active:shadow-none duration-300">
          <FontAwesomeIcon icon={faRightToBracket} />
          <div>Login</div>
        </Link>
        <button
          onClick={() => {
            setShowNav(!showNav);
          }}>
          <FontAwesomeIcon
            icon={faBars}
            className="px-2 cursor-pointer lg:!hidden"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
