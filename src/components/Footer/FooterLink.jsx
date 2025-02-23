import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLink({ toLink, icon, children }) {
  return (
    <div>
      <NavLink
        to={toLink}
        className={({ isActive }) =>
          ` ${
            isActive ? "!text-red-600 scale-[1.1] font-bold" : ""
          } flex hover:text-gray-800 duration-300 cursor-pointer`
        }>
        <span className="pr-2">
          <FontAwesomeIcon icon={icon} />
        </span>
        <p>{children}</p>
      </NavLink>
    </div>
  );
}

export default FooterLink;
