import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarouselBottom from "./CarouselBottom";
import DTobj from "../data/data";

export default function ControlledCarousel() {
  const { id } = useParams();
  const background = "/images/waterw.jpg";

  const car = id && DTobj.find((y) => y.id === id);


  return (
    <div className="col-md-8 mx-auto carusel_top">
      <div>
        <Carousel className="mx-auto my-auto carusel_icon" interval={null}>
          {car.caruselPhotos.map((item) => (
            <Carousel.Item>
              <img
                src={process.env.PUBLIC_URL + item}
                className="d-block w-100 img_carusel"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <CarouselBottom id={id} />
    </div>
  );
}
