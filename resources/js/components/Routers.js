import React from "react";
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
import AddTeacherForm from "./AddTeacherForm";
import Profile from "./Profile"; // Import the Profile component

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
                <Route path="/teachers" element={<TeacherList />} />
                <Route path="/add-teacher" element={<AddTeacherForm />} />
                <Route path="/profile" element={<Profile />} />{" "}
                {/* New Route for Profile */}
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
