//estado, reglas módulos y dependencias. 
//Arquitectura significa decidir cómo cooperan esas partes.(mezclar sus responsabilidades)
//al crecer una app, cada cambio es dificil si no sabemos dónde estan las reglas
//los datos y la interfaz

function crearResumen(pendientes, completadas) {
  return "Sin datos";
}

console.log(crearResumen(3, 2));


//repartir el trabajo antes de escribir archivos:
function crearResumen(pendientes, completadas) {
  const total = pendientes + completadas;
  return "Total: " + total + " · Pendientes: " + pendientes;
}

console.log(crearResumen(3, 2));

//el DOM puede registrar su retorno:
//ejercicio: Completa crearResumen sin usar document
//Debe devolver: Total: 5 Pendientes: 3
function crearResumen(pendientes, completadas) {
  return "Sin datos";
}

console.log(crearResumen(3, 2));

//solución-------------------------
function crearResumen(pendientes, completadas) {
  const total = pendientes + completadas;
  return "Total: " + total + " · Pendientes: " + pendientes;
}

console.log(crearResumen(3, 2));
