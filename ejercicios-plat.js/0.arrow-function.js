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