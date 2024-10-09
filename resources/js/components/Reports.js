import React, { useState } from "react";
import SidebarList from "./Sidebar"; // Sidebar component
import logo from "C:/yan/NOBG.png"; // Replace with your actual path

export default function ReportPage() {
    const [activeSection, setActiveSection] = useState("view-reports");

    // Function to handle sidebar link clicks
    const handleSidebarClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="report-page">
            {/* Render the SidebarList component */}
            <SidebarList onClick={handleSidebarClick} />

            {/* Report Page Content */}
            <div className="report-content">
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>REPORTS</h2>
                        <p>Manage and view report details</p>
                    </div>
                </div>

                {/* Dynamic Content Rendering Based on Active Section */}
                {activeSection === "view-reports" && (
                    <div>
                        <h3>View Reports</h3>
                        <div className="report-table">
                            <div className="report-table-header">
                                <input
                                    type="text"
                                    placeholder="Search for a report by name or date"
                                    className="search-bar"
                                />
                            </div>

                            <table className="report-table-main">
                                <thead>
                                    <tr>
                                        <th>Report Name</th>
                                        <th>Generated Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Attendance Report</td>
                                        <td>2024-10-01</td>
                                        <td>Complete</td>
                                        <td>
                                            <button>View</button>{" "}
                                            <button>Download</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Grade Report</td>
                                        <td>2024-09-15</td>
                                        <td>Pending</td>
                                        <td>
                                            <button>View</button>{" "}
                                            <button>Download</button>
                                        </td>
                                    </tr>
                                    {/* Add more report rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeSection === "generate-reports" && (
                    <div>
                        <h3>Generate Reports</h3>
                        <p>
                            Select the type of report and date range to generate
                            a new report.
                        </p>
                        <form className="generate-report-form">
                            <label htmlFor="report-type">Report Type:</label>
                            <select id="report-type" name="report-type">
                                <option value="attendance">
                                    Attendance Report
                                </option>
                                <option value="grades">Grades Report</option>
                            </select>

                            <label htmlFor="start-date">Start Date:</label>
                            <input
                                type="date"
                                id="start-date"
                                name="start-date"
                            />

                            <label htmlFor="end-date">End Date:</label>
                            <input type="date" id="end-date" name="end-date" />

                            <button type="submit" className="generate-btn">
                                Generate Report
                            </button>
                        </form>
                    </div>
                )}

                {activeSection === "download-reports" && (
                    <div>
                        <h3>Download Reports</h3>
                        <p>Select a report from the list to download:</p>
                        <ul>
                            <li>
                                Attendance Report - 2024-10-01{" "}
                                <button>Download</button>
                            </li>
                            <li>
                                Grades Report - 2024-09-15{" "}
                                <button>Download</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
