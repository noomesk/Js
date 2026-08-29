 /* LEER saldo
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

//Modela la decisión de aceptar una reserva.

function aceptarReserva(reserva) {
  if (reserva > 0) return "Reserva aceptada";
  return "Recerva no disponible";
}

console.log(aceptarReserva(2));