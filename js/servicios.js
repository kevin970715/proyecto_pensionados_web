function Consultar(){
	if(document.getElementById("inquilino").checked){
		document.getElementById("login_form").action="habitacion_inquilino.html";
	}else if (document.getElementById("propietario").checked){
		document.getElementById("login_form").action="vistaPropietario.html";
	}else{
		alert("Escoge una opción");
	}
}