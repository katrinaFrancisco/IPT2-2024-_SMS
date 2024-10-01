import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
    const location = useLocation(); // Get the current path

    return (
        <div className="navbar">
            <div className="nav-list">
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
                {location.pathname !== "/login" &&
                    location.pathname !== "/signup" && (
                        <div className="nav-item">
                            <Link to="/login">Login</Link>
                        </div>
                    )}
            </div>
        </div>
    );
}
