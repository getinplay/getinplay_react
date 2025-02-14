import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import Navbar from "./components/Sections/Navbar";
import ReserveNowSection from "./components/Sections/ReserveNowSection";
import LoginPage from "./components/Pages/LoginPage";
import MembershipSection from "./components/Sections/MembershipSection";
import SlotsSection from "./components/Sections/SlotsSection";
import GamesCarousel from "./components/Sections/GamesCarousel";
import FooterSection from "./components/Sections/FooterSection";
import GamesPage from "./components/Pages/GamesPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <GamesCarousel />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
      <FooterSection />
      {/* <LoginPage /> */}
      {/* <GamesPage /> */}
    </div>
  </StrictMode>
);
