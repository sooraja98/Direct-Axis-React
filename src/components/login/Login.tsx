// components/Auth/Login.tsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    alert(email);
    alert(password);
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
                className="login-button">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
