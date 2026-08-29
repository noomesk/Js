//El boton espera dos clics

const boton = document.getElementById("accion");
const estado = document.getElementById("estado");

function responder() {
  estado.textContent = "Recibido";
}

boton.addEventListener("click", responder); // antes estaba: boton.addEventListener("dblclick", responder);
