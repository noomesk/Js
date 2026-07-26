/* Cuando usas un bloque if / else if / else, el ordenador evalúa las condiciones de arriba a abajo.
 En cuanto una condición se cumple (true), ejecuta su código e ignora por completo todas 
 las que vienen abajo. 
 
 Ejercicio: Volt Ampere:
 Imagina un juego donde:

Si un número es divisible por 2, imprimimos "Volt".
Si es divisible por 7, imprimimos "Ampere".
Si es divisible por ambos (2 y 7, es decir, 14), imprimimos "VoltAmpere".
Si no, imprimimos el número.*/

// ¡CÓDIGO CON ERROR DE LÓGICA!
let n = 14;

if (n % 2 === 0) {
    console.log("Volt");
} else if (n % 7 === 0) {
    console.log("Ampere");
} else if (n % 2 === 0 && n % 7 === 0) {
    console.log("VoltAmpere");
} else {
    console.log(n);
}