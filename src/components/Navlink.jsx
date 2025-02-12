import "../assets/Navlink.css";

function Navlink({ children }) {
  return (
    <div className="select-none navlink-wrapper cursor-pointer text-md text-gray-500">
      <div className="navlink px-4 py-2 font-[600] duration-300 ">{children}</div>
    </div>
  );
}

export default Navlink;
