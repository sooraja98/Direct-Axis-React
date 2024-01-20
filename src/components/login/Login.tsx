import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.scss";

// Login component
const Login: React.FC = () => {
  // State to manage email and password input values
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle login button click
  const handleLogin = () => {
    // Get the existing users from local storage or initialize an empty array
    const existingUsersString = localStorage.getItem("users");
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    // Check if the entered credentials match any user
    const user = existingUsers.find((data:any) => data.email === email && data.password === password);

    if (user) {
      // Display a success message
      alert("Login successful!");

      // Set a cookie with the user's email
      Cookies.set("userEmail", email);

      // Redirect to the main page
      navigate("/main");
    } else {
      // Display an error message for invalid credentials
      alert("Invalid email or password. Please try again.");
    }
  };

  // JSX structure for the login form
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="login-header">
            <h2>Login</h2>
          </div>
          {/* Login form using React Bootstrap */}
          <Form>
            <div className="form-group">
              <Form.Label>Email </Form.Label>
              {/* Input for entering email */}
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Form.Label>Password</Form.Label>
              {/* Input for entering password */}
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              {/* Login button */}
              <Button
                variant="primary"
                type="button"
                onClick={handleLogin}
                className="login-button"
              >
                Login
              </Button>
            </div>

            {/* Link to navigate to the registration page */}
            <div className="form-group">
              <Link to="/register" style={{textDecoration:'none'}}>Don't have an account? Register here</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
