//Ejercicio en clase
/**Completa agregarTarea(texto), si el texto está vacio, no agregues nada y devuelve 0
 * Si recibe "Leer", guarda la tarea y devuelve 1
 * Una segunda tarea válida debe devolver 2
 * Usa el array de tareas ya creado:
 */



const tareas = [];

function agregarTarea(texto) {
  // Un texto vacío no se agrega.
  if (texto === "") //agregué esta línea
    return tareas.length; // como está vacio (su longitud de tamaño) devuelve 0 (ojo, su .length no el array jej)
  // Un texto válido se guarda y devuelve la cantidad actual.
  tareas.push(texto); //para guardar un elemento al final del areray 
  return tareas.length;
}