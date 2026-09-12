/* Escribe una función:

imprimirImpares(n)

Debe imprimir:

1
3
5
7
9
...

hasta n.*/

function imprimirImpares(n) { 
  for (let i = 1; i <= n; i++) {

     if (i % 2 === 1) { // aqui es mejor escribir: if (i % 2 !== 0)
        console.log(i);
     }
    }
}

imprimirImpares(10); // Imprime los números impares del 1 al 10