document.getElementById("register").addEventListener("click", () => {
  // CONSTANTES Y VARIABLES
  const username = document.getElementById("username");
  const useremail = document.getElementById("useremail");
  const userpwd = document.getElementById("userpwd");
  let validUser = true;

  //COMPROBACIÓN SI LOS CAMPOS ESTÁN VACÍOS
  if (username.value == "") {
    validUser = false;
    document.getElementById("smallUsername").innerText =
      "El nombre de usuario no puede estar vacío";
    setTimeout(() => {
      window.location.href = "../html/register.html";
    }, 3000);
  }
  if (useremail.value == "") {
    validUser = false;
    document.getElementById("smallUseremail").innerText =
      "El correo electrónico no puede estar vacío";
    setTimeout(() => {
      window.location.href = "../html/register.html";
    }, 3000);
  }
  if (userpwd.value == "") {
    validUser = false;
    document.getElementById("smallUserpwd").innerText =
      "La contraseña no puede estar vacía";
    setTimeout(() => {
      window.location.href = "../html/register.html";
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
      window.location.href = "../html/register.html";
    }, 3000);
  }

  if (!checkUpperCase(userpwd.value)) {
    validUser = false;
    document.getElementById("smallUserpwd").innerText =
      "La contraseña no contiene mayúsculas";
    setTimeout(() => {
      window.location.href = "../html/register.html";
    }, 3000);
  }

  if (!checkLowerCase(userpwd.value)) {
    validUser = false;
    document.getElementById("smallUserpwd").innerText =
      "La contraseña no contiene minúsculas";
    setTimeout(() => {
      window.location.href = "../html/register.html";
    }, 3000);
  }

  if (checkLength(userpwd.value)) {
    validUser = false;
    document.getElementById("smallUserpwd").innerText =
      "La contraseña no cumple la longitud";
    setTimeout(() => {
      window.location.href = "../html/register.html";
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

  // Verificamos si el nombre de usuario ya existe en el localStorage
  if (usernameExists(username.value)) {
    validUser = false;
    document.getElementById("smallUsername").innerText =
      "El nombre de usuario ya existe. Por favor, elige otro.";
    setTimeout(() => {
      window.location.href = "../html/register.html";
    }, 3000);
  }

  // DAMOS DE ALTA AL USUARIO
  if (validUser) {
    // Creamos el Local Storage/Session Storage y un array para ir añadiendo usuarios que se registran
    var nuevoUsuario = new Object();
    nuevoUsuario.username = username.value;
    nuevoUsuario.useremail = useremail.value;
    nuevoUsuario.userpwd = userpwd.value;
    nuevoUsuario.userroom1 = false;
    nuevoUsuario.userroom2 = false;
    nuevoUsuario.userroom3 = false;

    if (localStorage.usuarios ) {
      usuarios = JSON.parse(localStorage.getItem("usuarios"));
    } else {
      usuarios = [];
    }
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = "../html/index.html";

    //Cambiamos/Creamos el usuario de Session storage
    sessionStorage.setItem("usuarios", JSON.stringify(nuevoUsuario));
  }
});
