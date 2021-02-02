import React, { useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className="text-style"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <span className="flicker">Br</span>
          <span className="fast-flicker">E</span>
          <span className="flicker">aking</span>
          <span className="fast-flicker">B</span>
          <span className="fast-flicker">Ad</span>{" "}
          <i class="fas fa-house-damage fast-flicker" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/episodes">
            <Button variant="outline-warning">Episodes</Button>
          </LinkContainer>

          <LinkContainer to="/characters">
            <Button variant="outline-warning">Characters</Button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Button variant="outline-warning">Signup</Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button variant="outline-warning">Login</Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
