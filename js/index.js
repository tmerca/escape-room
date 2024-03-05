//Variables
let welcome = JSON.parse(sessionStorage.getItem("usuarios"));
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let userWelcome = document.getElementById("welcome");
let empezarJuego = document.getElementById("empezarJuego");
let noLogin = document.getElementById("mensajeNoLogin");
let logIn = document.getElementById("btnLogIn");
let btnEditUser = document.getElementById("btnEditUser");
let containerPartida = document.getElementById('containerPartida');
let botonesContinuarPartida = document.getElementById("botonesContinuarPartida");
let loggedIn = false;

// PONEMOS EL MENSAJE DE BIENVENIDA SI TIENE SESION INICIADA
if(welcome){
    loggedIn = true;
    userWelcome.innerText = "Hola " + welcome.username;
    btnEditUser.style.display = "block";

    // COMPROBAMOS SI EL USUARIO EMPEZÓ UNA PARRTIDA Y LE OFRECEMOS CONTINUARLA 
    if(welcome.userroom1 == true && welcome.userroom3 != true){

        containerPartida.style.display = 'block';
    
        botonesContinuarPartida.addEventListener('click', (e) => {
    
            console.log(e.target.id);
    
            // SI PULSA QUE SI LO REDIRIGIMOS DONDE LO DEJÓ
            if(e.target.id == 'yes') {
                if(welcome.userroom2 == true && welcome.userroom3 == false) {
                    window.location.href = "../html/room3.html";
                } else if(welcome.userroom2 != true) {
                    window.location.href = '../html/room2.html';
                }
            // SI PULSA QUE NO PONDREMOS LAS TRES SALAS EN FALSE Y LO LLEVAREMOS A LA PRIMERA SALA
            } else if(e.target.id == 'no') {
                window.location.href = '../html/room1.html';

                for(let i = 0; i < usuarios.length; i++) {
                    if(usuarios[i].username == welcome.username) {

                        usuarios[i].userroom1 = false;
                        usuarios[i].userroom2 = false;
                        usuarios[i].userroom3 = false;
                        usuarios[i].puntuacion = 0;

                        welcome.userroom1 = false;
                        welcome.userroom2 = false;
                        welcome.userroom3 = false;
                        welcome.puntuacion = 0;

                    }
                }

                sessionStorage.setItem('usuarios', JSON.stringify(welcome));
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

            }
    
        });
    
    }

}else{
    btnEditUser.style.display = "none";
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
        if(welcome.userroom1 == true && welcome.userroom2 == true && welcome.userroom3 == true) {
            window.location.href = '../html/room1.html';

            for(let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].username == welcome.username) {

                    usuarios[i].userroom1 = false;
                    usuarios[i].userroom2 = false;
                    usuarios[i].userroom3 = false;
                    usuarios[i].puntuacion = 0;

                    welcome.userroom1 = false;
                    welcome.userroom2 = false;
                    welcome.userroom3 = false;
                    welcome.puntuacion = 0;

                }
            }

            sessionStorage.setItem('usuarios', JSON.stringify(welcome));
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

        }
    }

});