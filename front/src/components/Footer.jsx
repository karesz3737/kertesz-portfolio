import React, { useState } from "react";
import FormModal from "../components/FormModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const setM = () => {
    setShowModal(true);
  };
  const smallWindow = window.innerWidth < 600;
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
          <span className="label">
            <li className="ic">
              <button
                onClick={() =>
                  OnenSmallWindow("https://www.linkedin.com/in/karolykertesz")
                }
              >
                <span
                  className="icon brands fab fa-linkedin ic"
                  aria-hidden="true"
                ></span>
              </button>
            </li>
          </span>
          <li className="ic">
            <button
              onClick={() =>
                OnenSmallWindow("https://github.com/karolykertesz")
              }
            >
              <i className="icon brands fa-github ic"></i>
            </button>
          </li>
          <li className="ic">
            <button onClick={() => setM()}>
              <i className="icon solid fa-envelope"></i>
            </button>
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
