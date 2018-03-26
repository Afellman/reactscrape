import React from "react";
import { Link } from 'react-router-dom'

const Nav = (props) => {



  return (
    <div className="nav-container">
      <div className="nav-links">
        <ul>
          <li>
            <Link activeClassName="active" to="/home">Home</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/astroids">Find Astroids</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/saved">Saved</Link>
          </li>
        </ul>
        
      </div>
    </div>

  )
}


export default Nav;