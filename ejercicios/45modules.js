// reglas.js exporta una regla pura; no conoce botones ni HTML.
function precioConImpuesto(precio, tasa) {
  return precio + precio * tasa;
}

console.log(precioConImpuesto(100, 0.19));

//Ahora completa precio compuesto como regla independiente del DOM
//Devuelve precio más precio por tasa:

// Imagina esta función en reglas.js.
function precioConImpuesto(precio, tasa) {
  return precio + (precio * tasa);
}

console.log(precioConImpuesto(100, 0.19));

//interfaz conoce total, reglas no conoce interfaz ni document. 
//La dependencia tiene una sola dirección.
// reglas.js
export function total(precio, cantidad) { return precio * cantidad; }
// interfaz.js
import { total } from "./reglas.js";

/**¿Cómo sé qué archivo debe contener una función? 
 * Ponla junto a los datos o reglas que conoce. 
 * Si necesita DOM, pertenece a interfaz; si calcula sin DOM, pertenece a reglas. */