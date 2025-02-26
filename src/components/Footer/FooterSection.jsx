import React from "react";
import { Link } from "react-router-dom";
import FooterLink from "./FooterLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHouse,
  faGamepad,
  faAward,
  faPhone,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPlaystation,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function FooterSection() {
  return (
    <div className="w-full justify-between mt-10 max-xs:items-start bg-gray-100 text-white flex max-md:flex-col items-center p-3 lg:px-10">
      <div className="text-2xl font-bold text-gray-700 flex items-center p-4 gap-2">
        <FontAwesomeIcon icon={faPlaystation} /> GetInPlay
      </div>
      <div className="xs:justify-evenly grow flex flex-col xs:flex-row text-start lg:px-10 xs:px-10 md:px-3">
        <div className="p-4 lg:w-[200px] sm:w-[150px] lg:max-w-[250px] lg:grow">
          <p className="text-xl font-bold mb-2 text-gray-700">Pages</p>
          <div className="lg:grid-cols-2 grid-cols-1 gap-1 grid font-semibold text-gray-500">
            <FooterLink toLink="/" icon={faHouse}>
              Home
            </FooterLink>
            <FooterLink toLink="/games" icon={faGamepad}>
              Games
            </FooterLink>
            <FooterLink toLink="/membership" icon={faAward}>
              Membership
            </FooterLink>
            <FooterLink toLink="/contact-us" icon={faPhone}>
              Contact Us
            </FooterLink>
            <FooterLink toLink="/about-us" icon={faAddressCard}>
              About Us
            </FooterLink>
          </div>
        </div>
        <div className="flex-1 max-w-[400px] text-start p-4 rounded-lg text-sm">
          <p className="text-xl text-gray-700 font-bold">Address</p>
          <div className="text-gray-500 font-semibold p-1 rounded-md">
            <Link
              to="https://maps.app.goo.gl/GxYPGCMzoLDwKCb39"
              target="__blank"
              className="hover:text-gray-700 flex hover:underline underline-offset-2 cursor-pointer text-justify">
              <span className="pr-1">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              National Plaza, S7, RC Dutt Rd, Aradhana Society, Vishwas Colony,
              Alkapuri, Vadodara, Gujarat 390007
            </Link>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <div className="text-gray-500 font-semibold p-1 rounded-md">
              <Link
                to="#"
                className="hover:text-gray-700 hover:underline underline-offset-2 cursor-pointer">
                <span className="pr-1">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                +91 912345678
              </Link>
            </div>
            <div className="text-gray-500 font-semibold p-1 rounded-md">
              <Link
                to="/contact-us"
                className="hover:text-gray-700 flex hover:underline underline-offset-2 cursor-pointer">
                <span className="pr-1">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>tempmail@gmail.com</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center max-xs:w-full">
        <p className="text-xl text-gray-700 font-bold ">Follow us</p>
        <div className="flex justify-center grow gap-4 items-center text-gray-500 py-4">
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            className="cursor-pointer hover:text-[#1877F2] active:text-[#1877F2] duration-300 active:scale-[1.1] hover:scale-[1.1]"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="cursor-pointer hover:text-[#1DA1F2] active:text-[#1DA1F2] duration-300 active:scale-[1.1] hover:scale-[1.1]"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            size="lg"
            className="cursor-pointer hover:text-[#FF0000] active:text-[#FF0000] duration-300 active:scale-[1.1] hover:scale-[1.1]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="cursor-pointer hover:text-[#c92bb7] active:text-[#c92bb7] duration-300 active:scale-[1.1] hover:scale-[1.1]"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
