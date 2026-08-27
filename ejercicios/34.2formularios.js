//Dibuja el flujo para convertir kilómetros a millas.

const entrada = document.getElementById("kilometros");
const boton = document.getElementById("convertir");
const salida = document.getElementById("millas");

function conversion(kilometros) {
    let millas = kilometros * 0.62; 
    return `La conversión es: ${millas}`;
}

function mostrarConversion() {
  const kilometros = Number(entrada.value); //kilometros recibe el valor del input convertido a número
  salida.textContent = conversion(kilometros); //La función conversion recibe ese valor correctamente
}

boton.addEventListener("click", mostrarConversion); //El evento se ejecuta al hacer clic en el botón

/**
 * HTML:
 * <input id="kilometros">
 * <button id="convertir">Convertir</button>
 * <p id="millas"></p>
 */
