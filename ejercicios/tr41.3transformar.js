//La búsqueda abandona demsaiado pronto:
function contieneNumero(lista, buscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === buscado) 
        return true;
  }
   return false;
}

//esperado: Encuentra valores aunque no estén en la primera posición.
//sigue la ejecución cuando el primer elemento no coincide