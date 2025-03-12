import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLink({ toLink, icon, children }) {
  return (
    <div>
      <NavLink
        to={toLink}
        viewTransition
        className={({ isActive }) =>
          ` ${
            isActive ? "!text-red-600 font-bold" : ""
          } flex hover:text-gray-800 text-sm w-max duration-300 cursor-pointer`
        }>
        <span className='mr-1 fa-fw'>
          <FontAwesomeIcon icon={icon} size='sm' />
        </span>
        <p>{children}</p>
      </NavLink>
    </div>
  );
}

export default FooterLink;
