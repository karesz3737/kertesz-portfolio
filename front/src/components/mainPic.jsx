import React from "react";
import { image } from "../data/data";
const mainPic = () => {
  return (
    <div className="container-fluid main-p">
      <section className="header_main ">
        <div className="image_inner main_pic_cont">
          <img src={`${image}`} alt="kertesz" />
        </div>
        <div className="head_left">
          <blockquote>
            <p className="main_tex_main text-dark">
              “Creativity is just connecting things.”
              <br />― Steve Jobs
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default mainPic;
