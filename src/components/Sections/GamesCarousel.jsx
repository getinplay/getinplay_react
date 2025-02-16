import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselCard from "../CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";

function GamesCarousel({games}) {
  return (
    <div className="relative w-[80vw] lg:h-[80vh] flex justify-center mx-12 my-5 rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}>
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-2 flex items-center justify-center cursor-pointer hover:text-gray-200 duration-200 text-white z-20 custom-prev">
          <FontAwesomeIcon size="2xl" icon={faSquareCaretLeft} />
        </button>
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <CarouselCard
              // src={`http://192.168.0.130/getinplay/${game.image}`}
              src={game.image}
              name={game.name}
            />
          </SwiperSlide>
        ))}
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center cursor-pointer hover:text-gray-200 duration-200 text-white z-20 custom-next">
          <FontAwesomeIcon size="2xl" icon={faSquareCaretRight} />
        </button>
      </Swiper>
    </div>
  );
}

export default GamesCarousel;
