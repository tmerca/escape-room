let welcome = JSON.parse(sessionStorage.getItem("usuarios"));

if (!welcome) {
  document.getElementById('formEditData').style.display = 'none';
} else {

  // ESCRIBIMOS LOS VALORES ANTIGUOS EN LOS CAMPOS DEL FORMULARIO
  let antiguoNombre = document.getElementById("antiguoNombre");
  let antiguoEmail = document.getElementById("antiguoEmail");
  let antiguoPwd = document.getElementById("antiguoPwd");

  antiguoNombre.innerText = JSON.parse(sessionStorage.getItem('usuarios')).username;
  antiguoEmail.innerText = JSON.parse(sessionStorage.getItem('usuarios')).useremail;
  antiguoPwd.innerText = JSON.parse(sessionStorage.getItem('usuarios')).userpwd;

  // COMPROBAMOS LOS DATOS INTRODUCIDOS
  document.getElementById("confirmar").addEventListener("click", () => {
    // CONSTANTES Y VARIABLES
    let username = document.getElementById("username");
    let useremail = document.getElementById("useremail");
    let userpwd = document.getElementById("userpwd");
    let validUser = true;

    //COMPROBACIÓN SI LOS CAMPOS ESTÁN VACÍOS
    if (username.value == "") {
      validUser = false;
      document.getElementById("smallUsername").innerText =
        "El nombre de usuario no puede estar vacío";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }
    if (useremail.value == "") {
      validUser = false;
      document.getElementById("smallUseremail").innerText =
        "El correo electrónico no puede estar vacío";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }
    if (userpwd.value == "") {
      validUser = false;
      document.getElementById("smallUserpwd").innerText =
        "La contraseña no puede estar vacía";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }

    // COMPROBACION DEL CORREO ELECTRONICO
    checkEmail();

    // FUNCION PARA COMPROBAR SI EL EMAIL ES VALIDO
    function checkEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(useremail.value.trim())) {
        validUser = false;
      }
    }

    if (!checkNumber(userpwd.value)) {
      validUser = false;
      document.getElementById("smallUserpwd").innerText =
        "La contraseña no contiene un número";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }

    if (!checkUpperCase(userpwd.value)) {
      validUser = false;
      document.getElementById("smallUserpwd").innerText =
        "La contraseña no contiene mayúsculas";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }

    if (!checkLowerCase(userpwd.value)) {
      validUser = false;
      document.getElementById("smallUserpwd").innerText =
        "La contraseña no contiene minúsculas";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }

    if (checkLength(userpwd.value)) {
      validUser = false;
      document.getElementById("smallUserpwd").innerText =
        "La contraseña no cumple la longitud";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }

    if (usernameExists(username.value)) {
      validUser = false;
      document.getElementById("smallUsername").innerText =
        "El nombre de usuario ya existe. Por favor, elige otro.";
      setTimeout(() => {
        window.location.href = "../html/edit.html";
      }, 3000);
    }
    // FUNCION PARA COMPROBAR LA CONTRASEÑA
    function checkNumber(userpwd) {
      return /[0-9]/.test(userpwd);
    }
    function checkUpperCase(userpwd) {
      return /[A-Z]/.test(userpwd);
    }
    function checkLowerCase(userpwd) {
      return /[a-z]/.test(userpwd);
    }
    function checkLength(userpwd) {
      if (userpwd.length < 6) {
        return true;
      }
      return false;
    }
    function usernameExists(newUsername) {
      // Recuperamos el array de usuarios del localStorage
      var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      // Verificamos si el nuevo nombre de usuario ya existe en el array
      return usuarios.some((user) => user.username === newUsername);
    }

    // DAMOS DE ALTA AL USUARIO
    if (validUser) {

      let datosCambiados = false;

      console.log("Usuario valido, actualizando datos...");

      // Creamos el nuevo objeto de usuario
      var nuevoUsuario = new Object();
      nuevoUsuario.username = username.value;
      nuevoUsuario.useremail = useremail.value;
      nuevoUsuario.userpwd = userpwd.value;
      nuevoUsuario.userroom1 = welcome.userroom1;
      nuevoUsuario.userroom2 = welcome.userroom2;
      nuevoUsuario.userroom3 = welcome.userroom3;
      nuevoUsuario.timeroom1 = welcome.timeroom1;
      nuevoUsuario.timeroom2 = welcome.timeroom2;
      nuevoUsuario.timeroom3 = welcome.timeroom3;
      nuevoUsuario.puntuacion = welcome.puntuacion;

      // Actualizamos los datos del session Storage
      sessionStorage.setItem('usuarios', JSON.stringify(nuevoUsuario));

      // Actualizamos los datos del local Storage      
      let usuarios = JSON.parse(localStorage.getItem('usuarios'));
      
      for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].username == antiguoNombre.innerText){
          usuarios[i] = nuevoUsuario;
          datosCambiados = true;
        }

      }
      localStorage.setItem('usuarios', JSON.stringify(usuarios));


      // SI LOS DATOS SE HAN CAMBIADO MOSTRAMOS EL MENSAJE Y LO LLEVAMOS AL MENU PRINCIPAL
      if(datosCambiados) {
        document.getElementById('requisitos').style.display = 'none';
        document.getElementById('datosCambiados').innerText = "Tus datos han sido cambiados con éxito, llevándote al menú principal...";

        setTimeout(() => {
          window.location.href = "../html/index.html";
        }, 2000);

      }

    }
  });
}
