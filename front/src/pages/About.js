import React from "react";
import MainPic from "../components/mainPic.jsx";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/01/27/16/17/winter-3958406_960_720.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
        position: "fixed",
      }}
      className=" major_out_cont"
    >
      <p className="mmmm">
        Hi, I'm Karoly Kertesz. <br /> I’m a Budapest, Hungary based developer
        skilled in Javascript and React framework.
        <br />I have a serious passion for creating intuitive, dynamic user
        experiences.
        <br />
        My passion is to use technology based solutions, to help solve real
        world challenges.
        <br />
        When I’m not writing code I love playing with my dog or watch coding
        tutorials.
      </p>

      <MainPic />
    </div>
  );
};

export default About;
