import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Cliente 1.jpg";
import ava02 from "../../assets/all-images/Cliente 2.jpg";
import ava03 from "../../assets/all-images/Cliente 3.jpg";
import ava04 from "../../assets/all-images/Cliente 4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Excelente atención y excelente servicio, recomiendo ampliamente a mi asesora Sandra reyes ya que gracias a su excelente trabajo y buena disposición me facilito todo.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Francisco Serrano</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Un magnífico servicio, excelente trato, excelente atención y sobre todo excelente apoyo. Los vendedores super amables, pendientes y serviciales, sobre todo quien nos atendió personalmente GABY LOPEZ, que hizo lo posible y mucho más para que tuviéramos nuestro coche. Quedamos encantados y super agradecidos con ella, porque además me dio un detalle por la compra que me encantó. Recomiendo ampliamente PM Automotriz!!!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Victor Ramirez</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Para pasar a recomendar el buen servicio una atención excelente te resuelven todas tus dudas y además te dan opciones magnífico servicio de la señorita ESTRELLA 100% recomendable autos PM Automotriz
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jesus Lopez</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Fui en búsqueda de un vehículo pequeño, pero al ver las opciones me decidí comprar un vehículo mas completo, los asesores se desviven por atenderte, y el seguimiento es constante, muy satisfecho por el servicio.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Alejandra Martinez</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
