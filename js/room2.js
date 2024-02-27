let welcome = JSON.parse(sessionStorage.getItem("usuarios"));

if (!welcome) {
  document.getElementById("juego").style.display = "none";
} else {
  
  
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
