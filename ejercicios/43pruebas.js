function contieneNumero(lista, buscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === buscado) 
        return true;
  }
   return false;
}


//misma idea con datos pequeños:
function contieneNumero(lista, buscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === buscado) 
        return true;
  }
   return false;
}

//ejercicio: corríge esEdadValida:

function esEdadValida(edad) {
  // El contrato acepta desde 18 hasta 120, incluidos.
  return edad >= 18 && edad <= 120;
}

console.log(esEdadValida(18));

/**
 * Si 60 falla, el operador excluye la igualdad.
 *  59 comprueba el lado rechazado y 61 el interior aceptado.
 */
function aprueba(nota) 
    { return nota >= 60; }
// casos: 59, 60, 61

// revisar los operadores < y >
function enRango(valor, minimo, maximo) {
  return valor >= minimo && valor <= maximo;
}
