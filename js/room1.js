let welcome = JSON.parse(sessionStorage.getItem("usuarios"));
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

// COMPROBAMOS QUE HAYA SESION INICIADA
if (!welcome) {
  document.getElementById("juego").style.display = "none";
  console.log("No ha podido ser");
} else {

  document.getElementById("noInicioSesion").style.display = "none";
  
  // CREAMOS EL CRONOMETRO
  const horaDiv = document.getElementById("lahora");
  
  // Inicializa el cronómetro
  let segundos = 0;
  let minutos = 0;
  let horas = 0;

  // ACTUALIZAMOS CRONOMETRO
  function actualizarCronometro() {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;

      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }

    // Formateamos los números para que siempre tengan dos dígitos
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const horasFormateadas = horas < 10 ? `0${horas}` : horas;

    // Actualiza el contenido del div con el tiempo transcurrido
    horaDiv.innerText = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
  }

  actualizarCronometro();

  // Función para iniciar el cronómetro
  function iniciarCronometro() {
    intervaloCronometro = setInterval(actualizarCronometro, 1000);
  }

  iniciarCronometro();

  // Función para detener el cronómetro
  function detenerCronometro() {
    clearInterval(intervaloCronometro);
  }


  /* POPUP DE LAS INSTRUCCIONES */
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

  // VARIABLES
  let tableroJuego = document.getElementById("tableroJuego");
  let eleccionCliente = document.getElementById("eleccionCliente");
  let eleccionCPU = document.getElementById("eleccionCPU");
  let botonJugar = document.getElementById("botonJugar");
  let resultado = document.getElementById("resultado");
  let vidasCliente = document.getElementById("vidasCliente");
  let vidasCPU = document.getElementById("vidasCPU");
  let papelCliente = document.getElementById("papelCliente");
  let rocaCliente = document.getElementById("rocaCliente");
  let tijerasCliente = document.getElementById("tijerasCliente");
  let papelCPU = document.getElementById("papelCPU");
  let rocaCPU = document.getElementById("rocaCPU");
  let tijerasCPU = document.getElementById("tijerasCPU");
  let sumarVida = document.getElementById("sumarVida");
  let puntuacionPorGanar = 1;

  /* EVENTO PARA CUANDO QUIERA SUMAR VIDA */
  sumarVida.addEventListener('click', (e) => {

    sumarVida.style.display = "none";

    let vidas = parseInt(vidasCliente.innerText);
    vidas += 1;

    vidasCliente.innerText = vidas;

    puntuacionPorGanar = 0.5;

 })


  /* EVENTO PARA ELEJIR ENTRE LAS TRES OPCIONES */
  tableroJuego.addEventListener("click", (e) => {

    if (e.target.id && e.target.id != "tableroJuego") {
      // LA OPCIÓN QUE PULSE SE PONE EN LA OPCION DEL CLIENTE
      if (e.target.id == "papelCliente") {
        eleccionCliente.src = e.target.src;
      }

      if (e.target.id == "rocaCliente") {
        eleccionCliente.src = e.target.src;
      }

      if (e.target.id == "tijerasCliente") {
        eleccionCliente.src = e.target.src;
      }
    }
  });

  // OPCION ALEATORIA DEL CPU
  botonJugar.addEventListener("click", (e) => {
    // ESCONDEMOS LAS OPCIONES PARA EVITAR ERRORES
    papelCliente.style.display = "none";
    rocaCliente.style.display = "none";
    tijerasCliente.style.display = "none";

    papelCPU.style.display = "none";
    rocaCPU.style.display = "none";
    tijerasCPU.style.display = "none";

    if (eleccionCliente.src != "") {

      botonJugar.style.display = "none";
      var numAleatorio = Math.floor(Math.random() * 3 + 1);
      if (numAleatorio == 1) {
        eleccionCPU.src = "../img/paper.png";
      } else if (numAleatorio == 2) {
        eleccionCPU.src = "../img/rock.png";
      } else {
        eleccionCPU.src = "../img/scissors.png";
      }

      //COMPROBAMOS AMBAS ELECCIONES

      // CPU SACA PAPEL
      if (eleccionCPU.src.endsWith("paper.png") && eleccionCliente.src.endsWith("paper.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
      } else if (eleccionCPU.src.endsWith("paper.png") &&eleccionCliente.src.endsWith("rock.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
      } else if (eleccionCPU.src.endsWith("paper.png") && eleccionCliente.src.endsWith("scissors.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -= 1;
      }

      // CPU SACA PIEDRA
      if (eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("paper.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -= 1;
      } else if (eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("rock.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
      } else if (eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("scissors.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
      }

      //CPU SACA TIJERAS
      if (eleccionCPU.src.endsWith("scissors.png") && eleccionCliente.src.endsWith("paper.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
      } else if (eleccionCPU.src.endsWith("scissors.png") && eleccionCliente.src.endsWith("rock.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -= 1;
      } else if (eleccionCPU.src.endsWith("scissors.png") &&eleccionCliente.src.endsWith("scissors.png")) {
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
      }

      resultadoFinal();
    } else {
      resultado.innerText = "Elije primero una opción para empezar el duelo";

      setTimeout(() => {
        resultado.innerText = "";
      }, 2000);

      papelCliente.style.display = "block";
      rocaCliente.style.display = "block";
      tijerasCliente.style.display = "block";

      papelCPU.style.display = "block";
      rocaCPU.style.display = "block";
      tijerasCPU.style.display = "block";
    }
  });

  function temporizadorParaJugar() {
    setTimeout(() => {
      // VOLVEMOS A PONER EL BOTON JUGAR Y ESCONDEMOS EL MENSAJE DEL RESULTADO ANTERIOR
      botonJugar.style.display = "block";
      resultado.style.display = "none";

      // VACIAMOS LAS IMAGENES
      eleccionCPU.src = "";
      eleccionCliente.src = "";

      // ENSEÑAMOS LAS OPCIONES DEL CLIENTE Y CPU PARA OTRA VEZ
      papelCliente.style.display = "block";
      rocaCliente.style.display = "block";
      tijerasCliente.style.display = "block";

      papelCPU.style.display = "block";
      rocaCPU.style.display = "block";
      tijerasCPU.style.display = "block";
    }, 3000);
  }

  function resultadoFinal() {
    // Escondemos el boton de jugar
    botonJugar.style.display = "None";

    // Comprobamos quien pierde todas las vidas antes
    if (vidasCliente.innerText == 0) {

      // MENSAJE DE QUE HA PERDIDO Y LO LLEVAMOS AL MENU
      resultado.innerText = "Has perdido :( , redirigiéndote al menú principal...";
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 3000);

    } else if (vidasCPU.innerText == 0) {

      
      // PARAMOS EL CRONOMETRO Y GUARDAMOS EL TIEMPO EN UNA VARIABLE 
      detenerCronometro();
      let tiempoDeJuego = horaDiv.innerText;
      
      // Actualizamos los datos del session Storage
      welcome.timeroom1 = tiempoDeJuego;
      welcome.userroom1 = true;
      welcome.puntuacion += puntuacionPorGanar;
      sessionStorage.setItem("usuarios", JSON.stringify(welcome));

      //Actualizamos los datos del local Storage
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username == welcome.username) {
          usuarios[i].userroom1 = true;
          usuarios[i].timeroom1 = tiempoDeJuego;
          usuarios[i].puntuacion += puntuacionPorGanar;
        }
      }
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Mensaje para avisar que ha ganado
      resultado.innerText = "Has ganado! Redirigiéndote a la siguiente sala...";

      // Redirigir después de la actualización
      setTimeout(() => {
        window.location.href = "../html/room2.html";
      }, 3000);
    }
  }
}
