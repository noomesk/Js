/**While básico

Escribe una función:

contarHasta(n)

Debe imprimir los números desde 1 hasta n.
 * 
 */

function contarHasta(n) { 
  let contador = 1;

  while (contador <= n) {
    console.log(contador);
    contador++;
  }
}

contarHasta(5); // Imprime los números del 1 al 5 

/**
 * Un while tiene 3 piezas mentales:

1. Estado inicial
let contador = 1;

¿Desde dónde empiezo?

2. Condición de permanencia
while (contador <= n)

¿Mientras qué cosa sigo?

3. Actualización del estado
contador++;

¿Cómo cambia la situación para que algún día termine?

La tercera es la que evita los famosos:

while (true) {

}

bucles infinitos !! tener en cuenta jeje
 */