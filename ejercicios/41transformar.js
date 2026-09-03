//Buscar, filtrar y transformar
function esLargo(nombre) {
  return nombre.length > 4;
}

function aMayuscula(nombre) {
  return nombre.toUpperCase();
}

const nombres = ["Ana", "Lucía", "Pedro"];
console.log(nombres.includes("Lucía")); // includes: Sirve para comprobar si un elemento existe dentro de un array o string, devuelve un boolean
console.log(nombres.filter(esLargo)); // filter() recorre un array y crea un nuevo array con los elementos que cumplen una condición
console.log(nombres.map(aMayuscula)); //map() recorre un array y crea un nuevo array transformando cada elemento.