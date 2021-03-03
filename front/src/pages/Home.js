import React from "react";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_960_720.jpg")`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(40%)",
      }}
    >
      <section className="section_text">
        <div className="container">
          <header className="major">
            <h3>
              Hi, My name is Karoly I am a web developer based in Budapest
            </h3>
          </header>
        </div>
      </section>
    </div>
  );
};

export default Home;
