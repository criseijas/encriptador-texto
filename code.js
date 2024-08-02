 const btnCopiar = document.getElementById('copiar');
 const imagen = document.getElementById('imagen');
 const imagenTexto = document.getElementById('imagen_texto');
 const mensajeUsuario = document.querySelector('.mensajeUsuario');
 const textAreaEncriptado = document.querySelector('#mensaje_encriptado');

 /*La letra "e" es convertida para "enter"
 La letra "i" es convertida para "imes"
 La letra "a" es convertida para "ai"
 La letra "o" es convertida para "ober"
 La letra "u" es convertida para "ufat"*/

function encriptarMensaje() {
    let mensaje = encriptar(mensajeUsuario.value);
    btnCopiar.classList.remove("btnCopiar"); //remueve la clase btnCopiar
    imagen.classList.add('imagen');
    imagenTexto.classList.add('imagen_texto');
    textAreaEncriptado.value = mensaje;
    mensajeUsuario.value = "";
}

function encriptar(msg){
    
    const matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    console.table(matrizCodigo);

    for(let i=0; i < matrizCodigo.length; i++){
        if(msg.includes(matrizCodigo[i][0])){
            msg = msg.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return msg;
}

function copiarMensaje() {
    let msgenc = textAreaEncriptado.value;
    navigator.clipboard.writeText(msgenc);
}

function desencriptarMensaje() {
    let mensaje = desencriptar(mensajeUsuario.value);
    copiar.classList.remove("btnCopiar"); //remueve la clase btnCopiar
    imagen.classList.add('imagen');
    imagenTexto.classList.add('imagen_texto');
    textAreaEncriptado.value = mensaje;
    mensajeUsuario.value = "";
}


function desencriptar(msg) {
    const matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(msg.includes(matrizCodigo[i][1])){
            msg = msg.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    console.log(msg)
    return msg;
}

