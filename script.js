//Traigo los ID del contenedor y la imagen en grande y los asigno a variables.
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

// Toma la referencia de la imagen que es clickeada con en el html como: openFulImg(this.src).
function abrirImg(reference){
    fulImgBox.style.display = "flex"; 
    fulImg.src = reference //Le asigna la imagen que se va a ver.
}

//Cierra el contenedor de la imagen.
function cerrarImg(){
    fulImgBox.style.display = "none";
}