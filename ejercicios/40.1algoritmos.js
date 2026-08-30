/**Completa sumar con una sola pasada. Una lista vacia debe devolver 0 y 
 * la función debe revisar todos los elementos recibidos
 */
function sumar(numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]; //suma el valor de numeros[i] a total
    //numeros[i]: obtiene el elemento de la posición i del arreglo numeros.
  }

  return total;
}

console.log(sumar([2, 3, 5]));