//contar positivos:
function contarPositivos(lista) {
  let cantidad = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) cantidad++; //Encontré uno → aumento la cantidad en 1".
  }
  return cantidad;
}

//Traza paso a paso una suma de gastos de varios días y explica qué recuerda el acumulador.

function sumarGastos(gastos) {
  let total = 0;

  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i] > 0) total += gastos[i]; //suma el valor de numeros[i] a total
  } //Encontré un gasto → agrégalo al total que ya llevaba
  return total;
}

console.log(sumarGastos([100, 50, -20, 30])); //llamo a la función 