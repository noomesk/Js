/**Escribe una función:

imprimirExceptoCinco(n)

Debe imprimir todos los números del 1 hasta n, excepto el 5. */

function imprimirExceptoCinco(n) { 
  for (let i = 1; i <= n; i++) {
    if (i === 5) {
      continue;
    }

    console.log(i);
  }
}

imprimirExceptoCinco(8);