// Register.tsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.scss";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = () => {
    // Get the existing users from local storage or initialize an empty array
    const existingUsersString = localStorage.getItem("users");
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    // Check if the email is already registered
    if (existingUsers.some((user) => user.email === email)) {
      alert("Email is already registered. Please choose a different email.");
      return;
    }

    // Add the new user to the array
    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];

    // Save the updated array of users to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");
  };

  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <div className="register-header">
            <h2>Register</h2>
          </div>
          <Form>
            <div className="form-group">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Button
                variant="primary"
                type="button"
                onClick={handleRegister}
                className="register-button"
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
