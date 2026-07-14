/* Escribe una funcion que reciba una \edad\ (numero) y
 retorne una clasificacion: \'bebe'\ (0-2), \'nino'\ (3-12),
  \'adolescente'\ (13-17), \'adulto'\ (18-64), \'adulto mayor'\
   (65+). Si la edad es negativa o no es un numero, retorna \'invalido'\.*/

   function clasificarEdad(edad) {
    if (typeof edad !== "number" || edad < 0) { // A esto se le llama guard clause (cláusula de guarda). o sea eliminar primero los casos inválidos.
    return "invalido";
    } 

    if (edad<=2) {
      return "bebe";
    } else if (edad<=12) {
      return "nino";
    } else if (edad<=17) {
      return "adolescente";
    } else if (edad<=64) {
      return "adulto";
    } else if (edad>=65) {
      return "adulto mayor"
    } 
}

console.log(clasificarEdad(1)); // "bebe"
console.log(clasificarEdad(10)); // "nino"
console.log(clasificarEdad(15)); // "adolescente"
console.log(clasificarEdad(40)); // "adulto"
console.log(clasificarEdad(70)); // "adulto mayor"
console.log(clasificarEdad(-5)); // "invalido"
console.log(clasificarEdad("veinte")); // "invalido"