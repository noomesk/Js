//conserva 3 caminos separados 
//para los diferentes valores, 0 + y - 

function clasificarSaldo(saldo) {
  if (saldo > 0) return "positivo";
  if (saldo < 0) return "negativo";
  return "cero";
}
console.log(clasificarSaldo(0));