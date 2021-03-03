import React, { useEffect, useState } from "react";
import MainPic from "../components/mainPic.jsx";

const About = () => {
  const backgroundI = "/images/wallpi.jpg";
  const [back, setBack] = useState(null);
  useEffect(() => {
    setBack(backgroundI);
  }, [back]);
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + back})`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
      }}
      className=" major_out_cont"
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
