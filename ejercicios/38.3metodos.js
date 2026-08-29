//Haz que el programa devuelva que curso.js y app.js sean true
function terminaEnJs(nombre) {
  return terminaEnJs.endsWith()(".js");
}
console.log(terminaEnJs("curso.js"));

//---mi solución:

function terminaEnJs(nombre) {
  const respuesta = nombre.endsWith(".js"); //pregunta, termina con esto? (y lo pones en paréntesis lo q quieres evaluar)
  //el método .endsWith se aplica al parámetro, no a la función :3

  if (respuesta === true) {
    return respuesta;
  } else {
    return false;
  }
  
}
console.log(terminaEnJs("curso.js"));


//como .endsWith() ya devuelve un booleano, entonces
//una forma mejor y + limpia seria asi:

function terminaEnJs(nombre) {
  const resultado = nombre.endsWith(".js");
  return resultado;
}

console.log(terminaEnJs("app.js")); // true
console.log(terminaEnJs("index.html"));     // false

//se puede simplificar más xq no necesito guardar el resultado
//en una variable si solo voy a devolverlo:
function terminaEnJs(nombre) {
  return nombre.endsWith(".js");
}