const buttonGETLocal = document.getElementById("getButtonLocal");
const buttonPOSTLocal = document.getElementById("postButtonLocal");

buttonGETLocal.addEventListener("click", () =>{
    console.log("Boton get clickado");
    fetch("http://localhost:8080/formularioEnviado")
    .then((data) =>{
        return data.json();
    })
    .then((json) =>{
        console.log(json);
    })
})

buttonPOSTLocal.addEventListener("click", () =>{
    fetch("http://localhost:8080/rutaPost", {
        method: "POST",
        headers : {
            Accept : "application/json",
            "Content-Type":"application/json",
        },
        body : JSON.stringify({ usuario: "usuarioNODE", pass: 8888 }),
    })
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        console.log(json);
    })
});