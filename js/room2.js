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


// CÓDIGO DEL JUEGO
let numeroAAdivinar = Math.floor(Math.random()* 100) + 1;
console.log(numeroAAdivinar);
let mensajes = document.getElementById("mensajes");
let enviarNumero = document.getElementById("enviarNumero");

enviarNumero.addEventListener("click", function(){

  let numCliente = document.getElementById("numCliente").value;  

  validarNumero(numCliente)

});


function validarNumero(numero) {

  let pattern = /[^0-9]/;

  if(numero > 100 || numero < 1){
    mensajes.innerText = "Ingresa un número entre el 1 y el 100";
  }



}
