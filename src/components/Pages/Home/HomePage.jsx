import React from "react";
import GamesCarousel from "./Sections/GamesCarousel";
import SlotsSection from "./Sections/SlotsSection";
import MembershipSection from "./Sections/MembershipSection";
import ReserveNowSection from "./Sections/ReserveNowSection";

function HomePage({games}) {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <GamesCarousel games={games} />
      <SlotsSection />
      <MembershipSection />
      <ReserveNowSection />
    </div>
  );
}

export default HomePage;
