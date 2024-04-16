import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";


import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const Quienessomos = () => {
  return (
    <Helmet title="Quienes somos">
      <CommonSection title="Quienes somos" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                ¡Somos tu mejor opción!
                </h2>

                <p className="section__description">
                Hemos pensado en todas las necesidades que nuestros clientes exigen y hemos creado estrategias puntuales para satisfacer cada uno de tus requerimientos; nos hemos posicionado como la mejor opción para ti como a la compra o venta de unidades automotrices seminuevas y nuevas.
                </p>

                

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Comunicate con nosotros</h6>
                    <h4>+52 33 3323 3121</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Expertos</h6>
              <h2 className="section__title">Nuestros Asesores</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Quienessomos;
