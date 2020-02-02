import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile';

function Header() {

  let button;
  let homeLink;

console.log("inside UserProfile.getLoginType="+UserProfile.getLoginType())
if (UserProfile.isStudent() || UserProfile.isAdvisor()) {
  button =   <NavLink activeClassName="active" onClick={() => UserProfile.removeCookies()} to="/"> Logout &nbsp; &nbsp; </NavLink>
}
if (UserProfile.isStudent()) {
  homeLink =   <NavLink activeClassName="active" to="/ListStudentLogs" > Student Home </NavLink>
}
else if (UserProfile.isAdvisor()) {
  homeLink =   <NavLink activeClassName="active" to="/ListStudents"> Advisor Home </NavLink>
}
else {
  homeLink =   <NavLink activeClassName="active" to="/"> Home </NavLink>
}


  return (

    <nav>
      {homeLink}
      &nbsp; &nbsp; 
      {button}       
      <NavLink activeClassName="active" to="/help">
        Help
      </NavLink>
      &nbsp; &nbsp; 
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>

  );
}

export default Header;
