import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contacto.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/pmautomotrizgdl",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contacto">
      <CommonSection title="Contacto" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Contactanos</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nombre" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Telefono" type="number" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Correo" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Cuentanos, en que podemos ayudarte?"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                 Enviar mensaje
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de contacto</h6>
                <h6 className="fs-6 mb-0">Ubicación</h6>
                <p className="section__description mb-0">
                Damian carmona #500, Guadalajara, Jalisco
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefono:</h6>
                  <p className="section__description mb-0">+52 33 3323 3121</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">PMAUTOMOTRIZGDL@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Nuestras redes sociales</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
