import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselCard from "../CarouselCard";

function GamesCarousel() {
  const [games, setGames] = useState([
    {
      id: "2",
      name: "Bowling",
      image: "assets/images/bowling.jpeg",
    },
    {
      id: "3",
      name: "Chess",
      image: "assets/images/chess.jpeg",
    },
    {
      id: "7",
      name: "Basketball",
      image: "assets/images/basketball.jpeg",
    },
    {
      id: "9",
      name: "Pool",
      image: "assets/images/pool.jpeg",
    },
    {
      id: "10",
      name: "Cricket",
      image: "assets/images/cricket.jpeg",
    },
    {
      id: "11",
      name: "Snooker",
      image: "assets/images/snooker.jpeg",
    },
  ]);

  // const testApi = async () => {
  //   try {
  //     const res = await axios.get(API_URL);
  //     return res.data; // returns the data from the API
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await testApi(); // await the result from testApi
  //     setGames(data); // set the fetched data to the state
  //   };
  //   fetchData(); // call the function to fetch data
  // }, []); // empty dependency array, so this runs once when the component mounts

  return (
    <div className='w-[80vw] lg:h-[80vh] flex justify-center mx-12 my-5 rounded-xl overflow-hidden'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}>
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <CarouselCard
              // src={`http://192.168.0.130/getinplay/${game.image}`}
              src={game.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GamesCarousel;
