import { useEffect, useState } from "react";
import axios from "axios";
import GamesCarousel from "./Sections/GamesCarousel";
import SlotsSection from "./Sections/SlotsSection";
import MembershipSection from "./Sections/MembershipSection";
import ReserveNowSection from "./Sections/ReserveNowSection";

function HomePage() {
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
    <div className='w-full flex flex-col items-center gap-5'>
      <GamesCarousel games={games} />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
    </div>
  );
}

export default HomePage;
