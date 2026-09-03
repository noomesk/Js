//responsabilidades y módulos 
//transfiere lo aprendido:
//Ejercicio: Divide una calculadora de gastos en datos, reglas e interfaz.
//----------------------------------------------------------------------

//suma de gastos
function contarGastos(gastos) {
  let suma = 0;
  for (let i = 1; i <= gastos; i++) {
    suma = suma + i; // acumulador: suma = suma + i; o suma += i; y pues i serian los gastos.
  }

  return suma;
}

//---------------

// Un objeto con propiedades
const gastos = {
  nombre: "shampoo",
  precio: 20000,
  categoria: "aseo"
};

// Una lista de objetos
const personas = [
  { nombre: "shampoo", precio: 2000, categoria: "aseo" },
  { nombre: "panTajado", precio: 3000, categoria: "comida" }
];

//--------------------------------------------------------
// Para recorrer un array necesitas iterar por índices o usar for...of
//Ejemplo de referencia — sumar los precios de una lista de productos:
const productos = [
  { nombre: "Manzana", precio: 100 },
  { nombre: "Pan", precio: 50 }
];

function sumarPrecios(productos) {
  let suma = 0;
  for (let i = 0; i < productos.length; i++) {
    suma += productos[i].precio; // accedo a la propiedad "precio" de cada objeto
  }
  return suma;
}

console.log(sumarPrecios(productos)); // 150

//O con for...of (más simple):
function sumarPrecios(productos) {
  let suma = 0;
  for (const producto of productos) {
    suma += producto.precio;
  }
  return suma;
}

//Filtrar por categoria:
const productos = [
  { nombre: "Manzana", categoria: "fruta" },
  { nombre: "Pan", categoria: "panaderia" },
  { nombre: "Pera", categoria: "fruta" }
];


function filtrarPorCategoria(productos, categoria) {
  return productos.filter(producto => producto.categoria === categoria);
}

console.log(filtrarPorCategoria(productos, "fruta"));
// [{nombre: "Manzana", categoria: "fruta"}, {nombre: "Pera", categoria: "fruta"}]


//-----------arrow function ejem:

//forma larga de la arrow function:
function filtrarPorCategoria(productos, categoria) {
  let resultado = [];
  for (const producto of productos) {
    if (producto.categoria === categoria) {
      resultado.push(producto);
    }
  }
  return resultado;
}

//arrow function más corta:
function filtrarPorCategoria(gastos, categoria) {
  return gastos.filter(gasto => gasto.categoria === "aseo"); //no sé si donde puse "aseo" iba aseo o categoria
}
//filter es solo una forma más corta de escribir ese for + if + push.

console.log(filtrarPorCategoria(gastos, "aseo"));
// [{nombre: "Manzana", categoria: "fruta"}, {nombre: "Pera", categoria: "fruta"}]



//-----------mi ejercicio, solución:

//ORGANIZACIÓN EN MÓDULOS
//---------------------------------------
//datos.js:
const gastos = [
  { nombre: "shampoo", precio: 2000, categoria: "aseo" },
  { nombre: "panTajado", precio: 3000, categoria: "comida" },
  { nombre: "jabon", precio: 5000, categoria: "aseo" }
];

//---------------------------------------
//reglas.js

//contiene las funciones puras:

//función total gastos:
function totalGastos(gastos) {
  let suma = 0;
  for (let i = 0; i < gastos.length; i++) {
    suma += gastos[i].precio; // accedo a la propiedad "precio" de cada objeto
  }
  return suma;
}


//función promedio gastos: 
function promedioGastos(gastos) {

  let suma = 0;
  for (const gasto of gastos) {
    suma += gasto.precio; //corregido
  }
  return suma / gastos.length; // división

}

//función filtrar por categoria:
function filtrarPorCategoria(gastos, categoria) {
  return gastos.filter(gasto => gasto.categoria === categoria); //corregido
}


//como este es un ejercicio ilustrativo no importa, peeeeeeero lo siguiente deberia estar en 3 archivos diferentes:
//Un archivo llamado datos.js → con solo el export const gastos = [...]
//Un archivo llamado reglas.js → con las 3 funciones exportadas
//Un archivo llamado interfaz.js → con los imports y los console.log



//interfaz.js:
//primero el export (xq toca importar desde un archivo local)

////datos.js exporta datos
export const gastos = [
  { nombre: "shampoo", precio: 2000, categoria: "aseo" },
  { nombre: "panTajado", precio: 3000, categoria: "comida" },
  { nombre: "jabon", precio: 5000, categoria: "aseo" }
];


//reglas.js (exporta las funciones):
export function totalGastos(gastos) {
  let suma = 0;
  for (let i = 0; i < gastos.length; i++) {
    suma += gastos[i].precio; 
  }
  return suma;
}

//función promedio gastos: 
export function promedioGastos(gastos) {

  let suma = 0;
  for (const gasto of gastos) {
    suma += gasto.precio; //corregido
  }
  return suma / gastos.length; // división

}

//función filtrar por categoria:
export function filtrarPorCategoria(gastos, categoria) {
  return gastos.filter(gasto => gasto.categoria === categoria); //corregido
}




//interfaz.js (importa AMBAS cosas: datos Y reglas):

//esto en teoria deberia estar en 3 archivos separados
// pero como es para practicar pues no importa :p

// ====== datos.js (simulado) ======
const gastos = [
  { nombre: "shampoo", precio: 2000, categoria: "aseo" },
  { nombre: "panTajado", precio: 3000, categoria: "comida" },
  { nombre: "jabon", precio: 5000, categoria: "aseo" }
];

// ====== reglas.js (simulado) ======
function totalGastos(gastos) { /* ... */ }
function promedioGastos(gastos) { /* ... */ }
function filtrarPorCategoria(gastos, categoria) { /* ... */ }

// ====== interfaz.js (simulado) ======
console.log(totalGastos(gastos));
console.log(promedioGastos(gastos));
console.log(filtrarPorCategoria(gastos, "aseo"));




