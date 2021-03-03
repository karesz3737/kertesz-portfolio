import React, { useEffect, useState } from "react";
const Home = () => {
  const backgroundI = "/images/laptop.jpg";
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
