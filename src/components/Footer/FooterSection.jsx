import React from "react";
import { Link } from "react-router-dom";
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
    <div className='w-full bg-red-500 text-white flex flex-col items-center p-6'>
      <div className='text-3xl font-bold mb-4'>GetInPlay</div>
      <div className='w-full flex flex-col md:flex-row justify-evenly items-stretch'>
        <div className='flex-1 py-4 px-10'>
          <p className='text-2xl font-semibold mb-2'>Links</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 font-semibold text-red-300'>
            {[
              {
                text: "Home",
                to: "/",
                faIcon: faHouse,
              },
              {
                text: "Games",
                to: "/games",
                faIcon: faGamepad,
              },
              {
                text: "Membership",
                to: "/membership",
                faIcon: faAward,
              },
              {
                text: "Contact Us",
                to: "/contact-us",
                faIcon: faPhone,
              },
              {
                text: "About Us",
                to: "/about-us",
                faIcon: faAddressCard,
              },
            ].map((link, index) => {
              return (
                <div className='hover:text-white hover:scale-[1.1] duration-300 cursor-pointer'>
                  <Link to={link.to}>
                    <span className='px-2'>
                      <FontAwesomeIcon icon={link.faIcon} />
                    </span>
                    {link.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex-1 p-4  rounded-lg'>
          <p className='text-xl font-semibold mb-2'>Address</p>
          <div className='text-lg text-red-100 p-2 rounded-md'>
            <span className='text-white px-3'>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            perspiciatis!
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
