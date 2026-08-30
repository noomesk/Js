//contar positivos:
function contarPositivos(lista) {
  let cantidad = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) cantidad++;
  }
  return cantidad;
}