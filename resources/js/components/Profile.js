import React from "react";
import SidebarList from "./Sidebar"; // Import the SidebarList component
import avatar from "C:/pry/jj.png"; // Path to the avatar image

export default function Profile() {
    return (
        <div className="profile-page">
            {/* Sidebar component */}
            <SidebarList />

            {/* Profile content */}
            <div className="profile-content">
                {/* Welcome section */}
                <div className="welcome-section">
                    <h2>PROFILE</h2>
                    <p>Welcome USER</p>
                </div>

                <div className="profile-layout">
                    {/* Profile Information - Vertical Card */}
                    <div className="profile-card vertical-card">
                        {/* Logo image */}
                        <img
                            src={avatar} // Path to the logo image
                            alt="Profile Logo"
                            className="profile-logo"
                        />
                        <h3>Sami Rahman</h3>
                    </div>

                    {/* Right Column - Two Stacked Horizontal Cards */}
                    <div className="right-column">
                        {/* Accounts - Updated with Personal Information */}
                        <div className="profile-card account-card horizontal-card">
                            <h3>Account Information</h3>
                            <div className="account-info">
                                <div className="account-field">
                                    <label>
                                        <strong>Age:</strong>
                                    </label>
                                    <input type="text" value="23" readOnly />
                                </div>
                                <div className="account-field">
                                    <label>
                                        <strong>Date of Birth:</strong>
                                    </label>
                                    <input
                                        type="text"
                                        value="01/01/2001"
                                        readOnly
                                    />
                                </div>
                                <div className="account-field">
                                    <label>
                                        <strong>Email:</strong>
                                    </label>
                                    <input
                                        type="text"
                                        value="samirahman002@gmail.com"
                                        readOnly
                                    />
                                </div>
                                <div className="account-field">
                                    <label>
                                        <strong>Contact No:</strong>
                                    </label>
                                    <input
                                        type="text"
                                        value="+1 555-569-1236"
                                        readOnly
                                    />
                                </div>
                                <div className="account-field">
                                    <label>
                                        <strong>Gender:</strong>
                                    </label>
                                    <input type="text" value="Male" readOnly />
                                </div>
                                <div className="account-field">
                                    <label>
                                        <strong>Address:</strong>
                                    </label>
                                    <input
                                        type="text"
                                        value="123 Example Street, City, Country"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bills Section (Unchanged) */}
                        <div className="profile-card bills-card horizontal-card">
                            <h3>My bills</h3>
                            <ul>
                                <li>
                                    Phone bill{" "}
                                    <span className="bill-status unpaid">
                                        Bill not paid
                                    </span>
                                </li>
                                <li>
                                    Internet bill{" "}
                                    <span className="bill-status paid">
                                        Bill paid
                                    </span>
                                </li>
                                <li>
                                    House rent{" "}
                                    <span className="bill-status paid">
                                        Bill paid
                                    </span>
                                </li>
                                <li>
                                    Income tax{" "}
                                    <span className="bill-status paid">
                                        Bill paid
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
