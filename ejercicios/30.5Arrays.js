/**Ejercicio: sumar números mayores que 10
Escribe una función llamada sumarMayoresDeDiez(numeros) que:

Reciba un array de números.
Recorra todos sus elementos usando un for.
Sume únicamente los números mayores que 10.
Devuelva la suma total.
Si el array está vacío o no contiene números mayores que 10, debe devolver 0. */

function sumarMayoresDeDiez(numeros){
    let total = 0; 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10 ) { // para comprobar si el elemento actual es mayor q 10
            total += numeros[i]  //va acumulando la suma y en return devuelve esa suma
        }
    }
        return total; 
}

console.log(sumarMayoresDeDiez([4, 12, 7, 20])); 
/**
 * Para contar, aumenta una unidad:
total++;

Para sumar el valor del elemento, necesitas añadir numeros[i]:
total += numeros[i]
 */