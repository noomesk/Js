//Lista de tareas:

// Las líneas que empiezan con // son notas.
// JavaScript no las ejecuta.

const tareas = [];
const entrada = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");
const total = document.getElementById("total");

function agregarTarea(texto) {
  if (texto === "") return tareas.length;
  tareas.push(texto);
  return tareas.length;
}

function dibujarTareas() {
  lista.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    const fila = document.createElement("li");
    fila.textContent = tareas[i];
    lista.appendChild(fila);
  }
  total.textContent = "Tareas: " + tareas.length;
}