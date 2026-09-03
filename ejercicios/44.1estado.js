//Restar desde 3 produce dos y sumar produce 4 

function transicion(actual, accion) {
  if (accion === "restar") return actual - 1;
  return actual + 1 ;
}