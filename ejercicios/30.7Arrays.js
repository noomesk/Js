function primero(lista) {
  return lista[0];
}

function ultimo(lista) {
  return lista[lista.length - 1];
}

const numeros = [4, 8, 15];
console.log(primero(numeros));
console.log(ultimo(numeros));
