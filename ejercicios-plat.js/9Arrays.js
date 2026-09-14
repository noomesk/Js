//Arrays: Una lista ordenada
//Representa colecciones, accede por índice y modifica una lista con intención.
const tareas = ["leer", "practicar"];
console.log(tareas[1]);  //las posiciones comienzan en 0
tareas.push("repasar"); //agrega un elemento al final y modifica la lista (pop elimina el ultimo)
console.log(tareas.length); //indica cuántos elementos existen

//antes de llamar un método pregunta si muta
//Los índices van de cero a length menos uno. 
//Algunos métodos mutan el array y otros crean uno nuevo.

//Ejercicio: Completa primeraYUltima para arrays no vacios. Usa el primer y último elemento:

function primeraYUltima(lista) {
  // Devuelve un texto: "primera / última".
   const posicion = lista.length - 1; 
   const ultima = lista[posicion];
   const primera = lista[0];
    const result =  `${primera } / ${ ultima}`;
    return result;
}

//"a / c" lee dos extremos
// "sol / luna" No fija el tamaño

//ejemplo2:
//push modifica colores y devuelve la nueva longitud. El primer elemento sigue en el índice cero
const colores = ["azul", "verde"];
colores.push("rojo");
console.log(colores[0], colores.length);

/**En la referencia de Array revisa primero access, 
 * length, push, pop, includes y slice. Para cada método anota retorno
 *  y si copia o modifica.
 * Usar length como índice devuelve undefined. 
 *Asignar el retorno de push esperando un array guarda un número. */

//includes(): si un array incluye un valor esp
const frutas = ["manzana", "pera", "uva"];

console.log(frutas.includes("pera"));   // true
console.log(frutas.includes("mango"));  // false

//slice(): 
/**Extrae una porción (un pedazo) del array, sin tocar el original. 
 * Le indicas desde dónde y hasta dónde quieres "cortar" (aunque en realidad 
 * no corta, solo copia esa parte). */
array.slice(inicio, fin)
/**inicio: índice donde empieza a copiar (incluido)
 * fin: índice donde se detiene (no incluido — corta justo antes de esa posición)
 * z.b.
 */

const frutisha = ["manzana", "pera", "uva", "kiwi", "mango"];

const parte = frutisha.slice(1, 3);
console.log(parte);    // ["pera", "uva"]  (desde índice 1 hasta antes del 3)
console.log(frutisha);   // ["manzana", "pera", "uva", "kiwi", "mango"] (¡original intacto!)

//ejemplo sin el segundo parámetro, hasta el final:
const parte2 = frutisha.slice(2);
console.log(parte2); // ["uva", "kiwi", "mango"]
//Retorna: un nuevo array (una copia parcial)

//push: 
const frutos = ["manzana", "pera"];
const resultado = frutos.push("uva");

console.log("frutos:", frutos);
console.log("resultado:", resultado);