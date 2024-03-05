let welcome = JSON.parse(sessionStorage.getItem("usuarios"));

if (!welcome) {

  document.getElementById('juego').style.display = 'none';
  document.getElementById('noInicioSesion').style.display = 'block';
  document.getElementById('sinAcceso').style.display = 'none';

} else if(welcome.userroom1 != true) {

  document.getElementById('sinAcceso').style.display = 'block';
  document.getElementById('juego').style.display = 'none';

}

else {
  
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
  
  // CODIGO DEL JUEGO ENCUENTRA LAS 6 DIFERENCIAS
  let mensaje = document.getElementById("mensaje");
  let nivelUno = document.getElementById("nivelUno");
  let nivelDos = document.getElementById("nivelDos");
  let contadorMap1 = 6;
  let contadorMap2 = 6;
  let numDiferencias = document.getElementById('numDiferencias');  
  let mapeo1 = document.getElementById("mapeo1");
  let mapeo2 = document.getElementById("mapeo2");
  let puntuacionPorGanar = 1;

  mensaje.style.display = "none";
  nivelDos.style.display = "none";

  document.getElementById("noInicioSesion").style.display = "none";


  mapeo1.addEventListener("click", (e) => {
    
    switch(e.target.id) {
      case "img1area1":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img1area2":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img1area3":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img1area4":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img1area5":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img1area6":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap1 -=1;
          e.target.classList.add('selected');
        }
        break;
    }

    if(contadorMap1 == 0){
      
      mensaje.innerHTML = "<p>Felicidades, has superado el primer nivel, si superas el siguiente pasarás a la prueba final!</p>";
      mensaje.style.display = "block";
      document.getElementById("diferenciasRestantes").style.display = "none";
      nivelUno.style.display = "none";

      setTimeout(() => {
        mensaje.style.display = "none";
        document.getElementById("diferenciasRestantes").style.display = "block";
        numDiferencias.innerText = 6;
        nivelDos.style.display = "block";
      }, 4000);

    }

  });

  mapeo2.addEventListener("click", (e) => {
    
    switch(e.target.id) {
      case "img2area1":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img2area2":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img2area3":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img2area4":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img2area5":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
      case "img2area6":
        if(!e.target.classList.contains('selected')){
          numDiferencias.innerText -=1;
          contadorMap2 -=1;
          e.target.classList.add('selected');
        }
        break;
    }

    if(contadorMap2 == 0) {

      // PARAMOS EL CRONOMETRO Y GUARDAMOS EL TIEMPO EN UNA VARIABLE 
      detenerCronometro();
      let tiempoDeJuego = horaDiv.innerText;

      // Actualizamos datos del Local Storage y del Session Storage
      welcome.timeroom2 = tiempoDeJuego;
      welcome.userroom2 = true;
      welcome.puntuacion += puntuacionPorGanar;
      sessionStorage.setItem('usuarios', JSON.stringify(welcome));
      
      //Actualizamos los datos del local Storage
      let usuarios = JSON.parse(localStorage.getItem('usuarios')); 
      for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].username == welcome.username) {
          usuarios[i].userroom2 = true;   
          usuarios[i].timeroom2 = tiempoDeJuego;   
          usuarios[i].puntuacion += puntuacionPorGanar;
        }
      }
  
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Mostramos el mensaje y dirigimos al cliente a la siguiente sala
      mensaje.innerHTML = "<p>Felicidades, has ganado! Pasas a la siguiente y última prueba!</p>";
      mensaje.style.display = 'block';
      document.getElementById("diferenciasRestantes").style.display = "none";
      nivelDos.style.display = "none";

      setTimeout(() => {
        window.location.href = "../html/room3.html";
      }, 3000);

    }

  });
}
