import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.scss";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = () => {
    alert(name);
    alert(email);
    alert(password);
    alert(confirmPassword);
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
                className="register-button">
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
