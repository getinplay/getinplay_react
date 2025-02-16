import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import GamesCard from "./GamesCard";

function GamesPage({ games }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center py-10 w-[80vw]">
      <div className="w-full flex items-center justify-center bg-gray-200 p-5 pt-0 inset-shadow-black shadow-xl  rounded-xl ">
        <Swiper
          modules={[Scrollbar, Mousewheel]}
          spaceBetween={30}
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          mousewheel={{ forceToAxis: true }}
          slidesOffsetAfter={15}
          slidesOffsetBefore={15}>
          {games.map((game) => (
            <SwiperSlide key={game.id} className="!w-max -z-10">
              <GamesCard src={game.image} price={"$2.5"}>
                {game.name}
              </GamesCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GamesPage;
