import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/scrollbar";
import GamesCard from "./GamesCard";

function GamesPage({ games }) {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center py-10 w-[80vw]'>
      <div className='relative w-full bg-[rgb(250,250,250)] flex items-center justify-center p-5 shadow-xl rounded-xl '>
        <button
          type='button'
          className='prevGameBtn duration-300 active:text-gray-200 text-red-500 cursor-pointer absolute top-1/2 -translate-y-[50%] left-[5px] z-20'>
          <FontAwesomeIcon size='2xl' icon={faSquareCaretLeft} />
        </button>
        <div className='w-full xs:px-5'>
          <Swiper
            modules={[Mousewheel, Navigation]}
            spaceBetween={30}
            slidesPerView='auto'
            navigation={{
              nextEl: ".nextGameBtn",
              prevEl: ".prevGameBtn",
              disabledClass: "!text-gray-300 !cursor-default",
            }}
            mousewheel={{ forceToAxis: true }}
            slidesOffsetAfter={15}
            slidesOffsetBefore={15}>
            {games.map((game) => (
              <SwiperSlide key={game.id} className='!w-max -z-10'>
                <GamesCard src={game.image} price={"$2.5"}>
                  {game.name}
                </GamesCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type='button'
          className='nextGameBtn duration-300 active:text-gray-200 bg-white bg-clip-text text-red-500 cursor-pointer absolute top-1/2 -translate-y-[50%] right-[5px] z-20'>
          <FontAwesomeIcon size='2xl' icon={faSquareCaretRight} />
        </button>
      </div>
    </div>
  );
}

export default GamesPage;
