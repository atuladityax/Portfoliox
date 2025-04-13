import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'
import "../Components/Navbar.css"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const handleButtonToggle = () =>{
        setShowMenu(!showMenu);
    }
  return (
   <header>
    <div className="container">
        <div className="grid navbar-grid">
            <div className="logo">
                <h1>ATUL ADITYA</h1>
            </div>
            <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                <ul>
                    <li> <link rel="stylesheet" href="/" />
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/service">Service</a>
                    </li>
                    <li>
                        <a href="/help">Help</a>
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
  )
}

export default Navbar