//patrones de algoritmos

/**function sumar(numeros) {
  let total = 0;
  // Falta actualizar el estado en cada vuelta.
  return total;
}

console.log(sumar([2, 3, 5])); */

function sumar(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}

console.log(sumar([2, 3, 5]));

/**Completa sumar con una sola pasada. Una lista vacia debe devolver 0 y 
 * la función debe revisar todos los elementos recibidos
 */
function sumar(numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
}

console.log(sumar([2, 3, 5]));