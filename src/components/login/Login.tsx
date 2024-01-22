import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Joi from "joi";
import "./Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(6).required(),
  });

  const handleLogin = () => {
    const { error } = schema.validate({ email, password });

    if (error) {
      alert(error.details[0].message);
      return;
    }

    const existingUsersString = localStorage.getItem("users");
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    const user = existingUsers.find((data: any) => data.email === email && data.password === password);

    if (user) {
      alert("Login successful!");
      Cookies.set("userEmail", email);
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

            <div className="form-group">
              <Link to="/register" style={{ textDecoration: "none" }}>
                Don't have an account? Register here
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
