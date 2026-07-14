//escribe un for, que recorra los numeros del 1 al n y los sume, retornando el resultado.

function sumarHasta(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma = suma + i; // acumulador: suma = suma + i; o suma += i;
  }

  return suma;
  } 