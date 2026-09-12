//un método es una función que se llama desde un receptor 
//pregunta: ¿qué recibe? ¿qué devuelve? y si modifica el original

/**El ejemplo: limpia espacios
 * convierte a minúsculas  y depsués pregunta si comienza con una 
 * palabra (3ra const) cada retorno alimenta la siguiente llawmada
 */

const entrada = "  JavaScript Claro  ";
const normalizada = entrada.trim().toLowerCase();
const comienzaConJs = normalizada.startsWith("javascript");
console.log(normalizada);
console.log(comienzaConJs);


//ejercicio:
//Completa esComandoGuardar: Quita espacios exteriores, ignora mayúsculas
// y devuelve true si el texto comienza con "guardar"
function esComandoGuardar(texto) {
  // Acepta textos como "  GUARDAR archivo".
  const entrada = texto.trim().toLowerCase();
  const guardar = entrada.startsWith("guardar");
  if (guardar === true){
    return true;
  } return false;
}

console.log(esComandoGuardar("  GUARDAR archivo"));

//eso se puede simplificar, el if:
function esComandoGuardar(texto) {
  // Acepta textos como "  GUARDAR archivo".
  const entrada = texto.trim().toLowerCase();
  const guardar = entrada.startsWith("guardar");
if (guardar) {
  return true;
}
return false;
}

console.log(esComandoGuardar("  GUARDAR archivo"));
//Como guardar ya es true o false (un booleano), no necesitas compararlo explícitamente con true. 
// Es como preguntar "¿es verdad que es verdad?" — es redundante.

//mejora 2:Ni siquiera requiero el if jejej:
//Como guardar ya contiene el resultado true o 
// false que necesito devolver, puedo simplemente escribir:

function esComandoGuardar(texto) {
  const entrada = texto.trim().toLowerCase();
  return entrada.startsWith("guardar");
}
//Porque startsWith() ya me devuelve exactamente lo que la función 
// necesita devolver (true o false), no hace falta pasar por 
// un if para decidir qué devolver — simplemente devuelvo ese resultado directamente MUAJEJE