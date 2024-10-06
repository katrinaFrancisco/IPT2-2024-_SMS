import React from "react";
import NavList from "./Navlist";

export default function AboutUs() {
    return (
        <div className="about-us-page">
            {/* Navigation Section */}
            <NavList />

            {/* Hero Section */}
            <section className="hero-section">
                <h1>About Us</h1>
            </section>

            {/* Introduction Section */}
            <section className="intro-section">
                <div className="intro-text">
                    <h2>ABOUT OUR UNIVERSITY</h2>
                    <p>
                        Welcome to our institute where education meets
                        excellence. We aim to provide a high-quality learning
                        environment with top-tier faculty and a vibrant student
                        community.
                    </p>
                    <p>
                        Our institute is dedicated to fostering innovation and
                        providing students with opportunities to excel in their
                        chosen fields.
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="stats-section">
                    <div className="stat-item">
                        <h3>20k+</h3>
                        <p>Active Students</p>
                    </div>
                    <div className="stat-item">
                        <h3>69+</h3>
                        <p>Faculty Courses</p>
                    </div>
                    <div className="stat-item">
                        <h3>90+</h3>
                        <p>Staff Members</p>
                    </div>
                    <div className="stat-item">
                        <h3>45</h3>
                        <p>Awards & Honors</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
