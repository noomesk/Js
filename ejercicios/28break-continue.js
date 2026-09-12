/* Ejercicio: Tu turno con break y continue
¡Vamos a poner en práctica ambos conceptos en un solo ejercicio!

Tu Reto: El filtro del hotel de lujo
Imagina que eres el recepcionista de un hotel muy exclusivo. Tienes una lista de habitaciones 
en un pasillo (un array):

const habitaciones = [101, 102, "MANTENIMIENTO", 104, 105, "RESERVADO_VIP"];

Queremos que recorras las habitaciones con un bucle for...of y hagas lo siguiente:

Si encuentras una habitación que dice "MANTENIMIENTO", debes ignorarla y pasar de largo a la siguiente habitación. (Usa continue).
Si encuentras la habitación "RESERVADO_VIP", significa que el pasillo exclusivo termina ahí y no puedes avanzar más. Debes detener tu recorrido por completo. (Usa break).
Para cualquier otro número de habitación normal, debes imprimir en consola: "Entregando llave de habitación " + habitacion.

Resultado esperado en consola:
Entregando llave de habitación 101
Entregando llave de habitación 102
Entregando llave de habitación 104
Entregando llave de habitación 105
 */ 

const habitaciones = [101, 102, "MANTENIMIENTO", 104, 105, "RESERVADO_VIP"];

//recorrer las habitaciones con un bucle for of...

for (const hab of habitaciones) {
        if (hab === "MANTENIMIENTO") {
            continue; // Salta de inmediato a la siguiente vuelta i++
        } else if (hab === "RESERVADO_VIP") {
            break;  // Detiene el bucle por completo
        } else {
            console.log("Entregando llave de habitación " + hab);
        }
}


/* El for...of es un bucle automatizado de alto nivel.
Él mismo lleva su propio contador y puntero interno ocultos en la memoria de JavaScript.
Sabe exactamente en qué posición va y cuándo detenerse sin que tú tengas que escribir ningún contador.
Por eso tu código es tan limpio: no necesitas ningún contador manual. ¡El bucle lo hace todo por ti tras bambalinas!

trón: break y continue son herramientas de control de flujo que nos permiten alterar el
 comportamiento estándar de un bucle sobre la marcha. Son ideales para optimizar el rendimiento
del código evitando procesar datos innecesarios (como habitaciones cerradas o en mantenimiento).*/ 