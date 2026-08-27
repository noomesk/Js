/**
 *  crea un objeto producto y elige los valores q quieras para
 *  nombre y precio, después escribe etiqueta(item):
 *  debe leer esos dos campos y devolver un texto con el formato
 *  "Nombre - precio" debe funcionar con cualquier producto.
 */


const producto = {
  nombre: "Angie",
  precio: 250000,
};

function etiqueta(item) {
  return item.nombre + " — " + item.precio; //item es el objeto q me pasen  ZB: etiqueta(producto) ES item = producto;; 
}

console.log(etiqueta(producto));
