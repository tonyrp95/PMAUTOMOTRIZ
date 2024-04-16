import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Quienes somos",
  },

  {
    path: "#",
    display: "Politicas de privacidad",
  },

  {
    path: "/cars",
    display: "Seminuevos",
  },
  {
    path: "/Nuevo",
    display: "Nuevos",
  },

  {
    path: "/contact",
    display: "Contacto",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                 
                  <span>
                  </span>
                </Link>
              </h1>
            </div>

            <img width="100" height="100" src="data:image/png;base64,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" />
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Paginas</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contacto</h5>
              <p className="office__info">Damian carmona #500, Guadalajara, Jalisco</p>
              <p className="office__info">Telefono: +52 33 3323 3121</p>

              <p className="office__info">Correo: PMAUTOMOTRIZGDL@gmail.com</p>

              <p className="office__info">Horario: Lunes - Viernes: 10am - 6pm <br/>Sabado: 10am - 3pm </p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                PM AUTOMOTRIZ. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
