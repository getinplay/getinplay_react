import { useEffect, useState } from "react";
import axios from "axios";
import GamesCarousel from "./Sections/GamesCarousel";
import MembershipSection from "./Sections/MembershipSection";
import ReserveNowSection from "./Sections/ReserveNowSection";

function HomePage() {
  const [games, setGames] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/Api's/decode.php`,
        {
          token: document.cookie
            .split("; ")
            .find((row) => row.startsWith("authToken="))
            ?.split("=")[1],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLogin(res.data.success);
    };
    getInfo();

    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Api's/game_data.php`
      );

      setGames(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className='w-full flex flex-col items-center gap-5'>
      <GamesCarousel games={games} />
      <MembershipSection />

      {!isLogin && <ReserveNowSection />}
    </div>
  );
}

export default HomePage;
