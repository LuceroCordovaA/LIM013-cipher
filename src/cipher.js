const cipher = {

   encode: (desplazamientoParaFrase, frase) => {

      let resultado = ""

      for (let posicion = 0; posicion < frase.length; posicion++) {//.length es para contabilizar los caracteres de esa variable
         let letra = frase[posicion]; // Devuelve posición a cada letra de la frase
         let codigoAsciiLetra = letra.charCodeAt(0); // para hallar el código ASCII de cada letra

         if (codigoAsciiLetra >= 65 && codigoAsciiLetra <= 90) {
            var nuevaPosicion = (codigoAsciiLetra - 65 + desplazamientoParaFrase) % 26 + 65
         }

         let nuevaLetra = String.fromCharCode(nuevaPosicion)

         resultado = resultado + nuevaLetra;
      }
      return resultado;
   },

   decode: (desplazamientoParaFrase, frase) => {
   
      let resultado = ""

      for (let posicion = 0; posicion < frase.length; posicion++) {//.length es para contabilizar los caracteres de esa variable
         let letra = frase[posicion]; // Devuelve posición a cada letra de la frase
         let codigoAsciiLetra = letra.charCodeAt(0); // para hallar el código ASCII de cada letra

         if (codigoAsciiLetra >= 65 && codigoAsciiLetra <= 90) {
            var nuevaPosicion = (codigoAsciiLetra - 90 - desplazamientoParaFrase) % 26 + 90
         }

         let nuevaLetra = String.fromCharCode(nuevaPosicion)

         resultado = resultado + nuevaLetra;
      }
      return resultado;
   }
}
export default cipher;