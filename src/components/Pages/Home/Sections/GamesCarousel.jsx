import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GamesCarouselCard from "../Cards/GamesCarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";

function GamesCarousel({ games }) {
  return (
    <div className='w-full md:w-[80vw] p-3 lg:h-[70vh] h-[50vh] min-h-[300px] py-5 justify-center '>
      <div className='rounded-xl overflow-hidden h-full'>
        <Swiper
          className='h-full'
          modules={[Autoplay, Navigation, Pagination, Mousewheel]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          mousewheel={{ forceToAxis: true }}>
          <button
            type='button'
            className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center justify-center cursor-pointer hover:text-gray-200 duration-200 text-white z-20 custom-prev'>
            <FontAwesomeIcon size='2xl' icon={faSquareCaretLeft} />
          </button>
          {games.map((game) => (
            <SwiperSlide key={game.id} className='rounded-xl overflow-hidden'>
              <GamesCarouselCard
                src={`http://192.168.0.130/final_project/final_project/admin/${game.card_image}`}
                name={game.name}
              />
            </SwiperSlide>
          ))}
          <button
            type='button'
            className='absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center cursor-pointer hover:text-gray-200 duration-200 text-white z-20 custom-next'>
            <FontAwesomeIcon size='2xl' icon={faSquareCaretRight} />
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default GamesCarousel;
