/* importar Express */
const express = require("express");
const path = require("path");
const routes = require("./routes");
const configs = require("./config");
const db = require("./config/database");
const bodyParser = require("body-parser");


db.authenticate()
  .then(() => console.log("DB conectada"))
  .catch((error) => console.log(error));

/* configurar express */
const app = express();
/* habilitar pug */
app.set("view engine", "pug");
/* Añadir las vistas */
app.set("views", path.join(__dirname, "./views"));

/* cargar una carpeta estatica llamada public */
app.use(express.static("public"));

/* validar si estamos en desarrollo o ne produccion */
const config = configs[app.get("env")];
/* variables del sitio web en general segun el desarrollo */
app.locals.titulo = config.nombresitio;

/* mostrar el año actual */
app.use((req, res, next) => {
  /* obtener el año y enviarlo */
  /* res.locals son las variables globales de node */
  
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta=req.path; //obtengo la ruta actual
  return next();
});

  /* body-parser necesario para la obtencion de datos por post */

app.use(bodyParser.urlencoded({ extended: true }));

/* cargamos las rutas */
app.use("/", routes());

/* puerto y host para la app */
const host=process.env.HOST || "0.0.0.0";
const port=process.env.PORT ||  3000;

app.listen(port,host,()=>{
  console.log("El servidor esta funcionando");
  
}); 
