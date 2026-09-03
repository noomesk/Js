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

