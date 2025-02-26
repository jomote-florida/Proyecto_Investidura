const { Router } = require("express");
const router = Router();

router.get("/", (req,res) =>{
    res.send("Estamos probando el nuevo servidor");
    console.log("Hemos entrado");
})

router.get("/rutaGet", (req, res) =>{
    res.send("Hola mundo, mensaje de prueba numero 1")
})

router.get("/rutaGet2", (req, res) =>{
    console.log("Llega el mensaje a la consola");
    res.send("Hoa mundo, aquí probando las rutas get");
})

router.post("/rutaPost", (req,res) =>{
    console.log("Enviada peticion POST");
    res.send("Datos recibidos de un post");
    console.log(req.body);
    res.json({
        id: "001",
        nombre: req.body.nombre,
        apellido: res.body.apellido,
    });
})

module.exports = router;