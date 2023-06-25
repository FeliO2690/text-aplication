

function encriptar(){

    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo"); 
    let parrafo = document.getElementById("parrafo-encriptado"); 
    let muneco = document.getElementById("muneco");
    

    let textoCifrado = texto 
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");


    if( document.getElementById("texto").value.length !=0){

        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo").textContent= "Texto encriptado con exito";
        parrafo.textContent= ""; 
        
        muneco.src = "./img/idea.png";
      
    }else{

        muneco.src = "./img/Muñeco.png";
        titulo.textContent= "Ningún mensaje fue encontrado";
        parrafo.textContent= "Ingresa el texto que desees encriptar o desencriptar"; 
        alert("Debes ingresar algún tipo de texto");
       
        
    }

}


function desencriptar() {

    let texto = document.getElementById("texto").value; 
    let titulo = document.getElementById("titulo"); 
    let parrafo = document.getElementById("parrafo-encriptado"); 
    let muneco = document.getElementById("muneco");
    
    let textoCifrado = texto

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0){

        document.getElementById("texto").value = textoCifrado; 
        document.getElementById("titulo").textContent = "Texto desencriptado con exito"; 
        parrafo.textContent =""; 
        muneco.src = "./img/imagen2.png";
    
    }else{
       
        muneco.src = "./img/Muñeco.png";
        titulo.textContent= "No se encontró ningn texto";
        parrafo.textContent= "Ingresa el texto que desees encriptar o  desencriptar"; 
        alert("Debes ingresar algún tipo de texto");
      
        
    
    }



}



var botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.addEventListener("click", encriptar);

var botonDesencriptar = document.getElementById("btn-desencriptar");
botonDesencriptar.addEventListener("click", desencriptar);

