import React from "react";
import DTobj from "../data/data";

const CarouselBottom = ({ id }) => {
  const car = id && DTobj.find((y) => y.id === id);
  return (
    <div className="mx-auto mb-2 pb-2">
      <div>
        <ul className="icon_image_cont mb-2 pb-2">
          {car.icon.map((item) => (
            <li>
              <img src={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselBottom;
