// import all images from assets/images directory
import img01 from "../all-images/cars-img/chevy 2011.jpg";
import img02 from "../all-images/cars-img/Sierra 2016.jpg";
import img03 from "../all-images/cars-img/Beetle 2017.jpg";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

import img09 from "../all-images/cars-img/chevy 2011.jpg";

const carData = [
  {
    id: 1,
    brand: "Chevrolet",
    rating: 112,
    carName: "CHEVY MONZA",
    imgUrl: img01,
    model: "2011",
    price: "89,000",
    speed: "120,000 KM",
    gps: "N/A",
    seatType: "A/C",
    automatic: "Manual",
    description:
      "Para mayor información, Contactanos!",
  },

  {
    id: 2,
    brand: "GMC",
    rating: 102,
    carName: "SIERRA ALL TERRAIN 4X4 CABINA Y MEDIA ",
    imgUrl: img02,
    model: "2016",
    price: "580,000",
    speed: "60,000 KM",
    gps: "GPS ",
    seatType: "4 Puertas",
    automatic: "Automatica",
    description:
      "",
  },

  {
    id: 3,
    brand: "Volkswagen",
    rating: 132,
    carName: "BEETLE SPORTLINE 2017 ESTÁNDAR",
    imgUrl: img03,
    model: "2017",
    price: "289,000",
    speed: "45,000 KM",
    gps: "GPS",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "",
  },

  
];

export default carData;
