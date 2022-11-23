import React from "react";
import {
  NavLink
} from "react-router-dom";

function Header() {

  const link = {
    width: '80px',
    padding: '12px',
    margin: '0 3px 3px',
    background: 'lightcoral',
    textDecoration: 'none',
    color: 'white',

  }



  return (
    <header>
      <h1>
        Apex Legends Database
        <span className="logo">
          <h2>
        <NavLink to="/" style={link}>Home</NavLink>
        <NavLink to="/legends/new" style={link}>Legend Form</NavLink>
          </h2>
        </span>
      </h1>

    <div>
    
    
    </div>
    </header>
  
  );
}

export default Header;
