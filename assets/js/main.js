var ventana = document.getElementById("ventanaEmergente");
var imagenVentana = document.getElementById("imagenVentana");
var tache = document.getElementById("tache");
var fotos = document.getElementsByClassName("fotito");

function detectarImagen() {
    mostrarVentana(this);
}

function mostrarVentana(imagen){
    console.log(ventana);
    ventana.style.display = "block";
    imagenVentana.src = imagen.src;
}

function cerrarVentana(){
    ventana.style.display = "none";
}

for(var i = 0; i < fotos.length; i++){
    fotos[i].addEventListener("click",detectarImagen);
}

tache.addEventListener("click",cerrarVentana);





