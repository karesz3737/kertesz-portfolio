import React from "react";
import DTobj from "../data/data";

const CarouselBottom = ({ id }) => {
  const car = id && DTobj.find((y) => y.id === id);
  const background = "/images/white.jpg";
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3 bg-top-bb py-1 mx-auto">
        <span>{car.title}</span>
        <span>{car.description}</span>
      </div>
    </div>
  );
};

export default CarouselBottom;
