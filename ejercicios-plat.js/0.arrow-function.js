//Una función flecha es simplemente otra forma de escribir una función, más corta

// Función normal (tradicional)
function multiplicarPorDos(numero) {
  return numero * 2;
}

// Función flecha (arrow function) — MISMO resultado
const multiplicarPorDos = (numero) => {
  return numero * 2;
};

// Función flecha, versión CORTA (sin llaves, cuando es una sola línea)
const multiplicarPorDos = (numero) => numero * 2;

//Se lee: "dado un numero, entonces devuelve numero * 2"
//  — justo como en matemáticas: entrada => salida.

//otro:
const saludar = (nombre) => `Hola, ${nombre}`;
console.log(saludar("Angie")); // "Hola, Angie"S

//de una sola línea otro:
const doble = (n) => n * 2; // súper corta, sin "return", sin llaves
//vs funcion normalita:-----------------------------------------------
function doble(n) {
  return n * 2; // necesitas 3 líneas, {} y la palabra "return"
}
//--------------------------------------------------------------------
//Cuando tiene varias líneas (necesitas { } y return, como función normal):
const doble = (n) => {
  const resultado = n * 2;
  return resultado;
};
//no es mucho más corta que la función normal, 
// solo cambia el estilo (function nombre() {} vs const nombre = () => {})