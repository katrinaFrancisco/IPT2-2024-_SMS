import React, { useState } from "react";
import NavList from "./Navlist";
// Import FontAwesome for the eye icon (or use another method to include icons)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
        console.log("Logging in:", { username, password });
        setError("");
    };

    return (
        <div className="login">
            <div className="navbar">
                <NavList />
            </div>
            <div className="login-container">
                <div className="form-card">
                    <h2 className="form-title">LOGIN FORM</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="input-group password-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    setShowPassword(!showPassword)
                                } // Accessibility: toggle on Enter key
                            >
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                />
                            </span>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
