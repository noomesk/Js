/**
Ejercicio 2: Manipular el texto
Imagina que tenemos este HTML:

html

<!--<h1 id="mensaje">Texto Original</h1> -->
 <button id="btn-cambiar">Cambiar el texto</button>
// Tu objetivo: Queremos que al hacer clic en el botón con ID btn-cambiar, el texto del título h1 (con ID mensaje) cambie a:
 "¡Felicidades, cambiaste el texto con JS!".
*/

 // mi solución: 

const miTitulo = document.querySelector("#mensaje");
const miBoton = document.querySelector("#btn-cambiar");

miBoton?.addEventListener("click", () => {
  miTitulo.textContent = "¡Felicidades, cambiaste el texto con JS!"; // Sí, el texto va aquí y en comillas dentro de textContent
});

//corrección: Tenia un error en btn-cambiar?.addEventListener no es válido en JavaScript.
// para eso cree la variable:  miBoton y le puse el escudo protector ?. para que no de error si no encuentra el elemento en el DOM.
// si no uso esa variable js va a intentar restar cambiar de btn y eso va a dar error amx!!
//codigo corregido:
const miTitulo = document.querySelector("#mensaje"); 
const miBoton = document.querySelector("#btn-cambiar");

// Usamos el nombre de la variable "miBoton" que creamos arriba
miBoton?.addEventListener("click", () => {
  miTitulo.textContent = "¡Felicidades, cambiaste el texto con JS!";
});