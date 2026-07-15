/**Queremos que cuando el usuario haga un clic en un botón con el id btn-saludo, se muestre un mensaje en la consola del navegador que diga: "¡Hola, estoy aprendiendo JavaScript!".

Aquí tienes el HTML:

html


<button id="btn-saludo">Saludar</button>
Tus instrucciones para responder en el chat:
Paso 1: Escribe la línea de JavaScript para seleccionar el botón usando document.querySelector y guárdalo en una variable llamada miBoton. (Recuerda usar el escudo protector ?. por si acaso).
Paso 2: Escribe el código para agregarle un evento de clic (addEventListener) a esa variable miBoton usando una función flecha (() => { ... }).
Paso 3: Dentro de la función flecha, usa console.log() para mostrar el mensaje de saludo. */

//mi respuesta: 
/**
 * const miBoton = document.querySelector("#btn-saludo?."); //no sé donde va el escudo protector 
miBoton?.addEventListener("click", () => {
  console.log("¡Hola, estoy aprendiendo JavaScript!");
});
 */

//respuesta corregida:

// 1. Buscamos el elemento en el HTML (sin signos extraños en el texto de búsqueda)
const miBoton = document.querySelector("#btn-saludo"); 

// 2. Aquí aplicas el escudo protector sobre la variable antes de usar addEventListener
miBoton?.addEventListener("click", () => {
  console.log("¡Hola, wachi sois geniale' locoooo!");
});