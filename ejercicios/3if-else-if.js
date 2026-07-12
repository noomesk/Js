//Escribe una función llamada: clasificarNumero(numero)
/* Debe retornar:

"Positivo" → si el número es mayor que 0.
"Negativo" → si el número es menor que 0.
"Cero" → si el número es exactamente 0. */

function clasificarNumero(numero) {
    if (numero > 0) {
        return "Positivo"; 
    } else if (numero <0) {
        return "Negativo"; 
    } else {
        return "Cero";
    }
}

console.log(clasificarNumero(5)); // Positivo
console.log(clasificarNumero(-3)); // Negativo
console.log(clasificarNumero(0)); // Cero