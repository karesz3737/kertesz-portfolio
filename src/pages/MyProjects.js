import React from "react";
import { Link } from "react-router-dom";
import DTobj from "../data/data";
import { Card } from "react-bootstrap";

const MyProjects = () => {
  const background = "/images/grey.jpg";

  return (
    <div
      style={{
        height: "100vh",
      }}
      className="conatiner pt-lg-3"
    >
      {DTobj.map((item) => (
        <div
          className="pt-5 mb-4 mb-lg-0 pt-lg-1 mb-lg-2 col-12 col-md-8 col-lg-6 mx-auto pr-0 my-project"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
          }}
          key={item.id}
        >
          <div className="card-cont ">
            <div className="img-cont">
              <img
                src={process.env.PUBLIC_URL + item.titlePhoto}
                className="mr-2 pr-2"
              />
            </div>
            <div className="tech-cont">
              <p className="mt-md-2 mt-lg-3">{item.title}</p>
              <p className="mt-2">{item.description}</p>
              <ul className="d-flex align-items-center justify-content-start justify-content-md-center">
                {item.icon.map((it) => (
                  <li className="icon-images-back">
                    <img src={process.env.PUBLIC_URL + it} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-row pb-3 align-items-center">
            <Link to={`/${item.id}`}>
              <i className="far fa-images icon solid fa-2x icon-project pr-4 mr-md-4 m-lg-1"></i>
            </Link>
            <Link to={`/${item.id}`}>
              <i className="fab fa-github solid fa-2x icon-project pl-5 ml-md-5 m-lg-1"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
