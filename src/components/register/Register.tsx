import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi"; // Import Joi
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Define a Joi schema for validation
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    });

    // Validate the input data against the schema
    const { error } = schema.validate({ name, email, password, confirmPassword });

    if (error) {
      alert(error.details[0].message);
      return;
    }

    const existingUsersString = localStorage.getItem("users");
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    if (existingUsers.some((user: { email: string }) => user.email === email)) {
      alert("Email is already registered. Please choose a different email.");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Registration successful!");
    navigate("/");
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
