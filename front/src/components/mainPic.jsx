import React from "react";
const mainPic = () => {
  const image = "/images/laptop.jpg";
  return (
    <div className="container-fluid ">
      <section className="header_main ">
        <div className="image_inner main_pic_cont">
          <img src={process.env.PUBLIC_URL + image} alt="kertesz" />
        </div>
        <div className="head_left">
          <blockquote>
            <p className="main_tex_main">
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
