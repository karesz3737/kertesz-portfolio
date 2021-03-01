import React from "react";
// import "../../public/images/KerteszKaroly.jpg"

const mainPic = () => {
  const background = "../../public/images/KerteszKaroly.jpg";
  // style={{ backgroundImage: `url(${process.env.PUBLIC_URL + background})` }}

  return (
    <div className="container-fluid">
      <section className="header_main">
        <div className="image_inner">
          <img
            src={`${process.env.PUBLIC_URL}/images/kerteszkaroly.jpg`}
            alt="kertesz"
          />
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
      //{" "}
    </div>
  );
};

export default mainPic;
