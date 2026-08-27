// cambia el texto del estado: 

const boton = document.getElementById("accion");  //selecciona el botón con getElementById
const estado = document.getElementById("estado"); //selecciona el elemento donde se mostrará el estado

function responderAlClick() { //función q cambia el texto
  // Cambia este texto por una respuesta tuya.
  estado.textContent = "Soy genial amigos y lo voy a lograr, de 0 a experto en un fds xd";
}

boton.addEventListener("click", responderAlClick); //evento: Click
//conectar la función al evento "click" con addEventListener.
//Al pasar responderAlClick sin paréntesis, le indico a Js que debe ejecutar esa función cuando ocurra el clic.
