import React from "react";

function CarouselCard({ src, name }) {
  return (
    <div className="w-full h-full ">
      <p className="absolute left-1/2 top-2 custom-text-outline -translate-x-1/2 text-white font-bold tracking-wider text-3xl">
        {name}
      </p>
      <img className="object-cover w-full h-full" src={src} />
    </div>
  );
}

export default CarouselCard;
