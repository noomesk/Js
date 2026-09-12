/**Escribe una función:

buscarNumero(n)

Debe recorrer los números del 1 al 100.

Cuando encuentre el número n:

Lo imprime.
Sale inmediatamente del bucle usando break. */
function buscarNumero(n) { 

    for (let i = 1; i <= 100; i++) {

        if (i === n) {

        console.log(i);
        break; //dentro del for, pero debajo de console.log(i) para que se ejecute antes de salir del bucle.

        }

    } 
}

buscarNumero(25);
