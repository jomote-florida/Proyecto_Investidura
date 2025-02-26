const { Router } = require("express");
const router = Router();



router.post("/rutaPost", (req,res) =>{
    console.log("Enviada peticion POST");
    // res.send("Datos recibidos de un post<br>");
    console.log(req.body);
    res.json({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        investidura: req.body.investidura,
        libroLeido : req.body.radio,
        contraseña : "****",

    });
})

router.post("/informacionFormulario", (req, res) => {
    console.log("Enviada petición Post");
    console.log(req.body);
    res.redirect("http://127.0.0.1:5500/src/front/roshar2.html");
})

module.exports = router;