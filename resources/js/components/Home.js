import React from "react";
import NavList from "./Navlist";

export default function Home() {
    return (
        <div className="home">
            {/* Use the same NavList component as in the About Us page */}
            <NavList />

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
