const { act } = require("react");

//
function enRango(valor, minimo, maximo) {
  return valor >= minimo && valor <= maximo;
}

//actualizar cantidad:
function actualizarCantidad(actual, accion) {
  if (accion === "sumar") return actual + 1;
  if (accion === "restar" && actual > 0) return actual - 1;
  return actual;
}

console.log(actualizarCantidad(2, "sumar")); //texto del DOM

//leer el número desde el DOM crea una segunda fuente de vdd
//por otra parte puede cambiarlo y dejar la pantalla en desacuerdo
//con el estado real

//ejercicio:
function actualizarCantidad(actual, accion) {
  // La función debe producir el siguiente estado.
  if (accion === "sumar") return actual + 1; 
   if (actual > 0 && accion === "restar") return actual - 1;  // ojo con comparar dos veces lo mismo!
   
  return actual;
}

console.log(actualizarCantidad(2, "sumar"));   