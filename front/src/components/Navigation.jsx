import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="bg-dark sticky-top">
      <Navbar expand="lg" id="nav" className="nav-col">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav_icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav_li action-button shadow  blue">
              <p className="nav_text"> Home</p>
            </Nav.Link>
            <Nav.Link
              href="/things"
              className="nav_li action-button shadow  blue"
            >
              <p className="nav_text">Things I Can Do</p>
            </Nav.Link>
            <Nav.Link
              href="/myprojects"
              className="nav_li action-button shadow  blue"
            >
              <p className="nav_text">A Few Accomplishments</p>
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="nav_li action-button shadow  blue"
            >
              <p className="nav_text"> Contact</p>
            </Nav.Link>
            <Nav.Link
              href="/aboutme"
              className="nav_li action-button shadow  blue"
            >
              <p className="nav_text"> About me</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
