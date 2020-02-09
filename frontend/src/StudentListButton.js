import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile';

/**
 * Used to display the student list button only for the advisor
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

function StudentListButton(){
        console.log('studentListButton' )
          if(UserProfile.getLoginType() === 'admin'){
            return (
              <button className="btn btn-success" onClick={this.gotoListStudents}>Student List</button>
              );
            }
          return '';
}
export default StudentListButton;
