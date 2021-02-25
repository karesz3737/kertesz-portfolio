import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarouselBottom from "./CarouselBottom";
import DTobj from "../data/data";

export default function ControlledCarousel() {
  const { id } = useParams();
  console.log(typeof id);
  const background = "/images/waterw.jpg";

  const car = id && DTobj.find((y) => y.id === id);
  console.log(car);

  return (
    <div className="d-flex row col-12 flex-column flex-lg-row">
      <div className="ml-lg-4 my-4 float-lg-left mx-auto py-0" id="hy">
        <Carousel className="mx-auto" interval={null}>
          {car.caruselPhotos.map((item) => (
            <Carousel.Item>
              <img
                src={process.env.PUBLIC_URL + item}
                className="d-block w-100"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <CarouselBottom id={id} />
      </div>
    </div>
  );
}
