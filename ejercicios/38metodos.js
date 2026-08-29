//métodos y documentación
//ejercicio: Normalizar nombres, quita espacios de los extremos y devuelve
//el texto en mayúsculas

function normalizarNombre(nombre) {
  return nombre.trim().toUpperCase(); //trim quita espacios sobrantes, toUpperCase vuelve el string a mayúsculas
}

console.log(normalizarNombre("  ana "));