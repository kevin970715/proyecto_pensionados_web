function validacion(){

	var usuario = document.getElementById("usuario").value,
	valUsuario = /[^a-zA-Z0-9\s]|\s$/,
	sw1, sw2; //Expresion regular

	if (valUsuario.test(usuario)){
    	console.log('Usuario escrito incorrectamente.');
  		sw1 = false;
    }

  	else {
  		console.log('Usuario escrito correctamente.');
    	sw1 = true;
  	}
    	
	var contra = document.getElementById("contraseña").value,
	valContraseña = /[^a-zA-Z0-9\s]|\s$/; //Expresion regular

	if (valContraseña.test(contra)){
    	console.log('Contraseña escrita incorrectamente.');
  		sw2 = false;
    }

  	else {
  		console.log('Contraseña escrita correctamente.');
    	sw2 = true;
  	}

  	if (sw1 == true && sw2 == true)
  		return true
  	else
  		return false
  	
}

window.onload = function()
{
	var formulario;
	formulario = document.getElementById("login_form");
	formulario.onsubmit = validacion;
}