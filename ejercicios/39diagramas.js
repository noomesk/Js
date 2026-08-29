//rechaza cantidades no positivas y solicitudes mayores que los cupos
function puedeReservar(cupos, solicitados) {
  if (solicitados <= 0) return false;
  if (solicitados > cupos) return false;
  return true;
}

console.log(puedeReservar(5, 2));

//ese if se usa en la clase de pseudocódigo 
/**
 * LEER saldo
SI saldo < 0
  MOSTRAR "Revisar"
SI NO
  MOSTRAR "Disponible"
 */

  function leerSaldo(saldo) {
  if (saldo < 0) return "revisar";
  return "Disponible";
}

console.log(leerSaldo(300));