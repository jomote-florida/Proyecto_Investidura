const { Router } = require("express");
const router = Router();

router.get("/rutaGet", (req, res) =>{
    res.send("Hola mundo, mensaje de prueba numero 1")
})

router.get("/rutaGet2", (req, res) =>{
    console.log("Llega el mensaje a la consola");
    res.send("Hoa mundo, aquí probando las rutas get");
})

module.exports = router;