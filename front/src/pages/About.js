import React from "react";
import MainPic from "../components/mainPic.jsx";

const About = () => {
  return (
    <div
      className="accomp_background major_out_cont"
    >
      <p className="major_tex">
        Hi, I'm Karoly Kertesz. <br /> I’m a Budapest, Hungary based developer
        skilled in Javascript and React framework.
        <br />I have a serious passion for creating intuitive, dynamic user
        experiences.
        <br />
        My passion is to use technology based solutions, to help solve real
        world challenges.
        <br />
        When I’m not writing code I love playing with my dog or watch coding
        tutorials.{" "}
      </p>
      <MainPic />
    </div>
  );
};

export default About;
