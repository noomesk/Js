/**
 * Ejercicio: contar números pares
Escribe una función llamada contarPares(numeros) que:

Reciba un array de números.
Recorra todos sus elementos usando un for.
Cuente cuántos números son pares.
Devuelva la cantidad.
Si el array está vacío, devuelva 0.
 */

function contarPares(numeros) { // numeros es el array q le paso al llamar la función
    let total = 0; 
    
    for( let i = 0; i < numeros.length; i++) { //El for recorre desde el índice 0 hasta el último
        if(numeros[i] % 2 === 0){ //pa ver si el valor actual es par 
           total += 1;
        }
       
    }
    
    return total; 
}

console.log(contarPares([2, 5, 8, 11])); //para llamar a la función desde afuera
//sjdhjshd
