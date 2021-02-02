import React, { useState } from "react";
import "./login.css";
import { Form, Button, Container, Col } from "react-bootstrap";

export const Login = () => {
  const [logindata, setlogindata] = useState({ email: "", pwd: "" });
  const [isloggedin, setisloggedin] = useState(false);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setlogindata({ ...logindata, [name]: value });
  };
  const handleSubmit = event => {
    if (
      logindata.email == window.localStorage.getItem("email") &&
      logindata.pwd == window.localStorage.getItem("pwd")
    ) {
      setisloggedin(true);
      alert("view episode or characters");
    } else {
      alert("wrong credentials");
    }
  };
  return (
    <Container>
      <Col sm={3} md={4} lg={6} className="login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={logindata.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={logindata.pwd}
              name="pwd"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-success" size="lg" onClick={handleSubmit}>
            Log In
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
