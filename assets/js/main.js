var ventana = document.getElementById("ventanaEmergente");
var imagenVentana = document.getElementById("imagenVentana");
var fotos = document.getElementsByClassName("fotito");

var tache = document.getElementById("tache");

function detectarImagen() {
    mostrarVentana(this);
}

function mostrarVentana(imagen){
    console.log(ventana);
    ventana.style.display = "block";
    imagenVentana.src = imagen.src;
}

for(var i = 0; i < fotos.length; i++){
    fotos[i].addEventListener("click",detectarImagen);
}

