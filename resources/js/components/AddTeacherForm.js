import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeacherForm({ addTeacher }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        religion: "",
        nationality: "",
        permanentAddress: "",
        currentAddress: "",
        contactNumber: "",
        emailAddress: "",
        emergencyContact: "",
        employeeID: "",
        position: "",
        education: "",
        department: "",
        dateOfHire: "",
        employmentStatus: "",
        medicalConditions: "",
        emergencyContacts: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new teacher object
        const newTeacher = {
            fullName: formData.fullName,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            religion: formData.religion,
            nationality: formData.nationality,
            permanentAddress: formData.permanentAddress,
            currentAddress: formData.currentAddress,
            contactNumber: formData.contactNumber,
            emailAddress: formData.emailAddress,
            emergencyContact: formData.emergencyContact,
            employeeID: formData.employeeID,
            position: formData.position,
            education: formData.education,
            department: formData.department,
            dateOfHire: formData.dateOfHire,
            employmentStatus: formData.employmentStatus,
            medicalConditions: formData.medicalConditions,
            emergencyContacts: formData.emergencyContacts,
            subject: formData.subject,
        };

        // Call addTeacher prop to add the new teacher to the list
        addTeacher(newTeacher);

        // Navigate back to the teacher list
        navigate("/teachers");
    };

    return (
        <div className="add-teacher-form">
            <h2>Add New Teacher</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Religion:
                        <input
                            type="text"
                            name="religion"
                            value={formData.religion}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Nationality:
                        <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Permanent Address:
                        <textarea
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Current Address:
                        <textarea
                            name="currentAddress"
                            value={formData.currentAddress}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Contact Number:
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Email Address:
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Emergency Contact:
                        <input
                            type="text"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Professional Information</legend>
                    <label>
                        Employee ID:
                        <input
                            type="text"
                            name="employeeID"
                            value={formData.employeeID}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Position/Title:
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Educational Background:
                        <textarea
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Department:
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Date of Hire:
                        <input
                            type="date"
                            name="dateOfHire"
                            value={formData.dateOfHire}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Employment Status:
                        <select
                            name="employmentStatus"
                            value={formData.employmentStatus}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select status</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Health Information</legend>
                    <label>
                        Medical Conditions:
                        <textarea
                            name="medicalConditions"
                            value={formData.medicalConditions}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Emergency Contacts:
                        <textarea
                            name="emergencyContacts"
                            value={formData.emergencyContacts}
                            onChange={handleInputChange}
                        />
                    </label>
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
