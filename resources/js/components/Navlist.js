import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
    const location = useLocation(); // Get the current path

    return (
        <div className="nav-list">
            {/* Only show 'Home' link if we're not on the home page */}
            {location.pathname !== "/" && (
                <div className="nav-item">
                    <Link to="/">Home</Link>
                </div>
            )}
            <div className="nav-item">
                <Link to="/about-us">About Us</Link>
            </div>
            <div className="nav-item">
                <Link to="/contact-us">Contact Us</Link>
            </div>
            {/* Hide 'Login' link if we're on the login or signup page */}
            {location.pathname !== "/login" &&
                location.pathname !== "/signup" && (
                    <div className="nav-item">
                        <Link to="/login">Login</Link>
                    </div>
                )}
        </div>
    );
}
