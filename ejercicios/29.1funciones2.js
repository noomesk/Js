//Define el contrato de una función que calcula el precio final.

function precioFinal (precio1, precio2, precio3) {
    return precio1 + precio2 + precio3; 
}

console.log(precioFinal(2,5,7));

//para aceptar una cantidad variable de productos
//puedo usar el parámetro rest: (...). Este recoge todos los argumentos en un array

function sumarPrecios(...precios) {
  let total = 0;

  for (const precio of precios) {
    total += precio;
  }

  return total;
}

console.log(sumarPrecios(2, 5, 7));       // 14
console.log(sumarPrecios(2.5, 5.75));     // 8.25
console.log(sumarPrecios(10, 3, 4, 8));  // 25

//usando reduce:
//reduce recorre todos los precios y va acumulando el total.
function sumarPrecios(...precios) {
  return precios.reduce((total, precio) => total + precio, 0);
}

//como js puede mostrar errores con muchos decimales,
//para usar solo dos:
const total = 2.5 + 5.75;

console.log(total.toFixed(2)); // "8.25"

//weno, ahora bien: toFixed(2) devuelve un texto, no un número
//para convertirlo a numero de nuevo:

const totalRedondeado = Number(total.toFixed(2));