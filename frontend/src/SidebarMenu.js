import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import "./SidebarMenu.css";

function goToReportTemp(e){
  console.log('hi')
}

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

      <a className="menu-item" href="/ReportTemplate?rptType=allctg">
        All Categories Report
      </a>

{/* 
      <p className="menu-item" onClick="goToReportTemp()">
        Grade Hours Report
      </p> */}

    </Menu>


  );
};

export default SidebarMenu;
