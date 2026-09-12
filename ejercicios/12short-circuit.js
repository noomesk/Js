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

//awwwnn no sé por qué pero me da ternurita este programita jaja
// este es Shortcircuit con OR, si el primer valor es verdadero, 
// se retorna ese valor, si es falso, se retorna el segundo valor.

//NOW: Shortcircuit con AND, si el primer valor es falso, se retorna ese valor,
// si es verdadero, se retorna el segundo valor.

function mostrarPanelAdmin(esAdmin) {
    esAdmin && console.log("Bienvenido, administrador");
}

/*¿Recuerdas qué hace el ejercicio?

Dice:

"Debe imprimir..."

No dice:

"Debe retornar..."

Entonces aquí lo correcto es:

console.log(...)

No queremos devolver un valor.

Queremos mostrar un mensaje.*/