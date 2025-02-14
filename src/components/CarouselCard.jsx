import React from "react";

function CarouselCard({ src, name }) {
  return (
    <div className='w-full h-full '>
      <p className='absolute'>{name}</p>
      <img className='object-cover w-full h-full' src={src} />
    </div>
  );
}

export default CarouselCard;
