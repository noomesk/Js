//reto: la regla ignora la cantidad:
function subtotal(precio, cantidad) {
  return precio;
}

//solución:
function subtotal(precio, cantidad) {
  return precio * cantidad;
}

console.log(subtotal(24,2));
