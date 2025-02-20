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
} from "@fortawesome/free-solid-svg-icons";

function FooterSection() {
  return (
    <div className='w-full bg-red-500 text-white flex flex-col items-center p-3'>
      <div className='text-3xl font-bold'>GetInPlay</div>
      <div className='w-full flex flex-col lg:flex-row justify-evenly items-stretch'>
        <div className='flex-1 py-4 px-10'>
          <p className='text-2xl font-semibold mb-2'>Links</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 font-semibold text-red-300'>
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
          <p className='text-2xl font-semibold'>Address</p>
          <div className='text-lg text-red-100 p-2 rounded-md'>
            <Link
              to='https://maps.app.goo.gl/GxYPGCMzoLDwKCb39'
              target='__blank'
              className='hover:underline underline-offset-2 cursor-pointer'>
              <span className='text-white px-3'>
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              perspiciatis!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
