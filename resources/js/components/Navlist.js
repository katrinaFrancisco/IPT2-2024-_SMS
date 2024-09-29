import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
    const location = useLocation(); // Get the current location

    return (
        <div className="nav-list">
            {location.pathname !== "/" && (
                <>
                    <Link to="/">Home</Link> <br />
                </>
            )}
            {location.pathname !== "/about-us" && (
                <>
                    <Link to="/about-us">About Us</Link> <br />
                </>
            )}
            {location.pathname !== "/contact-us" && (
                <>
                    <Link to="/contact-us">Contact Us</Link> <br />
                </>
            )}
            {location.pathname !== "/login" && (
                <>
                    <Link to="/login">Login</Link> <br />
                </>
            )}
        </div>
    );
}
