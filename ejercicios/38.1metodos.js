//Compara la firma de toUpperCase, includes y push.

function normalizarNombre(nombre) {
  return nombre.trim().toUpperCase(); //trim quita espacios sobrantes, toUpperCase vuelve el string a mayúsculas

}

console.log(normalizarNombre("  angie "));

//ahora si quiero usar .push() necesito un array, xq no funciona
//en strings solitos, .push nececita un array, quedaria así:

const nombre = "  angie ";
const nombreNormalizado = nombre.trim().toUpperCase();

const lista = [nombreNormalizado];
lista.push("es genial");

console.log(lista);
//imprime esto: [ 'ANGIE', 'es genial' ]

//¿y si quiero que todo salga como una frase no separada?
//uso .join():

function normalizarNombre(nombre) {
  const frase = [
    nombre.trim().toUpperCase(),
    "es genial"
  ];

  return frase.join(" ");
}

console.log(normalizarNombre("  angie "));
//IMPRIME: ANGIE ES GENIAL


//más explícito y todo en mayúsculas:

function normalizarNombre(nombre) {
  const nombreMayusculas = nombre.trim().toUpperCase();
  const frase = [nombreMayusculas, "es genial"];
  return frase.join(" ");
}

//toUpperCase() se aplica a un string, no a un array.
//Por eso va sobre: nombre.trim()

//para pasar de string a array:
const texto = "ANGIE es genial";
const palabras = texto.split(" "); //split(" ") separa el texto cada vez que encuentra un espacio
//el resultado es un array:

console.log(palabras);
// ["ANGIE", "es", "genial"]


//integrado al código: 
const nombre = "  angie  ";
const partes = nombre.trim().toUpperCase().split(" ");

console.log(partes);
// ["ANGIE"]

// ahora como paso: De array a string
const palabras = ["ANGIE", "es", "genial"];
const frase = palabras.join(" "); //join(" ") une los elementos del array con un espacio

console.log(frase);
// "ANGIE es genial"

//aplicado a la función inicial:
function normalizarNombre(nombre) {
  const palabras = [
    nombre.trim().toUpperCase(),
    "es genial"
  ];

  return palabras.join(" ");
}

console.log(normalizarNombre("  angie "));

//salida: ANGIE es genial

//ejemplo con push() tambn funciona:
const palabras = [];
palabras.push("ANGIE"); //push() solo sirve para agregar al array.
palabras.push("es genial");

console.log(palabras.join(" ")); //join() es el que convierte el array en una sola frase


//array y string resumen:
const texto = "hola mundo";
const array = texto.split(" ");   // string -> array

const frase = array.join(" ");    // array -> string