// POPUP DE LAS INSTRUCCIONES

function popup() {
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

}
popup();


// CÓDIGO DEL JUEGO
let numeroAAdivinar = Math.floor(Math.random()* 100) + 1;
console.log(numeroAAdivinar);
let mensajes = document.getElementById("mensajes");
let enviarNumero = document.getElementById("enviarNumero");
let numeroValido = false;

enviarNumero.addEventListener("click", function(){

  let numCliente = document.getElementById("numCliente").value;  

  requisitosNumero(numCliente);

  comprobarNumero(numCliente);

});

function vaciarCampos() {

  document.getElementById("numCliente").style.visibility = "hidden";

  setTimeout(() => {
    mensajes.innerText = "";
    document.getElementById("numCliente").value = "";
    document.getElementById("numCliente").style.visibility = "visible";
  }, 3000);

}

function requisitosNumero(numero) {

  let pattern = /[^0-9]/;

  if(numero > 100 || numero < 1){
    mensajes.innerText = "Ingresa un número entre 1 y 100";
    numeroValido = false;
    vaciarCampos();
  } else {
    numeroValido = true;
    vaciarCampos();
  }

  if(pattern.test(numero)) {
    mensajes.innerText = "Ingresa datos de valor numérico!";
    vaciarCampos();
    numeroValido = false;
  } else {
    mensajes.innerText = "";
    numeroValido = true;
  }

}

function comprobarNumero(numero) {

  let resultadoOperacion;

  if(numero > numeroAAdivinar) {
    resultadoOperacion = numero - numeroAAdivinar;

    if(resultadoOperacion > 10){
      mensajes.innerText = "El número a adivinar es mucho menor";
      vaciarCampos();
    } else if(resultadoOperacion < 11 && resultadoOperacion > 0) {
      mensajes.innerText = "El número a adivinar es un poco menor";
      vaciarCampos();
    }

  }

  if(numero < numeroAAdivinar) {
    resultadoOperacion = numeroAAdivinar - numero;

    if(resultadoOperacion > 10) {
      mensajes.innerText = "El número a adivinar es mucho mayor";
      vaciarCampos();
    } else if(resultadoOperacion < 11 && resultadoOperacion > 0) {
      mensajes.innerText = "El número a adivinar es un poco mayor";
      vaciarCampos();
    }

  }


}