import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "C:/pry/NOBG.png"; // Adjust this path if needed

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        console.log("Signing up:", { firstName, lastName, email, password });

        // Clear fields after successful sign-up
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="form-card">
                    {/* Right Section now contains the Logo */}
                    <div className="left-section">
                        <h2 className="form-title">
                            Sign Up for a New Account
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                            <button type="submit" className="signup-button">
                                Sign Up
                            </button>
                        </form>
                        <div className="login-link">
                            <span>Already have an account? </span>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>

                    {/* Right Section now contains the Logo */}
                    <div className="right-section">
                        <img src={logo} alt="Logo" className="signup-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
