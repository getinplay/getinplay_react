import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function AboutUsPage() {
  return (
    <div className='flex flex-col justify-between font-semibold'>
      <h1 className='text-5xl p-3 pb-5 font-bold text-gray-800'>About Us</h1>
      <div className='text-gray-600 text-3xl sm:px-10 max-w-[1000px] px-5 grow flex flex-col gap-5 justify-center items-start'>
        <Link
          to='https://maps.app.goo.gl/GxYPGCMzoLDwKCb39'
          target='__blank'
          className='hover:underline underline-offset-3 decoration-3 flex gap-3 items-center text-justify'>
          <span>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab similique
          harum ipsa dolor doloremque molestiae quis in. Esse, totam maxime.
        </Link>
        <div className='flex flex-wrap justify-between w-full'>
          <p className='flex gap-3 items-center'>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +91 912345678
          </p>
          <Link
            to='/contact-us'
            className='flex gap-3 items-center hover:underline decoration-3 underline-offset-3'>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            tempmail@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
