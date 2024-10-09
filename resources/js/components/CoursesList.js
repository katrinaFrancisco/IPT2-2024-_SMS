import React from "react";
import { Link } from "react-router-dom";
import logo from "C:/lol/NOBG.png";

export default function CoursesList() { 
    return (
        <div className="courses-list">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="School Logo" className="sidebar-logo" />
                </div>

                <div className="divider"></div>

                <div className="sidebar-links">
                    <Link to="/dashboard" className="sidebar-link">
                        Dashboard
                    </Link>
                    <Link to="/profile" className="sidebar-link">
                        Profile
                    </Link>
                    <Link to="/teachers" className="sidebar-link">
                        Teachers
                    </Link>
                    <Link to="/students" className="sidebar-link">
                        Students
                    </Link>
                    <Link to="/courses" className="sidebar-link active">
                        Courses
                    </Link>
                </div>

                <div className="sidebar-footer">
                    <Link to="/settings" className="settings-link">
                        Settings
                    </Link>
                </div>
            </div>

            <div className="courses-list-content">
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>COURSES LIST</h2>
                        <p>Manage and view course details</p>
                    </div>
                </div>

                <div className="courses-table">
                    <div className="courses-table-header">
                        <button className="add-course-btn">Add Course</button>
                        <input
                            type="text"
                            placeholder="Search for a course by name or code"
                            className="search-bar"
                        />
                    </div>

                    {/* Technology and Computer Science Department */}
                    <h3>Technology and Computer Science</h3>
                    <table className="courses-table-main">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data Science</td>
                                <td>DS101</td>
                            </tr>
                            <tr>
                                <td>Machine Learning</td>
                                <td>CS202</td>
                            </tr>
                            <tr>
                                <td>Artificial Intelligence</td>
                                <td>CS301</td>
                            </tr>
                            <tr>
                                <td>Cybersecurity</td>
                                <td>CS350</td>
                            </tr>
                            <tr>
                                <td>Cloud Computing</td>
                                <td>IT400</td>
                            </tr>
                            <tr>
                                <td>Web Development</td>
                                <td>CS205</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Advanced Mathematics Department */}
                    <h3>Advanced Mathematics</h3>
                    <table className="courses-table-main">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Advanced Calculus</td>
                                <td>MATH202</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
