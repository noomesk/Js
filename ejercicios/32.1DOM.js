//Dibuja el árbol simplificado de una tarjeta con título y botón.

/**
 * EL HTML seria:
 * <div>
  <h2>Título de la tarjeta</h2>
  <button>Contratar</button>
</div>

 */

const titulo= document.getElementById("titulo"); //busca un elemento del HTML 
const boton = document.getElementById("boton");

titulo.textContent = "Angie"; //Cambia el texto que hay adentro jej 
boton.textContent = "Desarrolladora";

/** otro:
 * HTML:
 * <section id="mensaje">
  <h2 id="titulo"></h2>
  <p id="contenido"></p>
</section>
 */

const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");

titulo.textContent = "Aviso";
contenido.textContent = "Pablito te ama mucho.";