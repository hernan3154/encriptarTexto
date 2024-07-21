function encriptar() {
    //captura el texto que escribe el usuario a encriptar
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById('parrafo');
    let img = document.getElementById('img');

    let textoCifrado = texto
        //este metodo replace obtien una letra y la remplaza
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
    //validacion
    if (texto.length != 0) {
        document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = 'Texto encriptado con exito'
        parrafo.textContent = '';
        img.src = "/img/alegre-removebg-preview.png"
    } else {
        img.src = "/img/Esperanado_el_Texto-removebg-preview.png;";
        tituloMensaje.textContent = 'Ningun mensaje fue encontrado';
        parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
        alert('Debes ingresar algun texto');
    }
}

function desencriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById('parrafo');
    let img = document.getElementById('img');

    let textoCifrado = texto
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

    if (texto.length != 0) {
        document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = 'Texto desencriptado con exito'
        parrafo.textContent = '';
        img.src = "/img/alegre-removebg-preview.png"
    } else {
        img.src = "/img/Esperanado_el_Texto-removebg-preview.png;";
        tituloMensaje.textContent = 'Ningun mensaje fue encontrado';
        parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
        alert('Debes ingresar algun texto');
    }

}