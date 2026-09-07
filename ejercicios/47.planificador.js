// completa: plan es válido:

function esPlanValido(texto, prioridad) {
  // prioridad llega desde el select como texto: "1", "2" o "3".
  return true;
}

console.log(esPlanValido("Estudiar", "2"));

//Completa esPlanValido: Rechaza texto vacio o de espacios, prioridad llega desde 
//el select como "1" "2" o "3"; cualquier otro texto se rechaza.
//No uses DOM dentro de la regla
//solución: 
function esPlanValido(texto, prioridad) {
 if (texto.trim() === "") return false;
  return prioridad === "1" || prioridad === "2" || prioridad === "3"
  
}

console.log(esPlanValido("Estudiar", "2"));