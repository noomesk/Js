//debbugear. La primera tarea desaparece xq?

const tareas = ["Leer", "Practicar", "Descansar"];
const lista = document.getElementById("lista");

for (let i = 0; i < tareas.length; i++) { // antes: (let i = 1; i < tareas.length; i++) { el for comenzaba en 1 y el array comienza en 0
  const fila = document.createElement("li");
  fila.textContent = tareas[i];
  lista.appendChild(fila);
}

document.getElementById("total").textContent =
  "Total: " + lista.children.length;
