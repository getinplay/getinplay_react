import NavBarLink from "./NavBarLink";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const navLinksRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const closeNavLinks = (e) => {
    if (navLinksRef.current === e.target) {
      setShowNav((prev) => !prev);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/Api's/decode.php`,
        {
          token: document.cookie
            .split("; ")
            .find((row) => row.startsWith("authToken="))
            ?.split("=")[1],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLogin(res.data.success);
    };
    getInfo();
    if (window.innerWidth < 1024 && showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is enabled when component unmounts
    };
  }, [showNav]);
  return (
    <nav className='sticky md:px-5 top-0 z-30 bg-white h-18 flex w-full max-sm:px-1 py-1 items-center justify-between border-b-1 border-gray-200'>
      <div className='p-2 z-20 lg:w-[250px] w-[170px]'>
        <Link to={"/"}>
          <img
            src='/assets/images/getinplay.png'
            alt='GETINPLAY LOGO'
            className='object-contain'
          />
        </Link>
      </div>

      <div
        ref={navLinksRef}
        onClick={closeNavLinks}
        onScroll={(e) => {
          e.preventDefault;
        }}
        className={`${
          showNav ? "" : "max-lg:hidden"
        } lg:relative max-lg:mt-18 max-lg:flex justify-end backdrop-blur-xs duration-300 bg-gray-200/50 max-lg:inset-0 absolute max-lg:h-dvh w-full z-10`}>
        <div className='max-lg:border-l-1 border-gray-200 text-sm sm:text-base bg-white flex lg:w-auto sm:w-max md:w-45 px-5 lg:flex-row flex-col items-start lg:gap-5 lg:m-0'>
          <NavBarLink onClick={() => setShowNav(false)} toLink='/'>
            Home
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink='/games'>
            Games
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink='/membership'>
            Membership
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink='/contact-us'>
            Contact Us
          </NavBarLink>
          <NavBarLink onClick={() => setShowNav(false)} toLink='/about-us'>
            About Us
          </NavBarLink>
        </div>
      </div>

      <div className='flex items-center 2xs:text-sm sm:text-base text-xs font-semibold z-20 '>
        <div
          onClick={() => {
            if (isLogin) {
              document.cookie =
                "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              navigate(0);
            } else {
              navigate("/login");
            }
          }}
          className='select-none bg-[#4A5BE6] text-white hover:bg-[#1529be] flex items-center gap-2 py-0.5 2xs:py-1 px-1 2xs:px-2 md:px-6 h-min shadow-gray-400 shadow-md my-2 m-2 cursor-pointer rounded-md active:translate-y-1 active:shadow-none duration-300'>
          <FontAwesomeIcon
            icon={isLogin ? faRightFromBracket : faRightToBracket}
          />
          <div>{isLogin ? "Logout" : "Login"}</div>
        </div>
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
    </nav>
  );
}

export default Navbar;
