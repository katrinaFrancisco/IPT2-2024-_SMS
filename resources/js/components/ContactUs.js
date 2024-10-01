import React from "react";
import NavList from "./Navlist"; // Same NavList component for consistent navigation

export default function ContactUs() {
    return (
        <div className="ContactUs">
            <NavList /> {/* Navigation component */}
            <section className="contact-info">
                <h1>Contact Us</h1>
                <h2>Get in Touch!</h2>
                <p>
                    We are eager to hear from you! Please don’t hesitate to
                    reach out with any questions, feedback, or concerns you may
                    have. Your thoughts are important to us, and we look forward
                    to assisting you.
                </p>
                <div className="stats-section">
                    <div className="stat-item">
                        <h3>Email:</h3>
                        <p>
                            <a href="mailto:info@ourschool.edu">xxx@school.edu</a>
                        </p>
                    </div>
                    <div className="stat-item">
                        <h3>Phone:</h3>
                        <p>
                            <a href="tel:+631234567890">+63 123 456 7890</a>
                        </p>
                    </div>
                    <div className="stat-item">
                        <h3>Address:</h3>
                        <p>
                            123 ABC, Brgy XYZ
                            <br />
                            Butuan City, Philippines, 8600
                        </p>
                    </div>
                    <div className="stat-item">
                        <h3>Office Hours:</h3>
                        <p>
                            Monday to Friday:
                            <br />
                            8:00 AM - 5:00 PM
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
