import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLink({toLink,icon,children}) {
  return (
    <div className='hover:text-gray-800 hover:font-bold hover:scale-[1.1] duration-300 cursor-pointer'>
     
      <Link to={toLink}>
        <span className='pr-2'>
          <FontAwesomeIcon icon={icon} />
        </span>
        {children}
      </Link>
    </div>
  );
}

export default FooterLink;
