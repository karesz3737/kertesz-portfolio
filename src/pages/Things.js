import React from "react";

const Things = () => {
  return (
    <div className="main">
      <section id="two">
        <div className="container">
          <h3>Things I Can Do</h3>
          <p className="major_tex">
            Integer eu ante ornare amet commetus vestibulum blandit integer in
            curae ac faucibus integer non. Adipiscing cubilia elementum integer
            lorem ipsum dolor sit amet.
          </p>
          <ul className="feature-icons">
            <li className="fab fa-html5">HTML</li>
            <li className="fab fa-bootstrap">Bootstrap</li>
            <li className="fab fa-css3">CSS</li>
            <li className="fab fa-sass">Sass</li>

            <li className="fab fa-react">React Native</li>
            <li className="fab fa-react">React, Redux</li>
            <li className="fab fa-node-js">Node js</li>
            <li className="fas fa-database">
              <span style={{ fontWeight: "normal" }}>MongoDB , MySQL</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Things;
