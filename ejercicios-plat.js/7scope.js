const descuentoGlobal = 5;
function precioFinal(precio, descuento) {
  // Usa solo los parámetros de la función.
  return precio - descuento;
}


/**El alcance determina dónde puede resolverse un nombre.
 *  Los parámetros viven dentro de la función. let y const creados 
 * en un bloque no salen de ese bloque. */

function etiqueta(nombre) {
  const prefijo = "Hola";
  return prefijo + ", " + nombre;
}

/**En este caso prefijo y nombre existen durante la llamada.
 *  El texto devuelto sí puede salir. */

/**En MDN busca “Ámbito de función” y “Ámbito de bloque”. 
 * MDN significa MDN Web Docs (anteriormente llamado Mozilla Developer Network).
 * Básicamente la documentación más confiable para  HTML, CSS, JavaScript, 
 * y APIs del navegador en general.
 * . Dibuja cajas alrededor de llaves y marca dónde nace cada nombre.
 * 
 * DOCUMENTACIÓN:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#%C3%A1mbito_de_una_funci%C3%B3n
 * AMBITOS Y CIERRES O SCOPE.
 */