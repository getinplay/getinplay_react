import { useState, useEffect } from "react";
import { API_URL } from "./config";
import axios from "axios";
import Navbar from "./components/Sections/Navbar";
import ReserveNowSection from "./components/Sections/ReserveNowSection";
import LoginPage from "./components/Pages/LoginPage";
import MembershipSection from "./components/Sections/MembershipSection";
import SlotsSection from "./components/Sections/SlotsSection";
import GamesCarousel from "./components/Sections/GamesCarousel";
import FooterSection from "./components/Sections/FooterSection";
import GamesPage from "./components/Pages/GamesPage";

function App() {
  const [games, setGames] = useState([
    {
      id: "2",
      name: "BOWLING",
      image: "assets/images/bowling.jpeg",
    },
    {
      id: "3",
      name: "CHESS",
      image: "assets/images/chess.jpeg",
    },
    {
      id: "7",
      name: "BASKETBALL",
      image: "assets/images/basketball.jpeg",
    },
    {
      id: "9",
      name: "POOL",
      image: "assets/images/pool.jpeg",
    },
    {
      id: "10",
      name: "CRICKET",
      image: "assets/images/cricket.jpeg",
    },
    {
      id: "11",
      name: "SNOOKER",
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
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <GamesCarousel games={games} />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
      <FooterSection />
      {/* <LoginPage /> */}
      {/* <GamesPage /> */}
    </div>
  );
}

export default App;
