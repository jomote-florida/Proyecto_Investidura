const { Router } = require("express");
const router = Router();

router.get("/rutaGetPruebaUnity", (req,res) =>{
    console.log("Entrada a ruta Get");
    res.send("Hola desde el get de prueba para Unity");
})

router.post("/rutaPost", (req,res) =>{//Esta ruta nos mostrará en consola los datos recibidos por el formulario
    console.log("Enviada peticion POST");
    console.log(req.body);
    res.json({//Y le mostrará al usuario un archivo json con la información introducida
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        investidura: req.body.investidura,
        libroLeido : req.body.radio,
        contraseña : "****",//Menos la contraseña que se pondrá con asteriscos

    });
})

router.post("/informacionFormulario", (req, res) => {
    console.log("Enviada petición Post");//Esta en cambio lo que manda es al usuario a otra pagina web, pero si muestra en consola los datos introducidos
    console.log(req.body);
    res.redirect("https://jomote-florida.github.io/Proyecto_Investidura_Frontend/roshar2.html");
})

module.exports = router;