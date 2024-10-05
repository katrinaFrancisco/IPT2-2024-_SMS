import logo from "C:/Ucjy/NOBG.png"; // Import the logo image

export default function StudentList() {
    return (
        <div className="student-list">
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
                </div>

                {/* Settings link at the bottom */}
                <div className="sidebar-footer">
                    <a href="#" className="settings-link">
                        Settings
                    </a>
                </div>
            </div>

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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mariane Jane Badong</td>
                                <td>000001</td>
                                <td>Badong.mariane@nexus.edu.ph</td>
                                <td>E Class 2</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Uriel Yape</td>
                                <td>000032</td>
                                <td>yape.uriel@nexus.edu.ph</td>
                                <td>IT Class 3</td>
                                <td>Male</td>
                            </tr>
                            {/* Add more student rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
