import React from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className="main">
      <section id="three">
        <div className="container">
          <h3>My Projects</h3>
          <p>
            Integer eu ante ornare amet commetus vestibulum blandit integer in
            curae ac faucibus integer non. Adipiscing cubilia elementum integer.
            Integer eu ante ornare amet commetus.
          </p>
          <div className="features">
            <article>
              <Link class="image" to="/item">
                <img
                  src={`${process.env.PUBLIC_URL}/Restauran-app-screens/Main.png`}
                  alt="RestaurantApp MainScreen"
                />
              </Link>
              <div className="inner-div">
                <ul>
                  <a href="#">
                    <li>
                      <span className="fab fa-github fa-3x"></span>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <div className="img-inn"></div>
                    </li>
                  </a>
                </ul>
              </div>
              <div className="inner">
                <h4>Possibly broke spacetime</h4>
                <p>Technologies used:</p>
                <div classname="technologies">
                  <ul>
                    <li className="tech-items react"></li>
                    <li className="tech-items react-native"></li>
                    <li className="tech-items redux"></li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <a className="image">
                <img src={`${process.env.PUBLIC_URL}/Flascards/DEck.png`} />
              </a>
              <a className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/Flascards/android/Qustions.png`}
                />
              </a>
              <a className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/Flascards/android/DEck.png`}
                />
              </a>
              <div className="inner-div">
                <ul>
                  <a href="#">
                    <li>
                      <span className="fab fa-github fa-3x"></span>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <div className="img-inn"></div>
                    </li>
                  </a>
                </ul>
              </div>
              <div className="inner">
                <h4>Terraformed a small moon</h4>
                <p>Technologies used:</p>
                <div className="technologies">
                  <ul>
                    <li className="tech-items react"></li>
                    <li className="tech-items react-native"></li>
                    <li className="tech-items redux"></li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <a href="#" className="image">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <div className="inner">
                <h4>Snapped dark matter in the wild</h4>
                <p>
                  Integer eu ante ornare amet commetus vestibulum blandit
                  integer in curae ac faucibus integer adipiscing ornare amet.
                </p>
                <div className="technologies">
                  <ul>
                    <li className="tech-items react"></li>
                    <li className="tech-items redux"></li>
                  </ul>
                </div>
              </div>
              <div className="inner-div">
                <ul>
                  <a href="#">
                    <li>
                      <span className="fab fa-github fa-3x"></span>
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <div className="img-inn"></div>
                    </li>
                  </a>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
