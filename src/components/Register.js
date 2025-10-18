import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered user: ${user.name}`);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control"
            onChange={(e) => setUser({ ...user, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
            onChange={(e) => setUser({ ...user, password: e.target.value })} required />
        </div>
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
