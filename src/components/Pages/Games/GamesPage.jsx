import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import GamesCard from "./GamesCard";

function GamesPage() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Api's/game_data.php`
      );
      setGames(res.data);
    };

    fetchData();
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-3 sm:p-5 lg:p-10'>
      <div className='mb-5'>
        <input
          type='text'
          placeholder='Search games...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
        />
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-evenly'>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GamesCard
              key={game.id}
              half={game.half_hour}
              full={game.hour}
              gameId={game.id}
              src={`${import.meta.env.VITE_API_URL}/admin/${game.card_image}`}>
              {game.name}
            </GamesCard>
          ))
        ) : (
          <p className='italic col-span-full text-center text-gray-500'>
            No games found.
          </p>
        )}
      </div>
    </div>
  );
}

export default GamesPage;
