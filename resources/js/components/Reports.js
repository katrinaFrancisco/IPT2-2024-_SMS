import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import SidebarList from "./Sidebar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { students } from "./StudentList";
import { teachersData } from "./TeacherList";

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Reports() {
    // Define active section state for dynamic sections
    const [activeSection, setActiveSection] = useState("report");

    // Define year range and calculate data
    const fullYearRange = [2022, 2023, 2024, 2025, 2026, 2027];
    const studentEnrollmentCount = students.reduce((acc, student) => {
        acc[student.yearEnrolled] = (acc[student.yearEnrolled] || 0) + 1;
        return acc;
    }, {});
    const studentCounts = fullYearRange.map(
        (year) => studentEnrollmentCount[year] || 0
    );
    const teacherHiredCount = teachersData.reduce((acc, teacher) => {
        acc[teacher.yearHired] = (acc[teacher.yearHired] || 0) + 1;
        return acc;
    }, {});
    const teacherCounts = fullYearRange.map(
        (year) => teacherHiredCount[year] || 0
    );

    // Chart data and options
    const data = {
        labels: fullYearRange,
        datasets: [
            {
                label: "Number of Students",
                data: studentCounts,
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1,
            },
            {
                label: "Number of Teachers",
                data: teacherCounts,
                fill: false,
                borderColor: "rgba(192,75,75,1)",
                tension: 0.1,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 15,
                title: {
                    display: true,
                    text: "Counts",
                    font: {
                        size: 18, // Adjust font size
                        family: "Arial", // Set the font family
                        weight: "bold",
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Year",
                    font: {
                        size: 18, // Adjust font size
                        family: "Arial", // Set the font family
                        weight: "bold",
                    },
                },
                ticks: {
                    font: {
                        size: 17, // Adjust font size for x-axis labels
                    },
                },
            },
        },
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Enrollment and Teacher Hiring Statistics by Year (2022-2027)",
                font: {
                    size: 24, // Adjust font size for chart title
                    family: "Arial", // Set the font family
                    weight: "bold", // Make the title bold
                },
            },
        },
    };

    return (
        <div className="reports-container">
            {/* Sidebar component */}
            <SidebarList />

            {/* Main content container */}
            <div className="report-content-container">
                <div className="report-header">
                    <h2>Enrollment Reports</h2>
                </div>

                {/* Chart */}
                <div className="report-chart">
                    <Line data={data} options={options} />
                </div>

                {/* Download Section */}
                {activeSection === "download-reports" && (
                    <div className="download-reports-section">
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
