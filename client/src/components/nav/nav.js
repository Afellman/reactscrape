import React from "react";
import { Link } from 'react-router-dom'
import './nav.css';

const Nav = (props) => {



  return (
    <div className="nav-container">
      <div className="nav-links">
        <ul>
          <li>
            <Link className={window.location.pathname === "/home" ? "active" : ""} to="/">Home</Link>
          </li>
          <li>
            <Link className={window.location.pathname === "/astroids" ? "active" : ""}  to="/astroids">Astroids</Link>
          </li>
          <li>
            <Link className={window.location.pathname === "/saved" ? "active" : ""}  to="/saved">Saved</Link>
          </li>
        </ul>
        
      </div>
    </div>

  )
}


export default Nav;