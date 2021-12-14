function validarCampoVacio() {
    //obteniendo el valor que se puso en el campo text del formulario
  var nombreVacio = document.getElementById("inputText").value;

    //si el input de nombre esta a 0 (vacio) , saldra una alerta el cual te avisa de que tienes que rellenarla
    if (nombreVacio.length == 0) {
      //Si el campo nombre esta vacio,saldra una notificacion de que se debe rellenar
      console.log("El campo no puede estar vavcio")
      //y devolvemos falso
      return false;
    }else{
    // Si el campo esta lleno ocultamos el mensaje de error
    console.log("todo bien")
    //y devolvemos true
    return true;
    }
}

function validarEmail(elemento){
    var correo = document.getElementById('inputEmail4').value;
    arroba = correo.indexOf("@");
    punto =  correo.lastIndexOf(".");
    extension= correo.split(".")[1];
    
    if (arroba < 1 || ( punto - arroba < 2 )||correo===""){
       alert("correo invalido");
    }else{
      if(extension.length >3){
        alert("correo invalido");
        return;
      }
      alert("correo valido");
    }
}

//Validar contraseña que tenga 8 charateres y 1 digito
function validarContraseña(){

    var contraseña1 = document.getElementById("inputPassword1").value;
    var expresionRegular = /^(?=.*\d)[a-zA-Z0-9]{8,}$/;
  
    //Si la contraseña es menor a 8 
    if(expresionRegular.test(contraseña1)){
      //mostramos mensaje y decimos que min tiene que se 8 digitos
      console.log("la contraseña deber de ser min 8 characters")
      return false;
    }else{
      // Si no eliminamos el mensaje ya que habra 8 charateres
      console.log("contraseña valida")
      return true;
    }
  }

  
//Comprobar de que las dos contraseñas sean iguales
function ContraseñaIguales(){

    var contraseña1 = document.getElementById("inputPassword1").value;
    var contraseña2 = document.getElementById("inputPassword2").value;
  
    //Si la contraseña 1 es distinta de la contraseña 2 
    if (contraseña1 != contraseña2) {
      //Mostramos una notificacion de que las contraseñas no coincide
      document.getElementById("error").classList.add("mostrar");
      //Devolvemos falso
      return false;
    } else {
       // Si las contraseñas coinciden ocultamos el mensaje de error
      document.getElementById("error").classList.remove("mostrar");
      //Devolvemos true
      return true; 
    }
  }