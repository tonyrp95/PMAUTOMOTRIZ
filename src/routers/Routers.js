import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Quienessomos from "../pages/Quienessomos";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Nuevos from "../pages/Nuevos";
import NotFound from "../pages/NotFound";
import Contacto from "../pages/Contacto";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Inicio" />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Quienessomos" element={<Quienessomos />} />
      <Route path="/Seminuevos" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/Nuevos" element={<Nuevos />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
