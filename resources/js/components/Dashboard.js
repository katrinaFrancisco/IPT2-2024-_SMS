import logo from "C:/SMS/NOBG.png";
import avatar from "C:/SMS/jj.png"; // Import the avatar image

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img
                        src={logo}
                        alt="School Logo"
                        className="sidebar-logo"
                    />
                </div>

                {/* Divider */}
                <div className="divider"></div>

                {/* Sidebar links */}
                <div className="sidebar-links">
                    <a href="#" className="sidebar-link">
                        Dashboard
                    </a>
                    <a href="#" className="sidebar-link">
                        Profile
                    </a>
                    <a href="#" className="sidebar-link">
                        Teachers
                    </a>
                    <a href="#" className="sidebar-link">
                        Students
                    </a>
                    <a href="#" className="sidebar-link">
                        Courses
                    </a>
                    <a href="#" className="sidebar-link">
                        Reports
                    </a>
                </div>

                {/* Settings link at the bottom */}
                <div className="sidebar-footer">
                    <a href="#" className="settings-link">
                        Settings
                    </a>
                </div>
            </div>

            {/* Dashboard content */}
            <div className="dashboard-content">
                {/* Welcome section with avatar */}
                <div className="welcome-metric">
                    <div className="welcome-text">
                        <h2>WELCOME TO PINNACLE NEXUS UNIVERSITY</h2>
                        <p>Always stay updated in your student portal</p>
                    </div>
                    <img src={avatar} alt="User Avatar" className="avatar" />
                </div>

                {/* Dashboard metrics */}
                <div className="metrics-section">
                    <div className="metric-item">
                        <h3>$10,000</h3>
                        <p>Total Payable</p>
                    </div>
                    <div className="metric-item">
                        <h3>$5,000</h3>
                        <p>Total Paid</p>
                    </div>
                    <div className="metric-item">
                        <h3>$300</h3>
                        <p>Others</p>
                    </div>
                </div>

                {/* Enrolled Courses */}
                <div className="courses-section">
                    <h3>Enrolled Courses</h3>
                    <div className="course-item">
                        <h4>Object Oriented Programming</h4>
                        <button>View</button>
                    </div>
                    <div className="course-item">
                        <h4>Fundamentals of Database Systems</h4>
                        <button>View</button>
                    </div>
                </div>

                {/* Course Instructors */}
                <div className="instructors-section">
                    <h3>Course Instructors</h3>
                    <ul>
                        <li>Instructor 1</li>
                        <li>Instructor 2</li>
                    </ul>
                </div>

                {/* Daily Notice */}
                <div className="daily-notice-section">
                    <h3>Daily Notice</h3>
                    <p>Exam schedule and important announcements</p>
                </div>
            </div>
        </div>
    );
}
