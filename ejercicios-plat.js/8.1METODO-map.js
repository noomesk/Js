//map() — El más usado en frontend:
//map() recorre el array uno por uno (como haría un for), y en cada vuelta, te
//  "presta temporalmente" el elemento actual para que hagas algo con él.
//Transforma cada elemento de un array y devuelve un nuevo array con los resultados.
//Es la base para renderizar listas en templates
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