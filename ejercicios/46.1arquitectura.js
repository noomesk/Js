//Propón arquitectura para un registro de lecturas.
function registroLecturas(pendientes, completadas) {
  const total = pendientes + completadas;
  return "• Total: " + total + "\n• Pendientes: " + pendientes; //lo imprime como lista \n
}

console.log(registroLecturas(3, 2));

// en html para q salga como lista, seria distinto:

/** return "Total: " + total + "<br>Pendientes: " + pendientes; */

//RETO: la regla de resumen conoce la pantalla:
function resumen(pendientes) {
  document.getElementById("salida").textContent = pendientes;
}
//una regla pura debe poder ejecutarse sin el HTML (osea el document.get... mno tiene sentido ahí )
//Devuelve el texto, otra parte podrá mostrarlo
//solución:  ()
function resumen(pendientes) {
  return "Pendientes: " + pendientes;
}