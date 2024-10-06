import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddTeacherForm";

export default function AddTeacherForm() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleDashboardClick = () => {
        navigate("/dashboard"); // Redirect to the Dashboard
    };

    return (
        <div className="add-teacher-form">
            <h2>Add Teacher</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <select id="subject" required>
                        <option value="">Select a subject</option>
                        <option value="math">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        {/* Add more subjects as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" required>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Add Teacher</button>
            </form>
            <button className="dashboard-btn" onClick={handleDashboardClick}>
                Go to Dashboard
            </button>
        </div>
    );
}
