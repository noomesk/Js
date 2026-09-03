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

//find = busca si existe o entrega un elemento
//transformar produce un valor nuevo por cada elemento
/** 
 * La forma del resultado nos ayuda a escoger
 * ¿intención existe? = booleano
 * ¿intención selecciona? = lista posiblemente más corta
 * ¿intención transforma = lista de igual longitud 
 * Definición en lenguaje cotidiano
01
includes responde booleano; find busca un elemento; filter produce una selección; 
map transforma cada elemento. Un for puede expresar cualquiera de forma explícita.
 */

//La función callback recibe Ana y devuelve false; 
// recibe Lucía y devuelve true. El resultado conserva solo Lucía.
function esLargo(nombre) { return nombre.length > 4; }
const largos = ["Ana", "Lucía"].filter(esLargo);


////Completa contiene para devolver true cuando buscado esté en lista 
//y false en caso contrario 
//ejercicio resuewlto:
function contiene(lista, buscado) {
  return lista.includes(buscado);
}

console.log(contiene(["Ana", "Luis"], "Luis"));

/**
 * ¿Debo usar for o un método? 
 * Elige por claridad y contrato. 
 * Un for explícito ayuda a aprender el flujo; un método expresa 
 * la intención cuando entiendes su callback
 */