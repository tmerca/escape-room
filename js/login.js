let login = document.getElementById("logIn");
login.addEventListener('click', () => {

    const useremail = document.getElementById("useremail");
    const userpwd = document.getElementById("userpwd");
    let userFound = false;

    
    let usuarios =  JSON.parse(localStorage.getItem('usuarios'));
    
    // Comprobamos que los datos introducidos coincidan con algun usuario del local Storage
    if(usuarios){
        for(i = 0; i < usuarios.length; i++) {
            if(useremail.value == usuarios[i].useremail && userpwd.value == usuarios[i].userpwd){
                userFound = true;
                // Cambiamos el usuario del Session storage
                sessionStorage.setItem('usuarios', JSON.stringify(usuarios[i]));
                window.location.href = "../index.html";
                break;
            }
        }

    }

    if(userFound == false) {
        document.getElementById("smallMessage").innerText = "Usuario no encontrado";
        setTimeout(() => {
            window.location.href = "../html/login.html";
        }, 2500);
    }

});