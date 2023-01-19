function encriptar(){
var texto = document.getElementById("txtencriptar").value.toLowerCase();
var textoCifrado = texto.replace(/e/igm,"enter");
var textoCifrado = textoCifrado.replace(/o/igm,"ober");
var textoCifrado = textoCifrado.replace(/i/igm,"imes");
var textoCifrado = textoCifrado.replace(/a/igm,"ai");
var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

document.getElementById("imgAlan").style.display = "none";
document.getElementById("textoAlan").style.display = "none";
document.getElementById("txtdesencriptar").innerHTML = textoCifrado;
document.getElementById("bcopiar").style.display = "show";
document.getElementById("bcopiar").style.display = "inline";
}
function desencriptar(){
    var texto = document.getElementById("txtencriptar").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("txtdesencriptar").innerHTML = textoCifrado;
}
function copiar(){
var contenido = document.querySelector("#txtdesencriptar");
contenido.select();
document.execCommand("copy")
alert("¡Se copio tu texto!")
}