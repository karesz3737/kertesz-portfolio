import React from "react";
import MainPic from "../components/mainPic";

const Home = () => {
  const background = "/images/laptop.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        height: "110vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
      }}
    >
      <section className="section_text">
        <div className="container">
          {/* <header className="major fixed">
            <h2>WELCOME</h2>
          </header> */}
          {/* <blockquote>
            <p className="main_tex_main">
              “Creativity is just connecting things.”
              <br />― Steve Jobs
            </p>
          </blockquote> */}
        </div>
        {/* <MainPic /> */}
      </section>
    </div>
  );
};

export default Home;
