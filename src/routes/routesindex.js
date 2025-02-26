const { Router } = require("express");
const router = Router();

router.get("/", (req,res) =>{
    res.send("Estamos probando el nuevo servidor");
    console.log("Hemos entrado");
})

router.get("/rutaGet", (req, res) =>{
    res.send("Hola mundo, mensaje de prueba numero 1")
})

router.get("/formularioEnviado", (req, res) =>{
    console.log("Datos recibidos");
    res.send("Datos llevados al backend");
})

router.get("/rutaGet2", (req, res) =>{
    console.log("Llega el mensaje a la consola");
    res.send("Hoa mundo, aquí probando las rutas get");
})

router.post("/rutaPost", (req,res) =>{
    console.log("Enviada peticion POST");
    // res.send("Datos recibidos de un post<br>");
    console.log(req.body);
    res.json({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        investidura: req.body.investidura,
        libroLeido : req.body.comprobacion,
        contraseña : "****",

    });
})

module.exports = router;