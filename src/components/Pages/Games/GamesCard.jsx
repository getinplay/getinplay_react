import React from "react";
import { Link } from "react-router-dom";

function GamesCard({ children, src, half, full, gameId }) {
  return (
    <div>
      <Link
        to={gameId}
        className='select-none shadow-[0_4px_15px_rgb(150,150,150)] bg-white flex flex-col p-3 active:bg-gray-100 hover:bg-gray-100 cursor-pointer active:scale-[1.08] hover:scale-[1.08] duration-300 gap-2 lg:w-[250px] sm:w-[225px] xs:w-[200px] max-xs:max-w-[300px] h-[300px] xs:h-[300px] sm:h-[325px] lg:h-[350px] bg-white rounded-[13px] overflow-hidden'>
        <div className='w-full h-full rounded-[10px] overflow-hidden'>
          <img
            src={src}
            alt={children}
            className='object-cover h-full w-full'
          />
        </div>
        <p className='xs:text-2xl text-xl font-black'>
          {children.toUpperCase()}
        </p>
        <div className='flex-col text-start'>
          <p className='xs:text-base text-sm font-bold '>
            <span className='xs:text-lg text-base text-red-500 font-black'>
              ${half}
            </span>
            /30mins
          </p>
          <p className='xs:text-base font-bold'>
            <span className='xs:text-lg text-red-500 font-black'>${full}</span>
            /1hr
          </p>
        </div>
      </Link>
    </div>
  );
}

export default GamesCard;
