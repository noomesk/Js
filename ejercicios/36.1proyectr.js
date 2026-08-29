const tareas = [];

function agregarTarea(texto) {
  if (texto === "") {
    return 0; 
  }
  tareas.push("Ejemplo");
  return -1;
}

document.getElementById("salida").textContent =
  "Cantidad: " + agregarTarea("Leer");
