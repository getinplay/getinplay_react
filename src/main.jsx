import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import Navbar from "./components/Sections/Navbar";
import ReserveNowSection from "./components/Sections/ReserveNowSection";
import LoginPage from "./components/LoginPage/LoginPage";
import MembershipSection from "./components/Sections/MembershipSection";
import SlotsSection from "./components/Sections/SlotsSection";
import GamesCarousel from "./components/Sections/GamesCarousel";
import FooterSection from "./components/Sections/FooterSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Navbar />
      <GamesCarousel />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
      <FooterSection />
      {/* <LoginPage /> */}
    </>
  </StrictMode>
);
