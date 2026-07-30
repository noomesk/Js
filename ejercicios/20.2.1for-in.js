/* El Inventor de Fichas de Inventario
Trabajas en una tienda de tecnología y tienes un objeto que representa las especificaciones 
de un teléfono móvil:

javascript
const telefono = {
    marca: "Samsung",
    modelo: "Galaxy S24",
    precio: 900,
    color: "negro"
};
Tu jefe te pide que generes un reporte sencillo en la consola. 
Quiero que uses un bucle for...in para recorrer este objeto e imprimir cada propiedad y su valor 
con el siguiente formato:
"La propiedad [CLAVE] tiene el valor [VALOR]"

Ejemplo de la primera línea en la consola:
"La propiedad marca tiene el valor Samsung" */


const telefono = {
    marca: "Samsung",
    modelo: "Galaxy S24",
    precio: 900,
    color: "negro"
};
 console.log("Los datos del modelo son:");
for (const clave in telefono) {
    console.log(clave + ": " + telefono[clave]);
}

// Imprime:
//Los datos del modelo son:
// marca: "Samsung",
// modelo: "Galaxy S24",
// precio: 900,
// color: "negro" 