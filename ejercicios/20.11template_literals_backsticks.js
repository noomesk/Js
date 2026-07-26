/*   El Generador de Recibos de Compra
Imagina que estás programando el sistema de una tienda de café. 
Queremos mostrar un mensaje amigable al cliente con su nombre, 
el producto que compró, la cantidad y el total a pagar.*/

const cliente = "John S.";
const producto = "Capuccino";
const precio = 3.500;
const cantidad = 2;

// Usamos BACKTICKS ( ` ) al inicio y al final del texto.
const recibo = `Hola ${cliente}, tu pedido de ${cantidad} ${producto}s está listo. El total a pagar es $${precio * cantidad} lucas.`;

console.log(recibo);