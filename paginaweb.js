function enlaceTwitter(){

    location.href = "https://twitter.com/?lang=es";

}

function enlaceIg(){

    location.href = "https://www.instagram.com/lucasl.98/";

}

function comentarios(){
   var comentarios= document.getElementById("comentarios").value;
    console.log("Comentarios: " , comentarios);
}

function iniciarSesion(){
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("contra").value;

    console.log("Usuario: " , usuario + ". Contraseña: " , contra)
}
