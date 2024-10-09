import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import StudentList from "./StudentList"; // Import the StudentList component
import CoursesList from "./CoursesList"; // Import the CoursesList component

export default function Routers() {
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
                <Route path="/courses" element={<CoursesList />} /> {/* Add Courses route */}
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
