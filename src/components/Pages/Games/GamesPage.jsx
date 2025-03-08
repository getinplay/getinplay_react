import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import GamesCard from "./GamesCard";

function GamesPage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Api's/game_data.php`
      );
      setGames(res.data);
    };

    fetchData();
  }, []);
  return (
    <div className="p-3 sm:p-5 lg:p-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-evenly">
      {games.map((game) => (
        <GamesCard
          key={game.id}
          half={game.half_hour}
          full={game.hour}
          gameId={game.id}
          src={`${import.meta.env.VITE_API_URL}/admin/${game.card_image}`}>
          {game.name}
        </GamesCard>
      ))}
    </div>
  );
}

export default GamesPage;
