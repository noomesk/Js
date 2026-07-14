/**
 * contar positivos

Crea:

contarPositivos(n)

Debe imprimir los números positivos desde n hasta llegar a 0.
 */

function contarPositivos(n) { 
  let contador = n;

  while (contador >= 1) {
    console.log(contador);
    contador--;
  }
}

contarPositivos(5);

/**Resumen: por si acaso
 * break

 "No me importa la condición, sal de aquí ya."

Ejemplo:

if(encontré){
    break;
}
while

 "Yo ya tengo una puerta de salida en mi condición."

Ejemplo:

while(contador >= 1)

Cuando deje de cumplirse, sale.
 */