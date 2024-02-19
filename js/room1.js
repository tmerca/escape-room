  
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
  let vidasCliente = document.getElementById("vidasCliente");
  let vidasCPU = document.getElementById("vidasCPU");
  let papelCliente = document.getElementById("papelCliente");
  let rocaCliente = document.getElementById("rocaCliente");
  let tijerasCliente = document.getElementById("tijerasCliente");
  let papelCPU = document.getElementById("papelCPU");
  let rocaCPU = document.getElementById("rocaCPU");
  let tijerasCPU = document.getElementById("tijerasCPU");
  let rutaPapel = "/img/paper.png";
  let rutaRoca = "/img/rock.png";
  let rutaTijeras = "/img/scissors.png";
  
  
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
  
    // ESCONDEMOS LAS OPCIONES PARA EVITAR ERRORES
    papelCliente.style.display = "none";
    rocaCliente.style.display = "none";
    tijerasCliente.style.display = "none";
  
    papelCPU.style.display = "none";
    rocaCPU.style.display = "none";
    tijerasCPU.style.display = "none";
  
  
    if(eleccionCliente.src){
  
      botonJugar.style.display = "none";
      var numAleatorio = Math.floor(Math.random() * 3 + 1);
      if(numAleatorio == 1){
        eleccionCPU.src = rutaPapel;
      }else if(numAleatorio == 2){
        eleccionCPU.src = rutaRoca;
      }else {
        eleccionCPU.src = rutaTijeras;
      }
  
      //COMPROBAMOS AMBAS ELECCIONES
  
  
  
      // CPU SACA PAPEL
      if(eleccionCPU.src.endsWith("paper.png") && eleccionCliente.src.endsWith("paper.png")) {
  
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
        
      }else if(eleccionCPU.src.endsWith("paper.png") && eleccionCliente.src.endsWith("rock.png")) {
        
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
  
      }else if(eleccionCPU.src.endsWith("paper.png") && eleccionCliente.src.endsWith("scissors.png")){
        
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -=1;
  
      }
  
  
      // CPU SACA PIEDRA
      if(eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("paper.png")){
        
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -=1;
  
      }else if(eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("rock.png")){
  
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
  
  
      }else if(eleccionCPU.src.endsWith("rock.png") && eleccionCliente.src.endsWith("scissors.png")){
  
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
  
      }
  
  
  
  
      //CPU SACA TIJERAS
      if(eleccionCPU.src.endsWith("scissors.png") && eleccionCliente.src.endsWith("paper.png")){
  
        resultado.style.display = "block";
        resultado.innerText = "Gana la CPU, pierdes una vida!";
        temporizadorParaJugar();
        vidasCliente.innerText -= 1;
  
  
      }else if(eleccionCPU.src.endsWith("scissors.png") && eleccionCliente.src.endsWith("rock.png")){
        
        resultado.style.display = "block";
        resultado.innerText = "Ganas el duelo, CPU pierde una vida!";
        temporizadorParaJugar();
        vidasCPU.innerText -=1;
  
      }else if(eleccionCPU.src.endsWith("scissors.png") && eleccionCliente.src.endsWith("scissors.png")){
  
        resultado.style.display = "block";
        resultado.innerText = "Empate técnico, nadie pierde vidas!";
        temporizadorParaJugar();
      }
  
      resultadoFinal();
  
    }else{
      resultado.innerText = "Elije primero una opción para empezar el duelo";
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
  
    botonJugar.style.display = "None";
  
    if(vidasCliente.innerText == 0){
      resultado.innerText = "Has perdido :( , redirigiéndote al menú principal...";
      setTimeout(() => {
        window.location.href = "../html/index.html";
      }, 3000);
    }else if(vidasCPU.innerText == 0) {
      resultado.innerText = "Has ganado! Redirigiéndote a la siguiente sala...";
      setTimeout(() => {
        window.location.href = "../html/room2.html";
      }, 3000);
    }
  }