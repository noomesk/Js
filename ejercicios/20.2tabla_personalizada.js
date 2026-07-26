/* Ejercicio 1: "La Tabla de Multiplicar Personalizada"
Crea una función llamada tablaMultiplicar(numero) que imprima en la consola la tabla
 de multiplicar de ese número del 1 al 10, pero con un formato amigable. */

 function tablaMultiplicar(numero) {
   
    for(let i=1; i<=10; i++) {
        const resultado =  (numero * i);
        console.log(`${numero} x ${i} es ${resultado}`);
        }

    }


//llamo a la función:
tablaMultiplicar(3);