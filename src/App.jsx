import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import ScrollToTop from "./ScrollToTop";
import FooterSection from "./components/Footer/FooterSection";

function App() {
  return (
    <div className='flex flex-col justify-between items-center min-h-[100vh]'>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
