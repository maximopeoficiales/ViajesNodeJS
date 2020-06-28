const express = require("express");
const router = express.Router();

/* modelos */
/* controladores */
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajeController = require("../controllers/viajesController");
const testimonialesController = require("../controllers/tesminonialesController");
/* ------------------- */
module.exports = function () {
  router.get("/", homeController.consultasHome);

  router.get("/nosotros", nosotrosController.infoNosotros);
  
  router.get("/viajes",viajeController.mostrarViajes);
  router.get("/viajes/:id",viajeController.mostrarviaje);

  router.get("/testimoniales", testimonialesController.consultasTestimoniales);

  router.post("/testimoniales",testimonialesController.agregarTestimonial);
  return router;
};
