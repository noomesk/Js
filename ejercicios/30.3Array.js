    //Ejercicio: contar números positivos
    /**
    Recorra todos sus elementos con un for.
    Cuente cuántos números son mayores que 0.
    Devuelva la cantidad total.
    Si el array está vacío, debe devolver 0.} numeros 
    * 
    */


    function contarPositivos(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]> 0) { //para comprobar si el # actual es positivo
            total = total + 1; // si encuentro un positivo incremento su valor 
            
        }
    console.log(total); //   
    
    }
    return total;
    }



console.log(contarPositivos([3, -1, 5])); //Pa llamar a la función