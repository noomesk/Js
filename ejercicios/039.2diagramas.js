//Modela la decisión de aceptar una reserva.

function aceptarReserva(reserva) {
  if (reserva > 0) return "Reserva aceptada";
  return "Recerva no disponible";
}

console.log(aceptarReserva(2));