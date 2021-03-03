import React from "react";
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
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/30/09/07/pattern-2696389_960_720.jpg")`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "sepia(15%)",
        position: "fixed",
      }}
    >
      <div className="col-md-8 carusel_top">
        <div>
          <Carousel className={car_ic} interval={null}>
            {car.caruselPhotos.map((item) => (
              <Carousel.Item>
                <img
                  src={process.env.PUBLIC_URL + item}
                  className={type}
                  alt="carousel-item"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <CarouselBottom id={id} />
      </div>
    </div>
  );
}
