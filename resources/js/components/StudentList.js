import React from "react";
import SidebarList from "./Sidebar";

// Extract student data into an array
const students = [
    {
        name: "Mariane Jane Badong",
        studentId: "000001",
        email: "Badong.mariane@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2022, // Add yearEnrolled field
    },
    {
        name: "Uriel Yape",
        studentId: "000032",
        email: "yape.uriel@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2022, // Add yearEnrolled field
    },
    {
        name: "Katrina Carl Francisco",
        studentId: "000033",
        email: "katrina.francisco@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2025, // Add yearEnrolled field
    },
    {
        name: "Gerryliza Estrada",
        studentId: "000034",
        email: "Gerry.estrada@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2025, // Add yearEnrolled field
    },
    {
        name: "Gerryliza Estrada",
        studentId: "000034",
        email: "Gerry.estrada@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2025,
    },
    {
        name: "Marcelo Martinez",
        studentId: "000035",
        email: "Marcelo.martinez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2023,
    },
    {
        name: "Anna Reyes",
        studentId: "000036",
        email: "Anna.reyes@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2024,
    },
    {
        name: "Emanuel Santos",
        studentId: "000037",
        email: "Emanuel.santos@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2022,
    },
    {
        name: "Sophia Lim",
        studentId: "000038",
        email: "Sophia.lim@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2026,
    },
    {
        name: "John Doe",
        studentId: "000039",
        email: "John.doe@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2027,
    },
    {
        name: "Elena Cruz",
        studentId: "000040",
        email: "Elena.cruz@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2025,
    },
    {
        name: "Carlos Morales",
        studentId: "000041",
        email: "Carlos.morales@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2023,
    },
    {
        name: "Isabella Reyes",
        studentId: "000042",
        email: "Isabella.reyes@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2022,
    },
    {
        name: "Victor Navarro",
        studentId: "000043",
        email: "Victor.navarro@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2026,
    },
    {
        name: "Maya Fernandez",
        studentId: "000044",
        email: "Maya.fernandez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2024,
    },
    {
        name: "James Tan",
        studentId: "000045",
        email: "James.tan@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2027,
    },
    {
        name: "Lucia Vega",
        studentId: "000046",
        email: "Lucia.vega@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2023,
    },
    {
        name: "Daniel Cruz",
        studentId: "000047",
        email: "Daniel.cruz@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2022,
    },
    {
        name: "Alexa Gonzales",
        studentId: "000048",
        email: "Alexa.gonzales@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2026,
    },
    {
        name: "Eduardo Perez",
        studentId: "000049",
        email: "Eduardo.perez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2025,
    },
    {
        name: "Angela Hernandez",
        studentId: "000050",
        email: "Angela.hernandez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2027,
    },
    {
        name: "Jose Santos",
        studentId: "000051",
        email: "Jose.santos@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2023,
    },
    {
        name: "Maria Diaz",
        studentId: "000052",
        email: "Maria.diaz@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2024,
    },
    {
        name: "Miguel Gutierrez",
        studentId: "000053",
        email: "Miguel.gutierrez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2025,
    },
    {
        name: "Clara Moreno",
        studentId: "000054",
        email: "Clara.moreno@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2026,
    },
    {
        name: "Pedro Rodriguez",
        studentId: "000055",
        email: "Pedro.rodriguez@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2022,
    },
    {
        name: "Sara Mendoza",
        studentId: "000056",
        email: "Sara.mendoza@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2023,
    },
    {
        name: "Raul Vargas",
        studentId: "000057",
        email: "Raul.vargas@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Male",
        yearEnrolled: 2024,
    },
    {
        name: "Vanessa Torres",
        studentId: "000058",
        email: "Vanessa.torres@nexus.edu.ph",
        class: "IT Class 3",
        gender: "Female",
        yearEnrolled: 2025,
    },

    // Add more students as needed with their respective enrollment years
];

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
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.studentId}</td>
                                    <td>{student.email}</td>
                                    <td>{student.class}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.yearEnrolled}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Export students data for Reports.js
export { students };
