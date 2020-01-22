import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import "./SidebarMenu.css";

function SidebarMenu() {
  return (

    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        Start Page
      </a>

      <a className="menu-item" href="/StudentLogin">
        Student Login
      </a>

      <a className="menu-item" href="/ReportTemplate?rptType=ageCount">
        Age Count Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=ageHours">
        Age Hours Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=gradeCount">
        Grade Count Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=gradeHours">
        Grade Hours Report
      </a>

    </Menu>


  );
};

export default SidebarMenu;
