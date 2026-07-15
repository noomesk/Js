/**
 * Contraseña correcta.

Crea una función llamada verificarPassword que recorra una lista de intentos de contraseña hasta encontrar la correcta.
js

 */
function verificarPassword() {
    const passwordCorrecta = "secreto";
    const intentos = ["hola", "1234", "admin", "secreto", "otro"];

    let posicion = 0;

    while (
       //Cuando posicion vale 5, ya no hay caja intentos[5]. Por eso primero preguntamos:
       posicion < intentos.length &&   //intentos.length es la cantidad de elementos en el array y va primero porque si no, puede dar error de que no existe el elemento en esa posición.. 
       //1. ¿La posición todavía apunta dentro del array?
   //Sí →
       passwordCorrecta !== intentos[posicion] //mientras no sea la contraseña correcta
       //2. ¿El valor de esa caja todavía no es la contraseña?
   //Sí →
   //3. Sigue buscando.
   //Es como revisar primero que todavía estás frente a una caja válida antes de mirar lo que hay dentro de ella.
    ) {
        console.log("Probando: " + intentos[posicion]); // Muestra el intento actual
        posicion++;
    }

    if (intentos[posicion] === passwordCorrecta) { // Si encontramos la contraseña correcta
        console.log("Probando: " + intentos[posicion]); // Muestra el intento actual    
        console.log("Contraseña correcta encontrada");
    } else {
        console.log("Contraseña no encontrada");
    }

    console.log("Acceso terminado");
}