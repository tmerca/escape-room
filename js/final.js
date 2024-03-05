let welcome = JSON.parse(sessionStorage.getItem("usuarios"));
let listaUsuarios = document.getElementById('listaPuntuacion')

if(!welcome) {

    document.getElementById('puntuacionFinal').style.display ='none';
    document.getElementById('containerFinal').style.display = 'none';
    document.getElementById('noInicioSesion').style.display = 'block';

} else if(welcome.userroom1 != true || welcome.userroom2 != true || welcome.userroom3 != true) {

    document.getElementById('containerFinal').style.display = 'none';
    document.getElementById('sinAcceso').style.display = 'block';
    document.getElementById('puntuacionFinal').style.display ='none';

} else {

    document.getElementById('containerFinal').style.display = 'block';

    let usuarios = JSON.parse(localStorage.getItem('usuarios'));

    console.log(usuarios);

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userroom1 == true && usuarios[i].userroom2 == true && usuarios[i].userroom3 == true) {
            listaUsuarios.innerHTML += "<li class='userInfo list-group-item'><p><strong>Nombre de usuario: </strong>" + usuarios[i].username + "</p>" +
            "<p><strong>Tiempo en la sala 1:</strong> " + usuarios[i].timeroom1 +" </p>" +
            "<p><strong>Tiempo en la sala 2:</strong> " + usuarios[i].timeroom2 +" </p>" +
            "<p><strong>Tiempo en la sala 3:</strong> " + usuarios[i].timeroom3 +" </p>" +
            "<p><strong>Puntuación:</strong> " + usuarios[i].puntuacion + "</li>"

        }
    }


}