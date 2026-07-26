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

// consejo senior: 

/*
Como tu código ya es excelente, solo te muestro una variante que verás mucho en producción.
 Como los Template Literals permiten meter operaciones matemáticas directamente dentro del ${}, 
 podrías haber ahorrado una línea de código escribiéndolo así:


function tablaMultiplicar(numero) {
    for(let i=1; i<=10; i++) {
        // Hacemos la operación directamente dentro del string
        console.log(`${numero} x ${i} es ${numero * i}`);
    }
}   */ 