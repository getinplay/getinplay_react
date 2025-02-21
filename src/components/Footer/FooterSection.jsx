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
    <div className='w-full mt-10 bg-gray-100 text-white flex max-md:flex-col items-center md:items-stretch p-3'>
      <div className='text-3xl font-bold text-gray-700 flex items-center p-4 gap-2'>
        <FontAwesomeIcon icon={faPlaystation} /> GetInPlay
      </div>
      <div className='w-full flex flex-col xs:flex-row justify-evenly items-stretch'>
        <div className='flex-1 p-4'>
          <p className='text-2xl font-bold mb-2 text-gray-700'>Pages</p>
          <div className='flex flex-col gap-1 items-center font-semibold text-gray-500'>
            <FooterLink toLink='/' icon={faHouse}>
              Home
            </FooterLink>
            <FooterLink toLink='/games' icon={faGamepad}>
              Games
            </FooterLink>
            <FooterLink toLink='/membership' icon={faAward}>
              Membership
            </FooterLink>
            <FooterLink toLink='/contact-us' icon={faPhone}>
              Contact Us
            </FooterLink>
            <FooterLink toLink='/about-us' icon={faAddressCard}>
              About Us
            </FooterLink>
          </div>
        </div>
        <div className='flex-1 p-4 rounded-lg'>
          <p className='text-2xl text-gray-700 font-bold'>Address</p>
          <div className='text-lg text-gray-500 font-semibold p-1 rounded-md'>
            <Link
              to='https://maps.app.goo.gl/GxYPGCMzoLDwKCb39'
              target='__blank'
              className='hover:text-gray-700 hover:underline underline-offset-2 cursor-pointer'>
              <span className='px-3'>
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              perspiciatis!
            </Link>
          </div>
          <div className='text-lg text-gray-500 font-semibold p-1 rounded-md'>
            <Link
              to='#'
              className='hover:text-gray-700 hover:underline underline-offset-2 cursor-pointer'>
              <span className='px-3'>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +91 912345678
            </Link>
          </div>
          <div className='text-lg text-gray-500 font-semibold p-1 rounded-md'>
            <Link
              to='/contact-us'
              className='hover:text-gray-700 hover:underline underline-offset-2 cursor-pointer'>
              <span className='px-3'>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              tempmail@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className='p-4 flex flex-col grow justify-center'>
        <p className='text-2xl text-gray-700 font-bold '>Follow us</p>
        <div className='flex justify-evenly grow gap-4 items-center text-gray-500 py-4'>
          <FontAwesomeIcon
            icon={faFacebook}
            size='2xl'
            className='cursor-pointer hover:text-[#1877F2] active:text-[#1877F2] duration-300 active:scale-[1.1] hover:scale-[1.1]'
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size='2xl'
            className='cursor-pointer hover:text-[#1DA1F2] active:text-[#1DA1F2] duration-300 active:scale-[1.1] hover:scale-[1.1]'
          />
          <FontAwesomeIcon
            icon={faYoutube}
            size='2xl'
            className='cursor-pointer hover:text-[#FF0000] active:text-[#FF0000] duration-300 active:scale-[1.1] hover:scale-[1.1]'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size='2xl'
            className='cursor-pointer hover:text-[#c92bb7] active:text-[#c92bb7] duration-300 active:scale-[1.1] hover:scale-[1.1]'
          />
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
