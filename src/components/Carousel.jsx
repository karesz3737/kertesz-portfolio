import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function ControlledCarousel() {
  return (
    <div className="mx-auto my-0" style={{ width: "350px" }}>
      <Carousel className=" my-carousel bg-primary" interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={`${process.env.PUBLIC_URL}/Restauran-app-screens/Main.png`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="text-dark">
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/Restauran-app-screens/android/DetailS.png`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/Restauran-app-screens/category.png`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
