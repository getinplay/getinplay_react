import React from "react";

function GamesCard({ children, src, price }) {
  return (
    <div>
      <div className='select-none flex flex-col p-3 my-7 active:bg-gray-100 hover:bg-gray-100 hover:cursor-pointer active:scale-[1.08] hover:scale-[1.08] duration-300 gap-2 w-[125px] xs:w-[180px] sm:w-[200px] h-[200px] xs:h-[275px] bg-white border-3 border-red-500 rounded-[13px] overflow-hidden'>
        <div className='w-full h-[75%] rounded-[10px] overflow-hidden'>
          <img
            src={src}
            alt={children}
            className='object-cover h-full w-full'
          />
        </div>
        <p className='xs:text-xl font-black'>{children}</p>
        <p className='xs:text-lg font-bold'>
          <span className='xs:text-2xl text-red-500 font-black'>{price} </span>/
          Game
        </p>
      </div>
    </div>
  );
}

export default GamesCard;
