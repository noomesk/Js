//map() — El más usado en frontend:
//un método que YA tiene un bucle interno programado
//map() recorre el array uno por uno (como haría un for), y en cada vuelta, te
//  "presta temporalmente" el elemento actual para que hagas algo con él.
//Transforma cada elemento de un array y devuelve un nuevo array con los resultados.
//Es la base para renderizar listas en templates
//map() es una función que por dentro, ya sabe cómo recorrer un array 
// (usa algo parecido a un for internamente, pero tú no lo ves — está "escondido" 
// dentro de la implementación de map()).
//Tú solo le dices QUÉ hacer con cada elemento (usando una función, 
// que puede ser flecha o normal), y map() se encarga de aplicar esa función 
// a cada elemento, uno por uno, automáticamente.

const productos = [
  { nombre: "Laptop", precio: 1000000 },
  { nombre: "Mouse", precio: 200000 }
];

const nombres = productos.map(p => p.nombre); // de productos (el array completo), por cada producto => dame su nombre
// productos.map(p => p); // esto devolvería los objetos completos, sin cambios
//O si quisieras ambas propiedades pero en otro formato:
//productos.map(p => `${p.nombre}: $${p.precio}`);
//resultado: ["Laptop: $1000", "Mouse: $20"]
console.log(nombres); // ["Laptop", "Mouse"]

//ahora todo lo anterior:
//Es conceptualmente equivalente a escribir esto con un for:
const nombres = [];
for (let i = 0; i < productos.length; i++) {
  const p = productos[i];      // "p" es el elemento actual, en cada vuelta
  nombres.push(p.nombre);      // decides qué hacer con él
}
//map() es simplemente una forma más corta y elegante de escribir ese mismo patrón
//  (recorrer + transformar + guardar en un nuevo array).

const estudiantes = [
  { nombre: "Marta", nota: 85 },
  { nombre: "Carlos", nota: 60 },
  { nombre: "Elena", nota: 92 }
];

// 1. Usa map() para crear un array con solo las notas de todos los estudiantes
const notas = estudiantes.map(e => e.nota);

// 2. Usa map() para crear un array con textos como "Marta: 85"
const resumen = estudiantes.map(e => `${e.nombre}: ${e.nota}`);

console.log(notas);
console.log(resumen);

//¿cómo acceder a varias propiedades at the same time?:
const productos = [
  { nombre: "Laptop", precio: 1000, ubicacion: "Bogotá", color: "gris", marca: "HP", stock: 5 }
];

const resumido = productos.map(p => {
  return { nombre: p.nombre, precio: p.precio, ubicacion: p.ubicacion };
});

console.log(resumido);
// [{ nombre: "Laptop", precio: 1000, ubicacion: "Bogotá" }]

//versión corta:
const resumido = productos.map(p => ({ 
  nombre: p.nombre, 
  precio: p.precio, 
  ubicacion: p.ubicacion 
}));
/**Cuando quieres devolver un objeto directamente en una arrow function de una sola línea, 
 * necesitas envolverlo en paréntesis ( { } ), porque si no, JavaScript confunde 
 * las llaves { } del objeto con las llaves de un bloque de código: */


//RECORDERIS: .map() es un método que ya tiene un bucle interno, y que necesita que 
// le pases una función (puede ser flecha o no) para saber qué hacer con cada elemento 
// Podrías usar una función normal en vez de flecha, y funcionaría igual:
productos.map(function(p) {
  return p.nombre;
});

// O la versión flecha (más corta, más usada en la práctica):
productos.map(p => p.nombre);