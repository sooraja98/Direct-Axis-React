// Login.tsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import "./Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get the existing users from local storage or initialize an empty array
    const existingUsersString = localStorage.getItem("users");
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    // Check if the entered credentials match any user
    const user = existingUsers.find((data) => data.email === email && data.password === password);

    if (user) {
      alert("Login successful!");

      // Set a cookie with the user's email
      Cookies.set("userEmail", email);

      // Redirect to the main page
      navigate("/main");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h2>Login</h2>
          </div>
          <Form>
            <div className="form-group">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Button
                variant="primary"
                type="button"
                onClick={handleLogin}
                className="login-button"
              >
                Login
              </Button>
            </div>

            {/* Add a Link to navigate to the registration page */}
            <div className="form-group">
              <Link to="/register">Don't have an account? Register here</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
