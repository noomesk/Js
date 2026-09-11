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
