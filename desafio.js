var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var mensaje = document.querySelector("#mensaje");
var salida = document.querySelector("#salida");
var copiar = document.querySelector("#copiar");

var letras = ["e", "i", "a", "o", "u"];
var codigo = ["enter", "imes", "ai", "ober", "ufat"];
var mensajeEncriptado = false;

encriptar.addEventListener("click", function(){
  var contenido = document.querySelector("#contenido");
  contenido.classList.add("invisible");
  salida.classList.remove("invisible");
  copiar.classList.remove("invisible");
  mensajeEncriptado = false;
  salida.value = encriptador(mensaje.value);
});

desencriptar.addEventListener("click", function(){
  mensajeEncriptado = true;
  salida.value = encriptador(mensaje.value);
});

copiar.addEventListener("click", function(){
  navigator.clipboard.writeText(salida.value);
})

function encriptador(str){
  var arr = str.split(" ");
  var traduccion = "";
  var buscar = letras;
  var reemplazar = codigo;

  if(mensajeEncriptado){
    buscar = codigo;
    reemplazar = letras;
  }
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < buscar.length; j++){
      var regExp = new RegExp(buscar[j],'g');
      arr[i] = arr[i].replace(regExp, reemplazar[j]);
    }
    traduccion += arr[i]+" ";
  }
  return traduccion;
}

