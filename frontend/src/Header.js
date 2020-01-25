import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile';

function Header() {

  let button;
  let homeLink;

console.log("inside UserProfile.getLoginType="+UserProfile.getLoginType())
if (UserProfile.isStudent() || UserProfile.isAdvisor()) {
  button =   <NavLink activeClassName="active" onClick={() => UserProfile.removeCookies()} to="/"> Logout </NavLink>
}
if (UserProfile.isStudent()) {
  homeLink =   <NavLink activeClassName="active" to="/ListStudentLogs" > Student Home </NavLink>
}
else if (UserProfile.isAdvisor()) {
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
