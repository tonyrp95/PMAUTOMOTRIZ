import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

import Testimonial from "../components/UI/Testimonial";



const Inicio = () => {
  return (
    <Helmet title="Inicio">
    {/* ============= hero section =========== */}
    <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            
          </Container>
        </div>
      </section>
      {/* =========== Quienes somos sección ================ */}
      <AboutSection />
      {/* ========== servicios sección ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Nuestros servicios</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== Ofertas sección ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Ofertas</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== testimonios sección =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Lo que nuestros clientes opinan</h6>
              <h2 className="section__title">Testimonios</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      
    </Helmet>
  );
};

export default Inicio;
