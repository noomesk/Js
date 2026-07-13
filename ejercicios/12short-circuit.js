/*Ejercicio 9 — Cortocircuito con ||

Completa la función:

function obtenerNombre(nombreUsuario) {

}

Debe retornar:
Si nombreUsuario tiene un valor (por ejemplo "Angie"), retornar ese nombre.
Si nombreUsuario es una cadena vacía (""), retornar:
"Anónimo"*/

function obtenerNombre(nombreUsuario) {
  const nombre = nombreUsuario || "Anónimo";
  return nombre;
}

console.log(obtenerNombre("Angie"));
console.log(obtenerNombre("Carlos"));
console.log(obtenerNombre("")); // Anonimo