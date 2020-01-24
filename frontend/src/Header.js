import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile';

function Header() {

  let button;
  let homeLink;

console.log("inside UserProfile.getLoginType="+UserProfile.getLoginType())
if (UserProfile.getLoginType() === "student" || UserProfile.getLoginType() === "admin") {
  button =   <NavLink activeClassName="active" onClick={() => UserProfile.removeCookies()} to="/"> Logout </NavLink>
}
if (UserProfile.getLoginType() === "student") {
  homeLink =   <NavLink activeClassName="active" to="/ListStudentLogs" > Student Home </NavLink>
}
else if (UserProfile.getLoginType() === "admin") {
  homeLink =   <NavLink activeClassName="active" to="/ListStudents"> Advisor Home </NavLink>
}


  return (

    <nav>
      {homeLink}
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
