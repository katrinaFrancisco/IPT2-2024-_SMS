import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarList() {
    const location = useLocation(); // Get the current path

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPC2dT8C7zSRPaAEds5C2eNXB6HvaTCM2Hnw&s" // Adjust the path if necessary
                    alt="School Logo"
                    className="sidebar-logo"
                />
            </div>

            <div className="divider"></div>

            <div className="sidebar-links">
                <div className="nav-item">
                    <Link
                        to="/dashboard"
                        className={
                            location.pathname === "/dashboard" ? "active" : ""
                        }
                    >
                        Dashboard
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        to="/profile"
                        className={
                            location.pathname === "/profile" ? "active" : ""
                        }
                    >
                        Profile
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        to="/teachers"
                        className={
                            location.pathname === "/teachers" ? "active" : ""
                        }
                    >
                        Teachers
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        to="/students"
                        className={
                            location.pathname === "/students" ? "active" : ""
                        }
                    >
                        Students
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        to="/courses"
                        className={
                            location.pathname === "/courses" ? "active" : ""
                        }
                    >
                        Courses
                    </Link>
                </div>
                <div className="nav-item">
                    <Link
                        to="/add-teacher"
                        className={
                            location.pathname === "/add-teacher" ? "active" : ""
                        }
                    >
                        Add Teacher
                    </Link>
                </div>
                {/* New Reports Link */}
                <div className="nav-item">
                    <Link
                        to="/reports"
                        className={
                            location.pathname === "/reports" ? "active" : ""
                        }
                    >
                        Reports
                    </Link>
                </div>
            </div>

            <div className="sidebar-footer">
                {location.pathname !== "/settings" && (
                    <div className="nav-item">
                        <Link
                            to="/settings"
                            className={
                                location.pathname === "/settings"
                                    ? "active"
                                    : ""
                            }
                        >
                            Settings
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
