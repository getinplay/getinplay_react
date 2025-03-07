import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import GamesCard from "./GamesCard";

function GamesPage() {
  const [games, setGames] = useState([
    {
      id: 1,
      card_image: "/assets/images/basketball.jpeg",
      half_hour: "90",
      hour: "180",
      slot_image: "/assets/images/basketball.jpeg",
      name: "Basketball",
    },
    {
      id: 2,
      card_image: "/assets/images/bowling.jpeg",
      half_hour: "100",
      hour: "200",
      slot_image: "/assets/images/bowling.jpeg",
      name: "Bowling",
    },
    {
      id: 3,
      card_image: "/assets/images/chess.jpeg",
      half_hour: "50",
      hour: "100",
      slot_image: "/assets/images/chess.jpeg",
      name: "Chess",
    },
    {
      id: 4,
      card_image: "/assets/images/pool.jpeg",
      half_hour: "90",
      hour: "180",
      slot_image: "/assets/images/pool.jpeg",
      name: "Pool",
    },
    {
      id: 5,
      card_image: "/assets/images/cricket.jpeg",
      half_hour: "200",
      hour: "400",
      slot_image: "/assets/images/cricket.jpeg",
      name: "Cricket",
    },
    {
      id: 6,
      card_image: "/assets/images/snooker.jpeg",
      half_hour: "80",
      hour: "160",
      slot_image: "/assets/images/snooker.jpeg",
      name: "Snooker",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://192.168.0.130/final_project/final_project/Api's/game_data.php"
      );
      setGames(res.data);
    };

    fetchData();
  }, []);
  return (
    <div className='p-3 sm:p-5 lg:p-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-evenly'>
      {games.map((game) => (
        <GamesCard
          key={game.id}
          half={game.half_hour}
          full={game.hour}
          gameId={game.id}
          src={`http://192.168.0.130/final_project/final_project/admin/${game.card_image}`}>
          {game.name}
        </GamesCard>
      ))}
    </div>
  );
}

export default GamesPage;
