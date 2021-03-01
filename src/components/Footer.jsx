import React, { useState } from "react";
import FormModal from "../components/FormModal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const setM = () => {
    setShowModal(true);
  };
  const smallWindow = window.innerWidth < 600;
  const largeWindow = window.innerWidth >= 600;
  const OnenSmallWindow = (url) => {
    window.open(
      url,
      "Ratting",
      smallWindow
        ? "width=350,height=370,left=150,top=200,toolbar=0,status=0"
        : "width=600,height=570,left=150,top=200,toolbar=0,status=0"
    );
  };
  return (
    <div className="footer_main">
      <FormModal show={showModal} onHide={() => setShowModal(false)} />

      <div className="nav_button">
        <ul className="icons">
          <li>
            <a
              className="icon brands fab fa-linkedin"
              target="_blank"
              onClick={() =>
                OnenSmallWindow("https://www.linkedin.com/in/karolykertesz")
              }
            ></a>
          </li>

          <li>
            <a
              onClick={() =>
                OnenSmallWindow("https://github.com/karolykertesz")
              }
              className="icon brands fa-github"
              target="_blank"
            >
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
