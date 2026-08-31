//diferentes métodos:
function esLargo(nombre) {
  return nombre.length > 4;
}

function aMayuscula(nombre) {
  return nombre.toUpperCase();
}

const nombres = ["Ana", "Lucía", "Pedro"];
console.log(nombres.includes("Lucía")); //includes recibe el valor buscado y devuelve un boolean (compara el buscado con cada elemento hasta encontrarlo)
console.log(nombres.filter(esLargo)); //filtrar conserva los elementos para q esa funcion devuelve true 
console.log(nombres.map(aMayuscula)); //map recibe otra función y produce un resultado x elemento

//busca si existe o entrega un elemento
//transformar produce un valor nuevo por cada elemento
/** 
 * La forma del resultado nos ayuda a escoger
 * ¿intención existe? = booleano
 * ¿intención selecciona? = lista posiblemente más corta
 * ¿intención transforma = lista de igual longitud 
 */


////Completa contiene para devolver true cuando buscado esté en lista 
//y false en caso contrario 
//ejercicio resuewlto:
function contiene(lista, buscado) {
  return lista.includes(buscado);
}

console.log(contiene(["Ana", "Luis"], "Luis"));