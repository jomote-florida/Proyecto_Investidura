const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("port", process.env.PORT || 8080);


// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));

//Rutas
app.use(require("./routes/routesindex"));
// Iniciar servidor
app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto "+app.get("port"));
})