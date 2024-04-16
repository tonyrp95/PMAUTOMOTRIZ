import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Hacemos tu sueño realidad</h4>
            <h1 className="text-light mb-4">Enganche desde el 10%</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Encuentra el auto de tus sueños</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-3">Hacemos tu sueño realidad</h4>
            <h1 className="text-light mb-4">Enganche desde el 10%</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Encuentra el auto de tus sueños</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-3">Hacemos tu sueño realidad</h4>
            <h1 className="text-light mb-4">Enganche desde el 10%</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/Seminuevos">Encuentra el auto de tus sueños</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
