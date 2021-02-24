import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_main">
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
            <Link to="/contact" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </Link>
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
