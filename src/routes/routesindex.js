const { Router } = require("express");
const router = Router();

//Rutas get
router.get("/rutaGetPruebaUnity", (req,res) =>{
    console.log("Entrada a ruta Get");
    res.send("Hola desde el get de prueba para Unity");
})

router.get("/otraRutaGet", (req,res)=>{
    console.log("Otra entrada a get exitosa");
    res.send("Le vas cogiendo el tranquilo a las conexiones estas");
})

router.get("/terceraRuta", (req,res)=>{
    console.log("Exitoooo");
    res.send("Puedes observar que la cosa sigue");
})

router.get("/laOlvidada", (req,res)=>{
    console.log("De aquí a montar aplicaciones");
    res.send("Ya solo faltaría aprender a...");
})

router.get("/ultimate", (req,res) =>{
    console.log("Pronto en los mejores cines");
    res.send("... que el texto apareciera en pantalla en vez en consola");
})

//Rutas POST
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

router.post("/rutaPost3", (req, res) => {
    console.log("Seguimos avanzando en proyecto");
    req.body="Hola";
    console.log(req.body);
    res.send("Has entrado en el post");
})

router.post("/yOtroMas", (req, res) => {
    console.log("Si tu quisieras");
    console.log(req.body);
    res.send("Estarias en pijama");
})

router.post("/yaLaUltima", (req, res) => {
    console.log("SACABO");
    console.log(req.body);
    res.send("La verdad es que no recuerdo porque ponía req.body");
})

module.exports = router;