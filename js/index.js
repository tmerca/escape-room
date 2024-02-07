//Variables
let welcome = JSON.parse(sessionStorage.getItem("usuarios"));
let userWelcome = document.getElementById("welcome");
let empezarJuego = document.getElementById("empezarJuego");
let noLogin = document.getElementById("mensajeNoLogin");
let logIn = document.getElementById("btnLogIn");
let loggedIn = false;

// PONEMOS EL MENSAJE DE BIENVENIDA 

if(welcome){
    loggedIn = true;
    userWelcome.innerText = "Hola " + welcome.username;
}

// CUANDO EL USUARIO ESTÁ REGISTRADO DEJAMOS QUE PUEDA PULSAR JUGAR 
empezarJuego.addEventListener("click", (e) => {

    if(loggedIn == false) {
        noLogin.innerText = "Inicia sesión para empezar juego!";
        setTimeout(() => {
            window.location.href = "../html/index.html";
        }, 2000);
    } else {
        window.location.href = "../html/room1.html";
    }

});