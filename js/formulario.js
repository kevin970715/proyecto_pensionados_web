// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

	var formulario = document.formulario_registro,
	elementos = formulario.elements;
	formulario.onsubmit = validacionInputText;
	//Validar que no se escriban caracteres especiales en los input text.
	var validacionInputText = function(){

		var sum = 0, validacion = /^[a-zA-Z0-9\s]*$/, validacionTexto = /^[a-zA-Z_·ÈÌÛ˙¡…Õ”⁄Ò—\s]*$/,
			validacionNumero = /^[0-9]*$/;

		for (var i = 0; i < elementos.length; i++){
			// Identificamos si el elemento es de tipo texto o contraseÒa
			if (elementos[i].type == "text" || elementos[i].type == "password"){
				// Si es tipo texto verificamos que sea el nombre o apellido primero
				if (elementos[i].name == "nombre" || elementos[i].name == "apellido"){

					if (validacionTexto.test(elementos[i].value)){
		  				console.log('El campo ' + elementos[i].name + ' esta correcto.');
		  				elementos[i].className = elementos[i].className.replace(" error", "");
		    			//true
		  			}

		  			else {
		  				console.log('El campo ' + elementos[i].name + ' esta incorrecto.');
		    			elementos[i].className = elementos[i].className + " error";
		  				sum = sum + 1;//false
		  			}
				} 
				//Si es de tipo cÈdula:
				else if (elementos[i].name == "cedula") {

					if (validacionNumero.test(elementos[i].value)){
		  				console.log('El campo ' + elementos[i].name + ' esta correcto.');
		  				elementos[i].className = elementos[i].className.replace(" error", "");
		    			//true
		  			}

		  			else {
		  				console.log('El campo ' + elementos[i].name + ' esta incorrecto.');
		    			elementos[i].className = elementos[i].className + " error";
		  				sum = sum + 1;//false
		  			}
				}
				//Si es de tipo contraseÒa o usuario entonces:
				else {

					if (validacion.test(elementos[i].value)){
						console.log('El campo ' + elementos[i].name + ' esta correcto.');
		  				elementos[i].className = elementos[i].className.replace(" error", "");
		    			//true
		  			}

		  			else {
		  				console.log('El campo ' + elementos[i].name + ' esta incorrecto.');
		    			elementos[i].className = elementos[i].className + " error";
		  				sum = sum + 1;//false
		  			}
	  			}
    		}
		}

		if (sum == 0)
		  	return true
		else
			return false
	}
// Funcion que se ejecuta cuando el evento click es activado

var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
			// Si es tipo texto, email o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				console.log('El campo ' + elementos[i].name + ' esta incompleto');
				elementos[i].className = elementos[i].className + " error";
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(" error", "");
			}
		}
	}

	// Comprobando que las contraseÒas coincidan
	if (elementos.pass.value !== elementos.pass2.value) {
		elementos.pass.value = "";
		elementos.pass2.value = "";
		elementos.pass.className = elementos.pass.className + " error";
		elementos.pass2.className = elementos.pass2.className + " error";
		return false;
	} else {
		elementos.pass.className = elementos.pass.className.replace(" error", "");
		elementos.pass2.className = elementos.pass2.className.replace(" error", "");
	}

	return true;
};

var validarRadios = function(){
	var opciones = document.getElementsByName('sexo'),
		opciones2 = document.getElementsByName('cuarto'),
		resultado = false, resultado2 = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo sexo esta incompleto');
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
			}
		}

		if(elementos[i].type == "radio" && elementos[i].name == "cuarto"){
			// Recorremos los radio button
			for (var o = 0; o < opciones2.length; o++) {
				if (opciones2[o].checked) {
					resultado2 = true;
					break;
				}
			}

			if (resultado2 == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo cuarto esta incompleto');
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
			}
		}
	}

	if (resultado == false && resultado2 == false)
		return false
	else if (resultado == true && resultado2 == false)
		return false
	else if (resultado == false && resultado2 == true)
		return false
	else
		return true
};

var enviar = function(e){
	if (!validacionInputText()) {
		console.log('Falto validar el contenido de los Input');
		e.preventDefault();
	} else if (!validarInputs()) {
		console.log('Falto validar los Input');
		e.preventDefault();
	} else if (!validarRadios()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	} else {
		console.log('Enviado');
	}
};

var focusInput = function(){
	this.parentElement.children[1].className = "label active";
	this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
	if (this.value <= 0) {
		this.parentElement.children[1].className = "label";
		this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
	}
};

// --- Eventos ---
formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
		elementos[i].addEventListener("focus", focusInput);
		elementos[i].addEventListener("blur", blurInput);
	}
}

}())