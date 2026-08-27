//un array puede convertirse en elementos visuales
const tareas = ["Leer", "Practicar", "Descansar"];
const lista = document.getElementById("lista");
const total = document.getElementById("total");

function mostrarTareas(items) { //recibe el array, limpia lo q habia en pantalla y lo recorre con un for
  lista.innerHTML = ""; //limpiar el array o dejarlo vacio
  for (let i = 0; i < items.length; i++) { //recorrer el array
    const fila = document.createElement("li"); // en cada vuelta createElement crea un elemento de lista
    fila.textContent = items[i]; //luego textContent coloca la tarea actual
    lista.appendChild(fila); //añade esa fila a la lista visible
  }
  total.textContent = "Total: " + items.length;
}

mostrarTareas(tareas);


