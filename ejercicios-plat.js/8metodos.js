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

//trim devuelve texto sin bordes, 
// toLowerCase devuelve minúsculas y endsWith devuelve un booleano:
const correo = "  ANA@EJEMPLO.COM ";
const limpio = correo.trim().toLowerCase();
console.log(limpio.endsWith(".com"));

/**
 * Un método se llama desde un receptor. length es una propiedad; 
 * trim(), includes() y startsWith() son métodos. 
 * Los métodos de string devuelven valores nuevos.
 */

//ejercicio2: Normaliza un nombre de usuario y comprueba si termina en un sufijo permitido.
const usuario = "  NOOMESK.COM ";
const normalizado = usuario.trim().toLowerCase();
console.log(normalizado.endsWith(".com"));

//DOCUMENTACIÓN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String


//--------------------------------------------------------------------------------------
function convertirYAnalizar(valor) {
  // 1. Convierte "valor" a string usando la función String() (SIN new)
  const textoConvertido = String(valor);
  // 2. Guarda el resultado en una variable llamada "textoConvertido"
  // 3. Usa typeof para verificar que el resultado sea de tipo "string"
  const tipoDeDato = typeof textoConvertido;
  // 4. Devuelve un objeto con esta forma:
  //    { texto: textoConvertido, tipo: "el tipo que obtuviste con typeof" }
  return { texto: textoConvertido, tipo: tipoDeDato };
 
}


console.log(convertirYAnalizar(789));
// Resultado esperado: { texto: "789", tipo: "string" }

console.log(convertirYAnalizar(true));
// Resultado esperado: { texto: "true", tipo: "string" }



 console.log("texto:" + texto); 

 //aceder a un caracter: ( ECMAScript 5)
 return "cat".charAt(1); // devuelve "a"
 //esta es + moderna:
 return "cat"[1]; // devuelve "a"


 // debe reconocer jpg mayus y min, otros formatos no 
 function esJpg(nombre) {
  const mayus = nombre.toLowerCase(); 
  return mayus.endsWith(".jpg");
}