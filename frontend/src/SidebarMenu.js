import React from 'react';
import { bubble  as Menu } from 'react-burger-menu';
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

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>


  );
};

export default SidebarMenu;
