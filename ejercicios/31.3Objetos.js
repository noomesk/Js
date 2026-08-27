/**
 * Ejercicio: calcular el total de un pedido
Crea un objeto pedido con estas propiedades:

cliente: nombre del cliente.
producto: nombre del producto.
precio: precio de una unidad.
cantidad: unidades compradas.
descuento: porcentaje de descuento, por ejemplo 10 significa 10%.
Después, crea una función resumenPedido(pedido) que:

Calcule el subtotal (precio * cantidad).
Calcule el descuento.
Calcule el total final.
Devuelva un texto con este formato:

Cliente - Producto - Total: precio
 */

const pedido = {
  cliente: "Angie",
  producto: "jabón",
  precio: 25000,
  cantidad: 2,
  descuento: 10,

};

function resumenPedido(pedido) {
    let subtotal = (pedido.precio * pedido.cantidad); 
    let importeDescuento = subtotal * (pedido.descuento / 100); // el descuento se calcula sobre el subtotal, no sobre el pecio de una unidad
    let total = subtotal - importeDescuento;  //el dinero q debo restar

        return `${pedido.cliente} - ${pedido.producto} - Total: ${total}`; 
    }
 
/**subtotal: 25000 × 2 = 50000
descuento: 50000 × 10% = 5000
total: 50000 - 5000 = 45000 */
    console.log(resumenPedido(pedido));
