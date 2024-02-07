// POPUP DE LAS INSTRUCCIONES
const boton = document.getElementById("btn-popup");
const envoltorio = document.querySelector(".envoltorio-popup");
const cerrar = document.querySelector(".cerrar-popup");

boton.addEventListener("click", () => {
  envoltorio.style.display = "block";
});

// Segundo evento -> Click sobre el botón para cerrar el pop-up
cerrar.addEventListener("click", () => {
  envoltorio.style.display = "none";
});

// Tercer evento -> Click sobre el envoltorio = cerrar el popup
envoltorio.addEventListener("click", () => {
  envoltorio.style.display = "none";
});

// EVENTO PARA ELEJIR ENTRE LAS TRES OPCIONES

let tableroJuego = document.getElementById("tableroJuego");

tableroJuego.addEventListener("click", (e) => {
  if(e.target.id && e.target.id != "tableroJuego"){
    console.log(e.target.id);
  }
})