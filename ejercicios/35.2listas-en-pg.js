//Ejercicio reto, unidad 13.
//Convertir los datos de un array en elementos visibles.
/**Completar resumenLista(items) Debe devolver exactamente: "3 tareas · Primera:Leer" 
 * cuando recibe ["Leer", "Practicar", "Descansar"] usa el array recibido
 * no datos fijos. 
*/

const tareas = ["Leer", "Practicar", "Descansar"];
const lista = document.getElementById("lista");
const total = document.getElementById("total");

function resumenLista(items) { //devuelve un texto con cantidad y primer elemento
  // Devuelve un texto que incluya la cantidad y el primer elemento.
      
    return items.length + " tareas · Primera: " + items[0];
 }

 function mostrarTareas(items) { //pinta todas las tareas en lista
   lista.innerHTML = ""; //limpia la lista antes de recorrer
   for (let i = 0; i < items.length; i++) {
   const fila = document.createElement("li"); //crear una lista <li></li>
   fila.textContent = items[i]; //pone items dentro de la lista
     lista.appendChild(fila); //añade fila a la lista 
   }

 }

mostrarTareas(tareas);

document.getElementById("total").textContent =
  resumenLista(tareas);
