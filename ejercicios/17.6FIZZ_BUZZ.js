function fizzBuzz(n) {

  let resultados = [];
  
  for(let i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultados.push("FizzBuzz");  
    } else if (i % 3 === 0) {
        resultados.push("Fizz");
    }  else if (i % 5 === 0) {
        resultados.push("Buzz");
    } else {
        resultados.push(i);
    } 

}

      return(resultados);

}

//llamada de prueba, asi llamo a la función:
console.log(fizzBuzz(15));

// para guardarlos en un ARREGLO, casi siempre uso: array.push(valor); 
    //push() significa literalmente "agregar al final del arreglo".

/* ejemplo de guardar en array:
let frutas = [];

frutas.push("Manzana");
frutas.push("Pera");
frutas.push("Banano");

console.log(frutas); 

resultado:
["Manzana", "Pera", "Banano"] */ 

/* 
¿Qué suele ir en las condiciones dentro del for?

n nunca cambia. // el parámetro que recibe la función

i cambia todo el tiempo.

Por eso las condiciones deben preguntar por i. */ 