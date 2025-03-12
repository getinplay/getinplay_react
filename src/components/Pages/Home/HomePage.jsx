import { useEffect, useState } from "react";
import axios from "axios";
import GamesCarousel from "./Sections/GamesCarousel";
import SlotsSection from "./Sections/SlotsSection";
import MembershipSection from "./Sections/MembershipSection";
import ReserveNowSection from "./Sections/ReserveNowSection";
import ContactUsForm from "./ContactUsForm";

function HomePage() {
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
    <div className='w-full flex flex-col items-center gap-5'>
      <GamesCarousel games={games} />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
      {/* <ContactUsForm/> */}
    </div>
  );
}

export default HomePage;
