import React from "react";
import { Link } from "react-router-dom"; 

export default function Home() {
    return (
        <div className="home"> 
            <Link to="/">Home</Link> <br />
            <Link to="/about-us">About Us</Link> <br />
            <Link to="/contact-us">Contact Us</Link>
            <h1>HOME</h1>
        </div>
    );
}
