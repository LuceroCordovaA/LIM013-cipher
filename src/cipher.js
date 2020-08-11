const cipher = {

   encode: (offset, string) => {

      let resultado = ""

      for (let posicion = 0; posicion < string.length; posicion++) {//.length es para contabilizar los caracteres de esa variable
         let letra = string;
         let codigoAsciiLetra = letra.charCodeAt(posicion); // Devuelve posición a cada letra de la frase // para hallar el código ASCII de cada letra

         if (codigoAsciiLetra >= 65 && codigoAsciiLetra <= 90) {
            resultado += String.fromCharCode(((codigoAsciiLetra - 65 + offset) % 26) + 65)//se coloca paréntesis para poder resolver de adentro hacia afuera
            //} else if (codigoAsciiLetra >= 97 && codigoAsciiLetra <= 122) {
            //resultado += String.fromCharCode(((codigoAsciiLetra - 97 + desplazamientoParaFrase) % 26) + 97)
            // } else if (codigoAsciiLetra >= 33 && codigoAsciiLetra <= 57) {
            //resultado += String.fromCharCode(((codigoAsciiLetra - 33 + desplazamientoParaFrase) % 26) + 33)
            //}
         } else {
            resultado += string[posicion] // para respetar los espacios entre cada palabra
         }
      }
      return resultado;
   },

   decode: (offset, string) => {

      let resultado = ""

      for (let posicion = 0; posicion < string.length; posicion++) {
         let letra = string;
         let codigoAsciiLetra = letra.charCodeAt(posicion);

         if (codigoAsciiLetra >= 65 && codigoAsciiLetra <= 90) {
            resultado += String.fromCharCode(((codigoAsciiLetra - 90 - offset) % 26) + 90)
            //} else if (codigoAsciiLetra >= 97 && codigoAsciiLetra <= 122) {
            //resultado += String.fromCharCode(((codigoAsciiLetra - 122 - desplazamientoParaFrase) % 26) + 122)
            // } else if (codigoAsciiLetra >= 33 && codigoAsciiLetra <= 57) {
            //resultado += String.fromCharCode(((codigoAsciiLetra - 57 - desplazamientoParaFrase) % 26) + 57)
         } else {
            resultado += string[posicion]
         }
      }
      return resultado;
   }
}
export default cipher;