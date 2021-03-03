import React from "react";

const Things = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/01/27/16/17/winter-3958406_960_720.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
        position: "fixed",
      }}
    >
      <section id="two">
        <div className="container">
          <h3 className="thing_c">Things I Can Do</h3>
          <p className="major_tex">
            These are some of the technologies I use: HTML, CSS, SASS,
            Javascript, React, React Native, Git, Node.js, Express.js, SQL ,
            MongoDB,Bootstrap,Semantic UI
          </p>
          <ul className="feature-icons my-t">
            <li className="fab fa-html5 fs-4 fw-bolder">
              <span className="my-t">HTML</span>
            </li>
            <li className="fab fa-bootstrap fs-4 fw-bolder">
              <span className="my-t">Bootstrap</span>
            </li>
            <li className="fab fa-css3 fs-4 fw-bolder">
              <span className="my-t">css</span>
            </li>
            <li className="fab fa-sass fs-4 fw-bolder">
              <span className="my-t">sass</span>
            </li>

            <li className="fab fa-react fs-4 fw-bolder">
              <span className="my-t">React Native</span>
            </li>
            <li className="fab fa-react fs-4 fw-bolder">
              <span className="my-t">React,Redux</span>
            </li>
            <li className="fab fa-node-js fs-4 fw-bolder">
              <span className="my-t">Node.js</span>
            </li>
            <li className="fas fa-database fs-4">
              <span
                style={{ fontWeight: "bolder", fontFamily: "Merriweather" }}
              >
                <span className="my-t">MongoDB , MySQL</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Things;
