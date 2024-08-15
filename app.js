// Funcion mensaje validacion texto
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarTexto() {
    asignarTexto('p','');
    let texto = document.getElementById('texto').value;
    if(/^[a-z\s]+$/.test(texto)){
        texto = texto.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
        console.log(texto);
        // Envio el texto encriptado a la siguiente caja
        document.getElementById('textoEncriptado').value = texto;
        document.getElementById('imagen').style.display = "none";
        document.getElementById('mensaje_no_encontrado').style.display = "none";
        document.getElementById('texto').value = '';
        document.getElementById('botonCopiar').style.display="block";
        document.getElementById('contenedorResultado').style.height="80%";
        document.getElementById('textoEncriptado').style.height="90%";
        document.getElementById('textoEncriptado').style.width="100%";
        document.getElementById('textoEncriptado').style.textAlign="left";
    } else {
        console.log("ERROR VALIDACION");
        asignarTexto('p','El texto ingresado no debe contener mayusculas, acentos ni caracteres especiales.');
        document.getElementById('texto').value = '';
    }
}

function copiarTexto(){
    let copyText = document.getElementById('textoEncriptado');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function desencriptarTexto(){
    let texto = document.getElementById('texto').value;
    texto = texto.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
    document.getElementById('textoEncriptado').value = texto;
    document.getElementById('texto').value = '';
    document.getElementById('sectorEncriptado').style.display = "none";
}