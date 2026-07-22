/**
 * Ejercicio 3: El acumulador .reduce()
 * Explicación: .reduce() toma un array y lo "reduce" a un 
 * solo valor (un número, un string, etc.). 
 * Funciona con un acumulador (como una alcancía).
 */

const promedio = estudiantesJSON.reduce((suma, estudiante) => {
    return suma + estudiante.nota; // Sumamos la nota actual al acumulador
}, 0) / estudiantesJSON.length; // El '0' al final es el valor inicial de 'suma'