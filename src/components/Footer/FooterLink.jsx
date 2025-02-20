import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterLink({toLink,icon,children}) {
  return (
    <div className='hover:text-white hover:scale-[1.1] duration-300 cursor-pointer'>
      <div className="lg:flex">

      <Link to={toLink}>
        <span className='pr-2'>
          <FontAwesomeIcon icon={icon} />
        </span>
        {children}
      </Link>
      </div>
    </div>
  );
}

export default FooterLink;
