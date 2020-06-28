const Testimonial = require("../models/Testimoniales");
exports.consultasTestimoniales = async (req, res) => {
  const testimoniales=await Testimonial.findAll() //obtengo los testimoniales
      res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales,
      });
    
};
exports.agregarTestimonial = async (req, res) => {
  /* USANDO DESTRUCTOR */
  let { nombre, correo, mensaje } = req.body;
  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "ingresa tu nombre" });
  }
  if (!correo) {
    errores.push({ mensaje: "Ingresa tu correo" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Ingresa tu mensaje" });
  }
  if (errores.length > 0) {
    /* muestra vista con errores */
    /* carga la vista testimoniales y le mando los valores */
    const testimoniales= await Testimonial.findAll()
    res.render("testimoniales", {
      errores,
      nombre,
      correo,
      mensaje,
      pagina: "Testimoniales",
      testimoniales
    });
  } else {
    /* procede a guardar los datos */
    Testimonial.create({
      nombre,
      correo,
      mensaje,
    })
      .then((testimonial) => res.redirect("/testimoniales")) //guardado exitoso
      .catch((error) => console.log(error));
  }
};
