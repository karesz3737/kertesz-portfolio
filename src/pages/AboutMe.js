import React from "react";
import MainPic from "../components/mainPic";

const AboutMe = () => {
 
  return (
    <div>
      <section className="section_text">
        <div className="container">
          <header className="major">
            <h2>WELCOME</h2>
          </header>
          <p className="major_tex">My name is Karoly kertesz I</p>
        </div>
        <MainPic />
      </section>
    </div>
  );
};

export default AboutMe;
