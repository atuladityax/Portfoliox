import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import "../Components/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>ATUL ADITYA</h1>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                {" "}
                <link rel="stylesheet" href="/" />
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/skill">Skill Set</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
