import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile';

function Header() {

  let button;
console.log("inside UserProfile.getLoginType="+UserProfile.getLoginType())
if (UserProfile.getLoginType() === "student" || UserProfile.getLoginType() === "admin") {
  button =   <NavLink activeClassName="active" to="/"> Logout </NavLink>
}
  return (

    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      {button}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <NavLink activeClassName="active" to="/contact">
        Help
      </NavLink>
    </nav>
  );
}

export default Header;
