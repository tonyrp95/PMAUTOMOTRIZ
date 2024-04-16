import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Quienes somos</h4>
              <h2 className="section__title">Bienvenido a PM Automotriz</h2>
              <p className="section__description">
              Somos una empresa que busca atraer a todas las personas interesadas en comprar o vender automóviles, motocicletas, camiones o cualquier tipo de vehículo, ofreciendo una cartera de servicios que constantemente se expande y diversifica Esto nos permite crecer conforme a las necesidades cambiantes de nuestros clientes: particulares, lotes, concesionarios y marcas para brindarles asistencia durante cada paso del proceso y ayudarlos a impulsar la compra-venta de autos. Dentro de los servicios que ofrecemos destacan, la compra y venta de seminuevos, vehículos nuevos multimarca y pólizas de seguros..
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Venta de seminuevos
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Compra de seminuevos
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Venta de Autos nuevos
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Detallado Automotriz
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
