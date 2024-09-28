import React from "react";
import { Link } from "react-router-dom";

export default function NavList() {
    return (
        <div className="nav-list">
            <Link to="/">Home</Link> <br />
            <Link to="/about-us">About Us</Link> <br />
            <Link to="/contact-us">Contact Us</Link> <br />
            <Link to="/login">Login</Link> {/* New link to Login page */}
        </div>
    );
}
