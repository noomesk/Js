/*  Ejercicio: Tu turno con while
Vamos a aplicar el while en un caso donde no sabemos cuántas vueltas daremos.

Tu Reto: El contador de batería baja
Imagina que estás programando un teléfono móvil. El teléfono tiene un porcentaje de batería actual 
y queremos que simule el consumo de energía mientras el teléfono esté encendido.

let bateria = 25; // Porcentaje inicial
// Quiero que escribas un bucle while que haga lo siguiente:

La condición debe ser: Mientras la batería sea mayor que 0.
Dentro del bucle, debes simular que la batería se gasta de 5 en 5 (es decir, restarle 5 a la variable bateria).
En cada vuelta, imprime en la consola: "Batería al: [bateria]%".
Fuera del bucle (cuando termine), imprime: "¡Teléfono apagado!".
Resultado esperado en consola:

Batería al: 20%
Batería al: 15%
Batería al: 10%
Batería al: 5%
Batería al: 0%
¡Teléfono apagado!*/ 


let bateria = 25; // Porcentaje inicial


// Mientras que bateria sea mayor o igual q cero...
while (bateria > 0) {
    // bateria menos 5 
    bateria = (bateria - 5 ); 

    console.log("Bateria al: " + bateria + "%");
}

console.log("¡Telefóno apagado!");