//donde empieza, cuándo continúa y cómo avanza
//Tabla con índice y acumulador, hace visible el recorrido:
let total = 0;
for (let numero = 1; numero <= 3; numero++) {
  total = total + numero;
}
console.log(total);

//

function contarParesHasta(limite) {
  let cantidad = 0;
  
  // Recorre desde 1 hasta limite e incrementa cuando sea par.
  for (let i = 1; i<=limite; i++) {
    if (i % 2 === 0) {
      cantidad++;
    }
  }
return cantidad; //fuera del for: se ejecuta una vez dsps de q el buble termine todas sus vueltas 

}

//producto toma 1, luego 2, luego 6 y por último 24.
//  La tabla de estado muestra cada cambio
let producto = 1;
for (let n = 1; n <= 4; n++) {
  producto = producto * n;
}
console.log(producto);

//¿Cuándo uso while?
//Cuando la cantidad de vueltas depende de una condición y no de un contador claro. 

// for suele ser más legible para recorridos contados.

//DOCUMENTACIÓN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration

//sumarhasta3 da 6:
function sumarHasta(limite) {
  let total = 0;
  for (let n = 1; n <= limite; n++) {
    total = total + n;
  }
  return total;
}

console.log(sumarHasta(3));