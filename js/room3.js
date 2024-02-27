let welcome = JSON.parse(sessionStorage.getItem("usuarios"));

if (!welcome) {
  document.getElementById("juego").style.display = "none";
  console.log("No ha podido ser");
} else {
  document.getElementById("noInicioSesion").style.display = "none";

  // JSON CON LAS TEMATICAS POSIBLES
  let JSONTematicas =
    '{"animales" : ["PERRO", "GATO", "ERIZO", "CABALLO", "TIGRE", "CAMALEON"], "frutas" : ["PERA", "MANZANA", "KIWI", "NARANJA", "MANDARINA", "PLATANO"],"deportes" : ["AJEDREZ", "BALONCESTO", "VOLEIBOL", "HOCKEY", "RUGBY", "BADMINTON"]}';
  let tematicas = JSON.parse(JSONTematicas);

  // COGEMOS EL TABLERO Y LO ESCONDEMOS HASTA QUE HAYA ELEGIDO TEMATICA
  let juegoAhorcado = document.getElementById("juegoAhorcado");
  juegoAhorcado.style.display = "none";

  // VARIABLES DOM
  let enviarTematica = document.getElementById("enviarTematica");
  let radioTema1 = document.getElementById("radioTema1");
  let radioTema2 = document.getElementById("radioTema2");
  let radioTema3 = document.getElementById("radioTema3");

  // EVENTO PARA ELEGIR TEMATICA Y PALABRA DEL JUEGO
  enviarTematica.addEventListener("click", (e) => {
    let palabraAAdivinar;

    if (radioTema1.checked || radioTema2.checked || radioTema3.checked) {
      // ESCONDEMOS LOS MENSAJES CUANDO YA HA ELEGIDO TEMATICA
      document.getElementById("mensajeSinTematica").style.display = "none";
      document.getElementById("mensajeTematicas").style.display = "none";
      document.getElementById("elegirTema").style.display = "none";
      juegoAhorcado.style.display = "block";

      // ELEGIMOS EL VALOR DE PALABRAAADIVINAR SEGUN LA ELECCION
      if (radioTema1.checked) {
        palabraAAdivinar =
          tematicas.animales[
            Math.floor(Math.random() * tematicas.animales.length)
          ];
        console.log(palabraAAdivinar);
      } else if (radioTema2.checked) {
        palabraAAdivinar =
          tematicas.frutas[Math.floor(Math.random() * tematicas.frutas.length)];
        console.log(palabraAAdivinar);
      } else {
        palabraAAdivinar =
          tematicas.deportes[
            Math.floor(Math.random() * tematicas.deportes.length)
          ];
        console.log(palabraAAdivinar);
      }

      // JUEGO DEL AHORCADO
      function juego() {
        let divPalabra = document.getElementById("palabra"); // Palabra en Pantalla
        let divLetrasFalladas = document.getElementById("letras-incorrectas");
        let mensajeFinal = document.getElementById("contenedor-mensaje-final");
        let botones = document.getElementById("botones"); // Div con los botones de las letras
        let guiones = []; // Palabra aleatoria en "_"
        let letrasFalladas = []; // Letras que falla durante la partida
        let adivinada = true; // Palabra adivinada o no
        let vidas = document.getElementById("intentos");
        vidas.innerHTML = 10;
        let letraNoEncontrada = true; // Para comprobar si está en letrasFalladas[]

        crearEspacios();
        cambiarEspacios();
        popup();

        // POP-UP
        function popup() {
          const boton = document.getElementById("btn-popup");
          const envoltorio = document.querySelector(".envoltorio-popup");
          const cerrar = document.querySelector(".cerrar-popup");

          // Primer evento -> Click sobre el botón para abrir el pop-up
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

        // ESCRIBIMOS TANTOS GUIONES COMO TENGA LA LETRA
        function crearEspacios() {
          for (let i = 0; i < palabraAAdivinar.length; i++) {
            guiones[i] = "__";
          }
        }

        // CAMBIAMOS LOS ESPCAIONS POR LA LETRA
        function cambiarEspacios() {
          for (let i = 0; i < palabraAAdivinar.length; i++) {
            divPalabra.innerHTML = divPalabra.innerHTML + " " + guiones[i];
          }
        }

        // COMPROBAMOS QUE LA LETRA INTRODUCIDA ESTÁ EN LA PALABRA A ADIVINAR
        function comprobarLetra(letra) {
          for (let i = 0; i < palabraAAdivinar.length; i++) {
            if (letra == palabraAAdivinar.charAt(i)) {
              guiones[i] = letra.toUpperCase();
              letraNoEncontrada = false;
            }
          }
          if (letraNoEncontrada == true) {
            letrasFalladas[letrasFalladas.length] = " " + letra;
            vidas.innerHTML = vidas.innerHTML - 1;
          }

          divPalabra.innerHTML = "";
          divLetrasFalladas.innerHTML = letrasFalladas;
          cambiarEspacios();
          compruebaAcierto();
          letraNoEncontrada = true;
          adivinada = true;
        }

        function compruebaAcierto() {
          for (let i = 0; i < palabraAAdivinar.length; i++) {
            if (guiones[i].toUpperCase() != palabraAAdivinar.charAt(i)) {
              adivinada = false;
            }
          }
          if (adivinada == true && vidas.innerHTML > 0) {
            mensajeFinal.innerHTML = "FELICIDADES, HAS GANADO!";
            mensajeFinal.style.display = "block";
            botones.style.display = "none";
          }
          if (vidas.innerHTML == 0) {
            botones.style.display = "none";
            mensajeFinal.innerHTML =
              "HAS PERDIDO! LA PALABRA ERA: <br>" + palabraAAdivinar;
            mensajeFinal.style.display = "block";
          }
        }

        botones.addEventListener(
          "click",
          (e) => {
            if (e.target.value != null) {
              e.target.style.display = "none";
              comprobarLetra(e.target.value);
            }
          },
          false
        );
      }

      juego();
    } else {
      document.getElementById("mensajeSinTematica").innerText =
        "Elige una temática primero!";
    }
  });
}
