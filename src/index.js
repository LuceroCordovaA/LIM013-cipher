import cipher from './cipher.js';

alert('Colocar una clave. Recuerda compartir tu clave para poder Codificar/Descodificar tu mensaje.')

const btnCifrar = document.getElementById('cifrar');
const btnDescifrar = document.getElementById('descifrar');
const btnCopiar = document.getElementById('copiar');
const offset = document.getElementById('clave');
const string = document.getElementById('mensajeUsuario');


function onClickBtnCifrar() {
    const valueOffset = parseInt(offset.value); //.value para capturar el valor de cada input
    //parseInt: convierte el valor en número
    const valueString= string.value.toUpperCase();
    //const valueFrase = frase.value.toUpperCase(); el "toUpperCase convierte la cadena de texto en mayúsculas"
    string.value = cipher.encode(valueOffset, valueString);
}
btnCifrar.addEventListener('click', onClickBtnCifrar)

function onClickBtnDescifrar() {
    const valueOffset = parseInt(offset.value);
    const valueString = string.value.toUpperCase();
    string.value = cipher.decode(valueOffset, valueString);
}
btnDescifrar.addEventListener('click', onClickBtnDescifrar)

function onClickBtnCopiar() {
    let string = document.getElementById('mensajeUsuario');
    string.select(); // selección completa del texto que esta dentro de mensajeUsuario
    string.setSelectionRange(0, 999999999); // cantidad de caracteres a seleccionar
    document.execCommand('copy'); // invoca la función de copiado al portapeles
}
btnCopiar.addEventListener('click', onClickBtnCopiar)

cipher.encode(offset, string);

cipher.decode(offset, string);





