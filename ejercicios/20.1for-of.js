/*  Ejercicio: Tu turno con for...of
Vamos a aplicar únicamente lo que acabamos de construir.

Tu Reto: El Detector de Números Pares
Tienes una lista de números en un array:
const listaNumeros = [1, 4, 7, 10, 15, 18];
Quiero que escribas un código usando un bucle for...of que recorra esa lista.
Por cada número, si el número es par, debes imprimir en la consola: "El número X es par". 
(Si es impar, no hace nada, simplemente lo ignora). */

const listaNumeros = [1, 4, 7, 10, 15, 18];

for (const numero of listaNumeros) {
        if (numero % 2 === 0) {
            console.log(`El número: ${numero} es par`);
        }
}
