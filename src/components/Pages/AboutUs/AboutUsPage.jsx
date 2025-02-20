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
    <div className='flex flex-col gap-3 justify-between p-5 font-semibold'>
      <h1 className='sm:text-5xl text-4xl p-3 font-bold text-gray-800'>
        About Us
      </h1>
      <div className='border-4 border-gray-700 rounded-xl text-gray-600 text-xl p-5 max-w-[1000px] grow flex sm:flex-row flex-col gap-5 justify-center items-center'>
        <div className="flex-1/2 w-full">
          <img
            src='assets/images/chess.jpeg'
            alt='about-us'
            className='h-[250px] w-full object-cover rounded-xl'
          />
        </div>
        <div className="flex-1/2 flex flex-col gap-3">
          <Link
            to='https://maps.app.goo.gl/GxYPGCMzoLDwKCb39'
            target='__blank'
            className='hover:underline underline-offset-3 decoration-2 flex gap-3 items-center text-start'>
            <span>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            similique harum ipsa dolor doloremque molestiae quis in. Esse, totam
            maxime.
          </Link>
          <div className='flex flex-wrap gap-3 justify-between w-full'>
            <p className='flex gap-3 items-center'>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +91 912345678
            </p>
            <Link
              to='/contact-us'
              className='flex gap-3 items-center hover:underline decoration-2 underline-offset-3'>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              tempmail@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
