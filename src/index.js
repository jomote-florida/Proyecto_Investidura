const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.use(require("./routes/routesindex"));

app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto "+app.get("port"));
})


