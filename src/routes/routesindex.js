const { Router } = require("express");
const router = Router();



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
    res.redirect("http://127.0.0.1:5500/src/front/roshar2.html");
})

module.exports = router;