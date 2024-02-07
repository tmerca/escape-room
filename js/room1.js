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
let eleccionCliente = document.getElementById("eleccionCliente");
let eleccionCPU = document.getElementById("eleccionCPU");
let botonJugar = document.getElementById("botonJugar");
let resultado = document.getElementById("resultado");

const rutaPapel = "../img/paper.png";
const rutaRoca = "../img/rock.png";
const rutaTijeras = "../img/scissors.png";


tableroJuego.addEventListener("click", (e) => {
  if(e.target.id && e.target.id != "tableroJuego"){

    // LA OPCIÓN QUE PULSE SE PONE EN LA OPCION DEL CLIENTE
    if(e.target.id == "papelCliente"){
      eleccionCliente.src = rutaPapel;
    }

    if(e.target.id == "rocaCliente"){
      eleccionCliente.src = rutaRoca;
    }

    if(e.target.id == "tijerasCliente"){
      eleccionCliente.src = rutaTijeras;
    }
  }
})

// OPCION ALEATORIA DEL CPU
botonJugar.addEventListener("click", (e)=> {
  
  if(eleccionCliente.src){

    // botonJugar.style.display = "none";
    var numAleatorio = Math.floor(Math.random() * 3 + 1);

    if(numAleatorio == 1){
      eleccionCPU.src = rutaPapel;
    }else if(numAleatorio == 2){
      eleccionCPU.src = rutaRoca;
    }else {
      eleccionCPU.src = rutaTijeras;
    }

    //COMPROBAMOS AMBAS ELECCIONES

    // SI SACA PAPEL LA CPU
    if(eleccionCPU.src == rutaPapel.value && eleccionCliente.src == rutaPapel.value) {
      console.log("Empate");
      resultado.style.display = "block";
      resultado.innerText = "Empate técnico! Nadie pierde vida!";
    }else if(eleccionCPU.src == rutaPapel && eleccionCliente.src == rutaRoca) {
      console.log("victoria CPU");

      resultado.style.display = "block";
      resultado.innerText = "Gana la CPU, pierdes una vida!"
    }else if(eleccionCPU.src == rutaPapel && eleccionCliente.src == rutaTijeras){
      console.log("derrota CPU");
      resultado.style.display = "block";
      resultado.innerText = "Ganaste el duelo, CPU pierde una vida!"
    }

    // SI SACA ROCA LA CPU
    if(eleccionCPU.src == rutaRoca && eleccionCliente.src == rutaPapel){
      console.log("derrota CPU");

      resultado.style.display = "block";
      resultado.innerText = "Ganaste el duelo, CPU pierde una vida!"
    }else if(eleccionCPU.src == rutaRoca && eleccionCliente.src == rutaRoca){
      console.log("Empate");

      resultado.style.display = "block";
      resultado.innerText = "Empate técnico! Nadie pierde vida!"
    }else if(eleccionCPU.src == rutaRoca && eleccionCliente.src == rutaTijeras){
      console.log("victoria CPU");
      resultado.style.display = "block";
      resultado.innerText = "Gana la CPU, pierdes una vida!"
    }

    if(eleccionCPU.src == rutaTijeras && eleccionCliente.src == rutaPapel){
      console.log("victoria cpu");
      resultado.style.display = "block";
      resultado.innerText = "Gana la CPU, pierdes una vida!"
    }else if(eleccionCPU.src == rutaTijeras && eleccionCliente.src == rutaRoca){
      console.log("derrota CPU");
      resultado.style.display = "block";
      resultado.innerText = "Ganaste el duelo, CPU pierde una vida!"
    }else if(eleccionCPU.src == rutaTijeras && eleccionCliente.src == rutaTijeras){
      console.log("Empate");

      resultado.style.display = "block";
      resultado.innerText = "Empate técnico! Nadie pierde vida!"
    }


  }else{
  }

});
    
