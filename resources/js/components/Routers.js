import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import SidebarList from "./Sidebar";
import AddTeacherForm from "./AddTeacherForm"; // Import AddTeacherForm

export default function Routers() {
    // State to store the list of teachers
    const [teachers, setTeachers] = useState([
        {
            fullName: "Jane Doe",
            employeeID: "001",
            emailAddress: "doe.jane@nexus.edu.ph",
            subject: "Mathematics",
            gender: "Female",
        },
    ]);

    // Function to add a teacher
    const addTeacher = (newTeacher) => {
        setTeachers([...teachers, newTeacher]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<StudentList />} />

                {/* Pass the teachers array as a prop to TeacherList */}
                <Route
                    path="/teachers"
                    element={<TeacherList teachers={teachers} />}
                />

                {/* Pass the addTeacher function as a prop to AddTeacherForm */}
                <Route
                    path="/add-teacher"
                    element={<AddTeacherForm addTeacher={addTeacher} />}
                />
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
