import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MembershipCard({ children, rate, popular, onlineAccess }) {
  return (
    <>
      <div className="relative active:bg-gray-100 duration-300 hover:bg-gray-50 inset-shadow-black shadow-xl hover:scale-[1.05] select-none cursor-pointer border-gray-300 border-1 w-full rounded-lg sm:p-3 p-2 sm:gap-2 gap-1 flex flex-col justify-center items-center">
        <p
          className={`sm:my-2 text-lg sm:text-xl ${
            popular ? "text-red-500" : ""
          } font-bold `}>
          {children}
        </p>
        <div>
          <span className="text-xl sm:text-2xl font-bold">{rate}</span> / Month
        </div>
        <div className="flex w-full items-center gap-2 justify-start">
          <FontAwesomeIcon icon={faCheckCircle} className="text-red-500" />
          <div className="sm:text-base text-sm">Access to all online booking</div>
        </div>
        <div className="flex w-full items-center gap-2 justify-start">
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="text-gray-400"
          />
          <div className="sm:text-base text-sm">View More</div>
        </div>
        {popular ? (
          <div className="sm:text-base text-sm absolute bg-red-500 px-3 py-1 rounded-2xl right-2.5 text-white top-[-12px]">
            Popular
          </div>
        ) : null}
        <Link
          to={"/membership"}
          viewTransition
          className="sm:text-base text-sm duration-200 active:bg-red-500 bg-white active:text-white hover:bg-red-500 hover:text-white border-1 border-gray-300 my-3 px-3 py-1 rounded-md cursor-pointer">
          View Plans
        </Link>
      </div>
    </>
  );
}

export default MembershipCard;
