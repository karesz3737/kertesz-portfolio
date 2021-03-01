import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarouselBottom from "./CarouselBottom";
import DTobj from "../data/data";

export default function ControlledCarousel() {
  const { id } = useParams();

  const car = id && DTobj.find((y) => y.id === id);
  const type = car.type === "mobile" ? "img_carusel" : "img_carusel_web";
  const car_ic = car.type === "mobile" ? "carusel_icon" : "carusel_icon_web";

  return (
    <div className="accomp_background">
      <div className="col-md-8 carusel_top">
        <div>
          <Carousel className={car_ic} interval={null}>
            {car.caruselPhotos.map((item) => (
              <Carousel.Item>
                <img src={process.env.PUBLIC_URL + item} className={type} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <CarouselBottom id={id} />
      </div>
    </div>
  );
}
