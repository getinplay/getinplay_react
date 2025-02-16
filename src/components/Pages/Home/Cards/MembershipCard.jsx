import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function MembershipCard({ children, rate, popular, onlineAccess }) {
  return (
    <>
      <div className="relative active:bg-gray-100 duration-300 hover:bg-gray-50 inset-shadow-black shadow-xl hover:scale-[1.05] select-none cursor-pointer border-gray-300 border-1 w-full rounded-lg p-3 gap-2 flex flex-col justify-center items-center">
        <h4
          className={`my-3 text-xl ${
            popular ? "text-red-500" : ""
          } font-bold `}>
          {children}
        </h4>
        <div>
          <span className="text-3xl font-bold">{rate}</span> / Month
        </div>
        <div className="flex w-full items-center gap-2 justify-start">
          <FontAwesomeIcon icon={faCheckCircle} className="text-red-500" />
          <div>Access to all online booking</div>
        </div>
        <div className="flex w-full items-center gap-2 justify-start">
          <FontAwesomeIcon icon={faCheckCircle} className="text-red-500" />
          <div>View More</div>
        </div>
        {popular ? (
          <div className="absolute bg-red-500 px-3 py-1 rounded-2xl right-2.5 text-white top-[-12px]">
            Popular
          </div>
        ) : null}
        <button className="duration-200 active:bg-red-500 bg-white active:text-white hover:bg-red-500 hover:text-white border-1 border-gray-300 my-3 px-3 py-1 rounded-md cursor-pointer">
          View Plans
        </button>
      </div>
    </>
  );
}

export default MembershipCard;
