import React, { useState } from "react";
import FormModal from "../components/FormModal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const setM = () => {
    setShowModal(true);
    console.log("modal.....");
  };

  return (
    <div className="footer_main">
      <FormModal show={showModal} onHide={() => setShowModal(false)} />

      <div className="nav_button">
        <ul className="icons">
          <li>
            <a href="https://google.com" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>

          <li>
            <a href="https://google.com" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <span className="label" onClick={() => setM()}>
              <span className="icon solid fa-envelope"></span>
            </span>
          </li>
        </ul>
      </div>
      <section className="left">
        <div className="container-fluid">
          <ul className="copyright">
            <li>&copy; All rights reserved.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
