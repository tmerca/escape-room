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

//VARIABLES
let numeroAAdivinar = Math.floor(Math.random() * 100) + 1;
let mensajes = document.getElementById("mensajes");
let enviarNumero = document.getElementById("enviarNumero");
let listaIntentos = document.getElementById("listaIntentos");
let numeroValido = true;
let numerosCliente = [];

// CONSOLE LOG PARA SABER QUE NUMERO A GENERADO
console.log(numeroAAdivinar);

enviarNumero.addEventListener("click", function () {
  let numCliente = document.getElementById("numCliente").value;

  requisitosNumero(numCliente);

  if (numeroValido) {
    comprobarNumero(numCliente);
    if (numCliente != numeroAAdivinar) {
      listaIntentos.innerHTML += "<li>" + numCliente + ", </li>";
    }
  }
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

  if (pattern.test(numero) || numero > 100 || numero < 1) {
    mensajes.innerText = "Ingresa un dato de valor numérico válido!";
    vaciarCampos();
    numeroValido = false;
  } else {
    mensajes.innerText = "";
    numeroValido = true;
  }
}

function comprobarNumero(numero) {
  let resultadoOperacion;

  if (numero > numeroAAdivinar) {
    resultadoOperacion = numero - numeroAAdivinar;

    if (resultadoOperacion > 10) {
      mensajes.classList.add("incorrecto")
      mensajes.innerText = "El número a adivinar es mucho menor";
      vaciarCampos();
    } else if (resultadoOperacion < 11 && resultadoOperacion > 0) {
      mensajes.classList.add("incorrecto")
      mensajes.innerText = "El número a adivinar es un poco menor";
      vaciarCampos();
    }
  } else if (numero < numeroAAdivinar) {
    resultadoOperacion = numeroAAdivinar - numero;

    if (resultadoOperacion > 10) {
      mensajes.classList.add("incorrecto")
      mensajes.innerText = "El número a adivinar es mucho mayor";
      vaciarCampos();
    } else if (resultadoOperacion < 11 && resultadoOperacion > 0) {
      mensajes.classList.add("incorrecto")
      mensajes.innerText = "El número a adivinar es un poco mayor";
      vaciarCampos();
    }
  } else {
    listaIntentos.innerHTML = "";
    mensajes.classList.add("correcto")
    mensajes.innerText =
      "Enhorabuena, has ganado! Redirigiéndote a la última sala...";
  }
}
