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