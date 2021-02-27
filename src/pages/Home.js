import React from "react";
import MainPic from "../components/mainPic";

const Home = () => {
  return (
    <div>
      <section className="section_text">
        <div className="container">
          <header className="major">
            <h2>WELCOME</h2>
          </header>
          <p className="major_tex">
            I'm Karoly Kertesz i'm a full-stack web developer from
            Budapest,Hungary. <br />I have serious passion for creating
            intuitive, dynamic user experiences.
          </p>
        </div>
        <MainPic />
      </section>
    </div>
  );
};

export default Home;
