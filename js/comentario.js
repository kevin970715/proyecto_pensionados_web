// Crear nodo de tipo Element
function comentar(){
    var text = document.getElementById("comments").value;
var parrafo = document.createElement("div");
parrafo.className="comentarioUsuario";
    
var img = document.createElement("img");
parrafo.appendChild(img);
img.className="imagen1";
img.src="img/user-tie.png";

var p=  document.createElement("p");
p.className="contenidoComentario";
p.value = text;
    var pe=document.getElementsByClassName("contenidoComentario").value;
    alert(pe);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);
}