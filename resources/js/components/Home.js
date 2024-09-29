import React from "react";
import NavList from "./Navlist"; // Fixed import name

export default function Home() {
    return (
        <div className="home">
            <div className="navbar">
                <NavList />
            </div>

            <div className="content">
                <h1>
                    <span>QUALITY</span>{" "}
                    <span className="highlight">EDUCATION</span>
                    <br />
                    <span>BY ANY MEANS</span>{" "}
                    <span className="highlight">NECESSARY</span>
                </h1>

               
            </div>
        </div>
    );
}
