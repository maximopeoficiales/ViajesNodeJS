const Viaje = require("../models/Viajes");
/* findall llama a todos los viajes  */
/* https://sequelize.org/master/manual/model-querying-finders.html */
exports.mostrarViajes = async (req, res) => {
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};
exports.mostrarviaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  res.render("viaje", {
    viaje,
  });
};
