import "../assets/Navlink.css";

function Navlink({ children }) {
  return (
    <div className="navlink-wrapper cursor-pointer text-gray-600">
      <div className="navlink px-4 py-2 duration-300 ">{children}</div>
    </div>
  );
}

export default Navlink;
