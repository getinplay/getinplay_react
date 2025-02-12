import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import MembershipCard from "./components/MembershipCard";
import ReserveNow from "./components/ReserveNow";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <div className="bg-yellow-500 h-[70vh] w-full"></div>
    <div className="flex flex-col items-center justify-center">
      <h2 className="subtitle">Pool Available slots for Today</h2>
      <div className="bg-yellow-200 w-full h-20"></div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <h2 className="subtitle">Membership Plans</h2>
      <p>Choose the best plan for your game slot bookings.</p>
      <div className="flex lg:flex-row flex-col gap-4 justify-evenly py-10 px-20 max-md:px-1 items-center">
        <MembershipCard rate={'$0'} popular={false} onlineAccess={true}>NORMAL</MembershipCard>
        <MembershipCard rate={'$50'} popular={true} onlineAccess={true}>SILVER</MembershipCard>
        <MembershipCard rate={'$100'} popular={false} onlineAccess={true}>GOLD</MembershipCard>

      </div>
    </div>
    <ReserveNow />
    <div className="text-3xl bg-green-500 h-40">Footer Here</div>

  </>
);
