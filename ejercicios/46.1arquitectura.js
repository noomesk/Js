//Propón arquitectura para un registro de lecturas.
function registroLecturas(pendientes, completadas) {
  const total = pendientes + completadas;
  return "• Total: " + total + "\n• Pendientes: " + pendientes; //lo imprime como lista \n
}

console.log(registroLecturas(3, 2));

// en html para q salga como lista, seria distinto:

/** return "Total: " + total + "<br>Pendientes: " + pendientes; */