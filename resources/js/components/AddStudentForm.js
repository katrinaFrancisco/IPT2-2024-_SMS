import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudentForm({ addStudent }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        permanentAddress: "",
        currentAddress: "",
        contactNumber: "",
        emailAddress: "",
        emergencyContact: "",
        studentID: "",
        grade: "",
        education: "",
        dateOfEnrollment: "",
        healthConditions: "",
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

        // Create a new student object
        const newStudent = {
            fullName: formData.fullName,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            nationality: formData.nationality,
            permanentAddress: formData.permanentAddress,
            currentAddress: formData.currentAddress,
            contactNumber: formData.contactNumber,
            emailAddress: formData.emailAddress,
            emergencyContact: formData.emergencyContact,
            studentID: formData.studentID,
            grade: formData.grade,
            education: formData.education,
            dateOfEnrollment: formData.dateOfEnrollment,
            healthConditions: formData.healthConditions,
            emergencyContacts: formData.emergencyContacts,
        };

        // Call addStudent prop to add the new student to the list
        addStudent(newStudent);

        // Navigate back to the student list
        navigate("/students");
    };

    return (
        <div className="add-student-form">
            <h2>Add New Student</h2>
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
                    <legend>Academic Information</legend>
                    <label>
                        Student ID:
                        <input
                            type="text"
                            name="studentID"
                            value={formData.studentID}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Grade:
                        <input
                            type="text"
                            name="grade"
                            value={formData.grade}
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
                        Date of Enrollment:
                        <input
                            type="date"
                            name="dateOfEnrollment"
                            value={formData.dateOfEnrollment}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Health Information</legend>
                    <label>
                        Health Conditions:
                        <textarea
                            name="healthConditions"
                            value={formData.healthConditions}
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
