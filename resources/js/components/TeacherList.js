import React from "react";
import { useNavigate } from "react-router-dom";
import SidebarList from "./Sidebar";

export default function TeacherList({ teachers }) {
    const navigate = useNavigate();

    const handleAddTeacherClick = () => {
        navigate("/add-teacher");
    };

    return (
        <div className="teacher-list">
            <SidebarList />
            <div className="teacher-list-content">
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>TEACHER LISTS</h2>
                        <p>Manage and view teacher details</p>
                    </div>
                </div>

                <div className="teacher-table">
                    <div className="teacher-table-header">
                        <button
                            className="add-teacher-btn"
                            onClick={handleAddTeacherClick}
                        >
                            Add Teacher
                        </button>
                        <input
                            type="text"
                            placeholder="Search for a teacher by name or email"
                            className="search-bar"
                        />
                    </div>

                    <table className="teacher-table-main">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Teacher ID</th>
                                <th>Email Address</th>
                                <th>Subject</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher, index) => (
                                <tr key={index}>
                                    <td>{teacher.fullName}</td>
                                    <td>{teacher.employeeID}</td>
                                    <td>{teacher.emailAddress}</td>
                                    <td>{teacher.subject}</td>
                                    <td>{teacher.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
