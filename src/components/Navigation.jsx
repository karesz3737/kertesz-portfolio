import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="bg-dark">
      <Navbar bg="" expand="lg" id="nav" className="nav-col">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-light">
              <p className="nav_text"> About Me</p>
            </Nav.Link>
            <Nav.Link href="/things" className="nav_li">
              <p className="nav_text">Things I Can Do</p>
            </Nav.Link>
            <Nav.Link href="/myprojects" className="nav_li">
              <p className="nav_text">A Few Accomplishments</p>
            </Nav.Link>
            <Nav.Link href="/contact" className="nav_li">
              <p className="nav_text"> Contact</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
