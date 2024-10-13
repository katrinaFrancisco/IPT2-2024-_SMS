import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTeacherForm";

export default function AddTeacherForm({ addTeacher }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [gender, setGender] = useState("");
    const [yearHired, setYearHired] = useState(""); // New state for year hired

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send teacher data to parent component
        addTeacher({ name, email, subject, gender, yearHired });
        // Optionally, reset the form fields
        setName("");
        setEmail("");
        setSubject("");
        setGender("");
        setYearHired(""); // Reset year hired field
        navigate("/dashboard"); // Redirect to dashboard after submission
    };

    return (
        <div className="add-teacher-form">
            <h2>Add Teacher</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    >
                        <option value="">Select a subject</option>
                        <option value="math">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        {/* Add more subjects as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="yearHired">Year Hired:</label>
                    <input
                        type="number"
                        id="yearHired"
                        value={yearHired}
                        onChange={(e) => setYearHired(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Teacher</button>
            </form>
            <button
                className="dashboard-btn"
                onClick={() => navigate("/dashboard")}
            >
                Go to Dashboard
            </button>
        </div>
    );
}
