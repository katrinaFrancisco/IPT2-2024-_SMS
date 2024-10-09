import React from "react";
import SidebarList from "./Sidebar";
import logo from "C:/lol/NOBG.png";

export default function StudentList() {
    return (
        <div className="student-list">
            {/* Render the SidebarList component */}
            <SidebarList />

            {/* Student List content */}
            <div className="student-list-content">
                {/* Header section */}
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>STUDENT LISTS</h2>
                        <p>Manage and view student details</p>
                    </div>
                </div>

                {/* Student list table */}
                <div className="student-table">
                    <div className="student-table-header">
                        <button className="add-student-btn">Add Student</button>
                        <input
                            type="text"
                            placeholder="Search for a student by name or email"
                            className="search-bar"
                        />
                    </div>

                    <table className="student-table-main">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Student ID</th>
                                <th>Email Address</th>
                                <th>Class</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mariane Jane Badong</td>
                                <td>000001</td>
                                <td>Badong.mariane@nexus.edu.ph</td>
                                <td>E Class 2</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Uriel Yape</td>
                                <td>000032</td>
                                <td>yape.uriel@nexus.edu.ph</td>
                                <td>IT Class 3</td>
                                <td>Male</td>
                            </tr>
                            {/* Add more student rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
