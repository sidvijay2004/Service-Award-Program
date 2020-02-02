import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import "./SidebarMenu.css";

function goToReportTemp(e){
  console.log('hi')
}

function SidebarMenu() {
  return (

    <Menu>

      <a className="menu-item" href="/ReportTemplate?rptType=ageCount">
        Count by Age Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=ageHours">
        Hours by Age Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=gradeCount">
        Count by Grade Report
      </a>
      <a className="menu-item" href="/ReportTemplate?rptType=gradeHours">
        Hours by Grade Report
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
