import { useEffect, useState } from "react";
import axios from "axios";
import GamesCarousel from "./Sections/GamesCarousel";
import SlotsSection from "./Sections/SlotsSection";
import MembershipSection from "./Sections/MembershipSection";
import ReserveNowSection from "./Sections/ReserveNowSection";

function HomePage() {
  const [games, setGames] = useState([]);

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
    <div className='w-full flex flex-col items-center gap-5'>
      <GamesCarousel games={games} />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
    </div>
  );
}

export default HomePage;
