/**
 * Ejercicio: Crea:

cuentaRegresiva(n)

Debe imprimir desde n hasta 1.
 */

function cuentaRegresiva(n) { 
  let contador = n;

  while (contador >= 1) {
    console.log(contador);
    contador--;
  }
}

cuentaRegresiva(5);





/**
 * Regla mental para while:

Pregúntate:

¿Hacia dónde se mueve mi variable?

Si aumenta:

contador++

normalmente la condición será:

contador <= límite

Si disminuye:

contador--

normalmente la condición será:

contador >= límite

ejemplos: 
Contador subiendo:
let contador = 1;

while(contador <= 10){
    contador++;
}

Porque va:

1 → 2 → 3 → ... → 10
Contador bajando:
let contador = 10;

while(contador >= 1){
    contador--;
}

Porque va:

10 → 9 → 8 → ... → 1
 */