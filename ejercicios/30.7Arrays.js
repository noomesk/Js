function primero(lista) {
  return lista[0]; // estaba  return lista[1]; y el primer elemento de un array es 0 no 1
}

function ultimo(lista) {
  return lista[lista.length - 1]; // estaba: return lista[lista.length]; y eso no se puede xq el último siempre será -1 xq el array comienza en posición 0
}

const numeros = [4, 8, 15];
console.log(primero(numeros));
console.log(ultimo(numeros));