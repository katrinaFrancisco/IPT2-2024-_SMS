import React from "react";
//import { useNavigate } from "react-router-dom";
import SidebarList from "./Sidebar";

// Define the teacher data array
const teachersData = [
    {
        name: "John Smith",
        teacherId: "T0001",
        email: "john.smith@nexus.edu.ph",
        subject: "Math",
        yearHired: 2022,
    },
    {
        name: "Jane Doe",
        teacherId: "T0002",
        email: "jane.doe@nexus.edu.ph",
        subject: "English",
        yearHired: 2023,
    },
    {
        name: "Emily Davis",
        teacherId: "T0003",
        email: "emily.davis@nexus.edu.ph",
        subject: "Science",
        yearHired: 2024,
    },
    {
        name: "Michael Johnson",
        teacherId: "T0004",
        email: "michael.johnson@nexus.edu.ph",
        subject: "History",
        yearHired: 2025,
    },
    {
        name: "Sophia Brown",
        teacherId: "T0005",
        email: "sophia.brown@nexus.edu.ph",
        subject: "Art",
        yearHired: 2026,
    },
    {
        name: "Jane Doe",
        teacherId: "T0002",
        email: "jane.doe@nexus.edu.ph",
        subject: "Science",
        yearHired: 2023,
    },
    {
        name: "Michael Johnson",
        teacherId: "T0003",
        email: "michael.johnson@nexus.edu.ph",
        subject: "History",
        yearHired: 2024,
    },
    {
        name: "Emily Davis",
        teacherId: "T0004",
        email: "emily.davis@nexus.edu.ph",
        subject: "English",
        yearHired: 2025,
    },
    {
        name: "Robert Brown",
        teacherId: "T0005",
        email: "robert.brown@nexus.edu.ph",
        subject: "Music",
        yearHired: 2026,
    },
    {
        name: "Linda Miller",
        teacherId: "T0006",
        email: "linda.miller@nexus.edu.ph",
        subject: "Art",
        yearHired: 2027,
    },
    {
        name: "James Wilson",
        teacherId: "T0007",
        email: "james.wilson@nexus.edu.ph",
        subject: "Physical Education",
        yearHired: 2023,
    },
    {
        name: "Barbara Moore",
        teacherId: "T0008",
        email: "barbara.moore@nexus.edu.ph",
        subject: "Biology",
        yearHired: 2022,
    },
    {
        name: "Charles Taylor",
        teacherId: "T0009",
        email: "charles.taylor@nexus.edu.ph",
        subject: "Chemistry",
        yearHired: 2024,
    },
    {
        name: "Susan Anderson",
        teacherId: "T0010",
        email: "susan.anderson@nexus.edu.ph",
        subject: "Physics",
        yearHired: 2025,
    },
    {
        name: "Steven Thomas",
        teacherId: "T0011",
        email: "steven.thomas@nexus.edu.ph",
        subject: "Geography",
        yearHired: 2026,
    },
    {
        name: "Mary Jackson",
        teacherId: "T0012",
        email: "mary.jackson@nexus.edu.ph",
        subject: "Literature",
        yearHired: 2027,
    },
    {
        name: "William Harris",
        teacherId: "T0013",
        email: "william.harris@nexus.edu.ph",
        subject: "History",
        yearHired: 2023,
    },
    {
        name: "Patricia Martinez",
        teacherId: "T0014",
        email: "patricia.martinez@nexus.edu.ph",
        subject: "Math",
        yearHired: 2022,
    },
    {
        name: "David Clark",
        teacherId: "T0015",
        email: "david.clark@nexus.edu.ph",
        subject: "Philosophy",
        yearHired: 2024,
    },
    {
        name: "Jennifer Lewis",
        teacherId: "T0016",
        email: "jennifer.lewis@nexus.edu.ph",
        subject: "Computer Science",
        yearHired: 2025,
    },
    {
        name: "Richard Walker",
        teacherId: "T0017",
        email: "richard.walker@nexus.edu.ph",
        subject: "Economics",
        yearHired: 2026,
    },
    {
        name: "Elizabeth Hall",
        teacherId: "T0018",
        email: "elizabeth.hall@nexus.edu.ph",
        subject: "Sociology",
        yearHired: 2027,
    },
    {
        name: "Thomas Allen",
        teacherId: "T0019",
        email: "thomas.allen@nexus.edu.ph",
        subject: "Music",
        yearHired: 2023,
    },
    {
        name: "Daniel Young",
        teacherId: "T0020",
        email: "daniel.young@nexus.edu.ph",
        subject: "Art",
        yearHired: 2022,
    },
    {
        name: "Nancy Hernandez",
        teacherId: "T0021",
        email: "nancy.hernandez@nexus.edu.ph",
        subject: "Physical Education",
        yearHired: 2024,
    },
    {
        name: "Mark King",
        teacherId: "T0022",
        email: "mark.king@nexus.edu.ph",
        subject: "Science",
        yearHired: 2025,
    },
    {
        name: "Karen Wright",
        teacherId: "T0023",
        email: "karen.wright@nexus.edu.ph",
        subject: "English",
        yearHired: 2026,
    },
    {
        name: "Paul Lopez",
        teacherId: "T0024",
        email: "paul.lopez@nexus.edu.ph",
        subject: "History",
        yearHired: 2027,
    },
    {
        name: "Betty Hill",
        teacherId: "T0025",
        email: "betty.hill@nexus.edu.ph",
        subject: "Math",
        yearHired: 2023,
    },
    {
        name: "Christopher Scott",
        teacherId: "T0026",
        email: "christopher.scott@nexus.edu.ph",
        subject: "Physics",
        yearHired: 2022,
    },
    {
        name: "Dorothy Green",
        teacherId: "T0027",
        email: "dorothy.green@nexus.edu.ph",
        subject: "Biology",
        yearHired: 2024,
    },
    {
        name: "Matthew Adams",
        teacherId: "T0028",
        email: "matthew.adams@nexus.edu.ph",
        subject: "Chemistry",
        yearHired: 2025,
    },
    {
        name: "Sandra Baker",
        teacherId: "T0029",
        email: "sandra.baker@nexus.edu.ph",
        subject: "Geography",
        yearHired: 2026,
    },
    {
        name: "Anthony Gonzalez",
        teacherId: "T0030",
        email: "anthony.gonzalez@nexus.edu.ph",
        subject: "Philosophy",
        yearHired: 2027,
    },
    {
        name: "Donna Perez",
        teacherId: "T0031",
        email: "donna.perez@nexus.edu.ph",
        subject: "Sociology",
        yearHired: 2023,
    },
    {
        name: "Kevin Roberts",
        teacherId: "T0032",
        email: "kevin.roberts@nexus.edu.ph",
        subject: "Computer Science",
        yearHired: 2022,
    },
    {
        name: "Sarah Thompson",
        teacherId: "T0033",
        email: "sarah.thompson@nexus.edu.ph",
        subject: "Economics",
        yearHired: 2024,
    },
    {
        name: "Joshua Nelson",
        teacherId: "T0034",
        email: "joshua.nelson@nexus.edu.ph",
        subject: "History",
        yearHired: 2025,
    },
    {
        name: "Deborah Carter",
        teacherId: "T0035",
        email: "deborah.carter@nexus.edu.ph",
        subject: "Literature",
        yearHired: 2026,
    },
    {
        name: "George Mitchell",
        teacherId: "T0036",
        email: "george.mitchell@nexus.edu.ph",
        subject: "Science",
        yearHired: 2027,
    },
    {
        name: "Melissa Parker",
        teacherId: "T0037",
        email: "melissa.parker@nexus.edu.ph",
        subject: "Math",
        yearHired: 2023,
    },
    {
        name: "Eric Evans",
        teacherId: "T0038",
        email: "eric.evans@nexus.edu.ph",
        subject: "English",
        yearHired: 2022,
    },
    {
        name: "Shirley Edwards",
        teacherId: "T0039",
        email: "shirley.edwards@nexus.edu.ph",
        subject: "Physics",
        yearHired: 2024,
    },
    {
        name: "Andrew Collins",
        teacherId: "T0040",
        email: "andrew.collins@nexus.edu.ph",
        subject: "Physical Education",
        yearHired: 2025,
    },
    {
        name: "Angela Stewart",
        teacherId: "T0041",
        email: "angela.stewart@nexus.edu.ph",
        subject: "Art",
        yearHired: 2026,
    },
    {
        name: "Justin Morris",
        teacherId: "T0042",
        email: "justin.morris@nexus.edu.ph",
        subject: "Music",
        yearHired: 2027,
    },
    {
        name: "Brenda Rivera",
        teacherId: "T0043",
        email: "brenda.rivera@nexus.edu.ph",
        subject: "History",
        yearHired: 2023,
    },
    {
        name: "Scott Campbell",
        teacherId: "T0044",
        email: "scott.campbell@nexus.edu.ph",
        subject: "Computer Science",
        yearHired: 2022,
    },
    {
        name: "Rebecca Ward",
        teacherId: "T0045",
        email: "rebecca.ward@nexus.edu.ph",
        subject: "Sociology",
        yearHired: 2024,
    },

    // Add more teacher data as needed
];

export default function TeacherList() {
    return (
        <div className="teacher-list">
            {/* Render the SidebarList component */}
            <SidebarList />

            {/* Teacher List content */}
            <div className="teacher-list-content">
                {/* Header section */}
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>TEACHER LIST</h2>
                        <p>Manage and view teacher details</p>
                    </div>
                </div>

                {/* Teacher list table */}
                <div className="teacher-table">
                    <div className="teacher-table-header">
                        <button className="add-teacher-btn">Add Teacher</button>
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
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Year Hired</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachersData.map((teacher, index) => (
                                <tr key={index}>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.teacherId}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.subject}</td>
                                    <td>{teacher.yearHired}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Export teachers array to be used in Reports.js or other components
export { teachersData };
