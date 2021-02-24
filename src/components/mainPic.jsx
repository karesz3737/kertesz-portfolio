import React from "react";

const mainPic = () => {
  return (
    <div>
      <section className="header_main">
        <div className="image_inner">
          <img src={`${process.env.PUBLIC_URL}/images/kerteszkaroly.jpg`} />
        </div>
        <div className="head_left">
          <blockquote>
            <p>
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
