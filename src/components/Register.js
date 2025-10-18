import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
    const [accountType, setAccountType] = useState("user");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        companyName: "",
        location: "",
        website: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();
        alert(`Registered ${accountType === "user" ? "User" : "Company"}: ${user.name || user.companyName}`);
    };

    return (
        <div className="col-md-8 offset-md-2 mt-4">
            <div className="card shadow-lg border-0 rounded-3">
                <div className="card-body p-4">
                    <h3 className="text-center mb-4 fw-bold">Register Account</h3>

                    {/* Toggle Buttons */}
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            type="button"
                            className={`btn me-2 ${accountType === "user" ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setAccountType("user")}
                        >
                            User Register
                        </button>
                        <button
                            type="button"
                            className={`btn ${accountType === "company" ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setAccountType("company")}
                        >
                            Company Register
                        </button>
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleRegister}>
                        {accountType === "user" ? (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your company name"
                                        onChange={(e) => setUser({ ...user, companyName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter company location"
                                        onChange={(e) => setUser({ ...user, location: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Website</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="https://example.com"
                                        onChange={(e) => setUser({ ...user, website: e.target.value })}
                                    />
                                </div>
                            </>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter a strong password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                required
                            />
                        </div>

                        <button className="btn btn-success w-100 mt-2">
                            Register as {accountType === "user" ? "User" : "Company"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
