import React from "react";
import { Link } from "react-router-dom"; 

export default function ContactUs() {
    return (
        <div>
            <Link to="/">Home</Link> <br />
            <Link to="/about-us">About Us</Link> <br />
            <Link to="/contact-us">Contact Us</Link>
            <h1>Contact Us!</h1>
        </div>
    );
}
