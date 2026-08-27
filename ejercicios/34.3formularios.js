//El saludo ignora lo escrito (encontrar el error):

const entrada = document.getElementById("nombre");
const boton = document.getElementById("saludar");
const salida = document.getElementById("salida");

function mostrarSaludo() {
  salida.textContent = "Hola, " + entrada.value; // antes estaba:  salida.textContent = "Hola, " + entrada.textConten; x eso ignoraba el saludo. 
}

boton.addEventListener("click", mostrarSaludo);
