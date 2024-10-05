import React, { useState } from "react";
import NavList from "./Navlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// Import your logo image
import logo from "C:/SMS/NOBG.png";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError("Please fill in all fields");
            return;
        }
        // Handle login logic, e.g., API call
        console.log("Logging in:", { username, password });
        setUsername("");
        setPassword("");
        setError("");
    };

    return (
        <div className="login">
            <NavList /> {/* Navbar integrated here */}
            <div className="login-container">
                <div className="form-card">
                    <div className="left-section">
                        {/* Logo */}
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>

                    <div className="right-section">
                        <h2 className="form-title">Login to your account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder="Username"
                                    required
                                    aria-label="Username" // Accessibility
                                />
                            </div>
                            <div className="input-group password-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                    required
                                    aria-label="Password" // Accessibility
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        setShowPassword(!showPassword)
                                    }
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    } // Accessibility
                                    title={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    } // Tooltip for better UX
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                    />
                                </span>
                            </div>

                            {error && (
                                <div className="error-message">{error}</div>
                            )}

                            <button type="submit" className="login-button">
                                Login
                            </button>
                        </form>

                        <div className="signup-link">
                            <span>Don't have an account? </span>
                            <Link to="/signup">Sign Up Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
