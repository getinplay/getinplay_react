import React from "react";

function GamesCard({ children, src, half,full }) {
  return (
    <div>
      <div className='select-none flex flex-col p-3 my-7 active:bg-gray-100 hover:bg-gray-100 hover:cursor-pointer active:scale-[1.08] hover:scale-[1.08] duration-300 gap-2 w-[200px] xs:w-[250px] sm:w-[300px] h-[300px] xs:h-[400px] bg-white border-3 border-red-500 rounded-[13px] overflow-hidden'>
        <div className='w-full h-[75%] rounded-[10px] overflow-hidden'>
          <img
            src={src}
            alt={children}
            className='object-cover h-full w-full'
          />
        </div>
        <p className='xs:text-2xl font-black'>{children.toUpperCase()}</p>
        <div className="flex-col text-start">
          <p className='xs:text-base font-bold '>
            <span className='xs:text-lg text-red-500 font-black'>
              ${half}
            </span>
            /30mins
          </p>
          <p className='xs:text-base font-bold'>
            <span className='xs:text-lg text-red-500 font-black'>
              ${full}
            </span>
            /1hr
          </p>
        </div>
      </div>
    </div>
  );
}

export default GamesCard;
