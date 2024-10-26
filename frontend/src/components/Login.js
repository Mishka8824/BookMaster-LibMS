import React, { useState } from "react";
import '../styles/loginStyle.css'; 

const Login = ({ setIsAdmin, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdminCheckbox] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Example credentials
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true); // Log the user in
      setIsAdmin(isAdmin); // Set admin status based on checkbox
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div id="usnHelp" className="form-text">
              Remember your Username! This site is in development and is without login retrieval features.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isAdmin}
              onChange={(e) => setIsAdminCheckbox(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Is Admin 
            </label>
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
