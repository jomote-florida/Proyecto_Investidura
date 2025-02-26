const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

app.use(require("./routes/routesindex"));
app.use(morgan("dev"));

app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto "+app.get("port"));
})


