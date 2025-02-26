const express = require("express");
const app = express();
const morgan = require("morgan");


app.set("port", process.env.PORT || 8080);

app.use(require("./routes/routesindex"));
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));

app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto "+app.get("port"));
})


// const buttonGETLocal = document.getElementById("getButtonLocal");
// const buttonPOSTLocal = document.getElementById("postButtonLocal");

// buttonGETLocal.addEventListener("click", () =>{
//     console.log("Boton get clickado");
//     fetch("http://localhost:8080/rutaGet")
//     .then((data) =>{
//         return data.json();
//     })
//     .then((json) =>{
//         console.log(json);
//     })
// })

// buttonPOSTLocal,addEventListener("click", () =>{
//     fetch("http://localhost:8080/rutaPost", {
//         method: "POST",
//         headers : {
//             Accept : "application/json",
//             "Content-Type":"application/json",
//         },
//         body : JSON.stringify({ usuario: "usuarioNODE", pass: 8888 }),
//     })
//     .then((data) => {
//         return data.json();
//     })
//     .then((json) => {
//         console.log(json);
//     })
// });