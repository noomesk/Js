/**
 * Ejercicio 2: Seleccionar múltiples elementos
Objetivo: Usa document.querySelectorAll para seleccionar todos los botones de la página 
y agregar un evento de clic a cada uno que muestre en consola el texto del botón.
 */

// Seleccionamos todos los botones de la página
const botones = document.querySelectorAll("button");

// Recorremos cada botón y le agregamos el escuchador de eventos
botones.forEach(boton => {
  boton.addEventListener("click", (event) => {
    // Mostramos en consola el texto del botón clickeado
    console.log(event.target.textContent);
    // O también directamente: console.log(boton.textContent);
  });
});