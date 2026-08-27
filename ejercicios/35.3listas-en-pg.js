//Ejercicio: Explica como mostrarias una lista de compras

const compras = ["Leche", "Pancito", "Huevos"];
const lista = document.getElementById("lista");
const total = document.getElementById("total");

function resumenCompras(items) { //devuelve una lista con las compras
      
    return items.join(", ");// yo habia puesto este: `La compra es: ${items};` pero es más legible con el método join //para retornar la lista de compras
 }

 function mostrarCompras(items) { //pinta todas las compras en lista
   lista.innerHTML = ""; //limpia la lista antes de volver a crear elementos
   for (let i = 0; i < items.length; i++) { //recorre el array
   const fila = document.createElement("li"); //crear una lista <li></li>
   fila.textContent = items[i]; //pone items dentro de la lista
     lista.appendChild(fila); //añade fila a la lista 
   }

 }

mostrarCompras(compras);

total.textContent =
  resumenCompras(compras);
