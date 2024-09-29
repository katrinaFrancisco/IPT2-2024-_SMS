import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
  const location = useLocation(); // Get the current route

  return (
    <nav className="navbar">
      <div className="nav-list">
        {/* Conditionally render the links based on the current path */}
        {location.pathname !== "/" && <Link to="/">Home</Link>}
        {location.pathname !== "/about-us" && <Link to="/about-us">About Us</Link>}
        {location.pathname !== "/contact-us" && <Link to="/contact-us">Contact Us</Link>}
        {location.pathname !== "/login" && <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
}
