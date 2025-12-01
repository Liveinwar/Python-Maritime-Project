import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span role="img" aria-label="ship" className="navbar__logo">
          
        </span>
        Marine Analytics
      </div>

      <div className="navbar__links">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/search">Vessels</NavLink>
        <NavLink to="/playback">Voyage Replay</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}
