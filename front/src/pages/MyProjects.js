import React, { useState, useEffect } from "react";
import DTobj from "../data/data";
import Info from "../components/Info.jsx";
import ItemTitle from "../components/ItemTitle.jsx";
const MyProjects = () => {
  const backgroundI = "/images/wallpi.jpg";
  const [back, setBack] = useState(null);
  useEffect(() => {
    setBack(backgroundI);
  }, [back]);
  return (
    <div
      className="col-12"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + back})`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(20%)",
        float: "left",
      }}
    >
      <div className="row my-3">
        <ul className="mobil_u">
          {DTobj.filter((i) => i.type === "mobile").map((item, indx) => (
            <li key={indx} className="img_cont_mob">
              <div className="ddd">
                <ItemTitle title={item.title} />
                <img
                  src={process.env.PUBLIC_URL + item.rdimage}
                  alt="mobil-or-web"
                />
                <Info id={item.id} type={item.type} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="row">
        <ul className="mobil_u">
          {DTobj.filter((i) => i.type === "web").map((item, indx) => (
            <div className="ddd">
              <li key={indx} className="img_cont_web">
                <ItemTitle title={item.title} />

                <img
                  src={process.env.PUBLIC_URL + item.rdimage}
                  alt="mobile-or-web"
                />
                <Info id={item.id} type={item.type} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProjects;
