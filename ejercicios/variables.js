/* Crea las variables necesarias para representar a un estudiante.
 Debes crear: \nombre\ (string), \edad\ (number), \promedio\ (number con decimales),
  \aprobado\ (boolean: true si promedio >= 6, false si no). Usa \const\ para todas 
  excepto \aprobado\ que debe ser \let\. La funcion debe retornar un objeto
   con esas 4 propiedades. */

   function crearEstudiante(nom, ed, prom) {
  const nombre = nom;
  const edad = ed;
  const promedio = prom;
  let aprobado = promedio>=6;

  return {
    nombre,
    edad,
    promedio,
    aprobado
  };
  } 

const estudiante = crearEstudiante();
console.log(estudiante);