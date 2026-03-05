import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src="" alt="logo img" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
