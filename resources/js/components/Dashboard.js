import React from "react";

export default function Dashboard() {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar header */}
                <div className="sidebar-header">XXXX</div>

                {/* Divider */}
                <div className="divider"></div>

                {/* Sidebar links */}
                <div className="sidebar-links">
                    <a href="#" className="sidebar-link">
                        Dashboard
                    </a>
                    <a href="#" className="sidebar-link">
                        Profile
                    </a>
                    <a href="#" className="sidebar-link">
                        Teacher
                    </a>
                </div>

                {/* Settings link at the bottom */}
                <div className="sidebar-footer">
                    <a href="#" className="settings-link">
                        Settings
                    </a>
                </div>
            </div>

            {/* Dashboard content */}
            <div className="dashboard-content">
                <h1>Welcome to your dashboard, XXXX SCHOOL</h1>
                <p>DASHBOARD SAMPLE</p>

                {/* Dashboard actions */}
                <div className="dashboard-actions">
                    <div className="action-item">
                        <h3>Add other admins</h3>
                        <p>
                            Create rich course content and coaching products for
                            your students.
                        </p>
                    </div>
                    <div className="action-item">
                        <h3>Add classes</h3>
                        <p>
                            Create rich course content and coaching products for
                            your students.
                        </p>
                    </div>
                    <div className="action-item">
                        <h3>Add students</h3>
                        <p>
                            Create rich course content and coaching products for
                            your students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
