import React, { useEffect, useState } from "react";

const Things = () => {
  const backgroundI = "/images/wallpi.jpg";
  const [back, setBack] = useState(null);
  useEffect(() => {
    setBack(backgroundI);
  }, [back]);
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + back})`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
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
