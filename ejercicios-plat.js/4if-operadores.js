function puedeComprar(total, hayInventario) {
  if (total >= 50 && hayInventario) {
    return "aceptada";
  }
  return "rechazada";
}
console.log(puedeComprar(50, true));

//ejercicio de clasificar temperaturas:
function clasificarTemperatura(grados) {
  // Menos de 10: "frío". De 10 a 24: "templado". Desde 25: "calor".
  if (grados < 10){
     return "frío";
  } else if (grados > 10 && grados < 24){
    return "templado";
  } 
  return "calor";  
}

//Con once sale por el primer return.
// Con setenta falla la primera condición y cumple la segunda. 
// Con treinta llega al retorno final.
function tarifa(edad) {
  if (edad < 12) return "infantil";
  if (edad >= 65) return "mayor";
  return "general";
}

//reto debbug:
function puedeRegistrarse(edad) {
  if (edad >= 18){
    return true;
  }
  return false;
}


//DOCUMENTACIÓN:
//control de flujo y manejo de errores: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
//op lógicos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_AND