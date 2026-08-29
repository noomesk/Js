//rechaza cantidades no positivas y solicitudes mayores que los cupos
function puedeReservar(cupos, solicitados) {
  if (solicitados <= 0) return false;
  if (solicitados > cupos) return false;
  return true;
}

console.log(puedeReservar(5, 2));
