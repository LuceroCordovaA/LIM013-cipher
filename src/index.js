import cipher from './cipher.js';

alert('Colocar una clave. Recuerda compartir tu clave para poder Codificar/Descodificar tu mensaje.')

/*const convertir = document.getElementById('mensajeUsuario');
convertir.toUpperCase(); Modificar para convertir en Mayúsculas*/

const btnCodificar = document.getElementById('codificar');
const btnDescodificar = document.getElementById('descodificar');
const desplazamientoParaFrase = document.getElementById('clave');
const frase = document.getElementById('mensajeUsuario');


function onClickBtnCodificar() {
    const valueDesplazamientoParaFrase = parseInt(desplazamientoParaFrase.value); //.value para capturar el valor de cada input
    //parseInt: convierte el valor en número
    const valueFrase = frase.value.toUpperCase();
    frase.value = cipher.encode(valueDesplazamientoParaFrase, valueFrase);
}
btnCodificar.addEventListener('click', onClickBtnCodificar)

function onClickBtnDescodificar() {
    const valueDesplazamientoParaFrase = parseInt(desplazamientoParaFrase.value);
    const valueFrase = frase.value.toUpperCase();
    frase.value = cipher.decode(valueDesplazamientoParaFrase, valueFrase);
}
btnDescodificar.addEventListener('click', onClickBtnDescodificar)

cipher.encode(desplazamientoParaFrase, frase);

cipher.decode(desplazamientoParaFrase, frase);





