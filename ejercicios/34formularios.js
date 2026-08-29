// Devuelve un texto q incluya el nombre recibido:


const entrada = document.getElementById("nombre");
const boton = document.getElementById("saludar");
const salida = document.getElementById("salida");

function crearSaludo(nombre) {
  return "Hola, " + nombre; //solo agregué esta línea.
}

function mostrarSaludo() {
  const nombreEscrito = entrada.value;
  salida.textContent = crearSaludo(nombreEscrito);
}

boton.addEventListener("click", mostrarSaludo);
