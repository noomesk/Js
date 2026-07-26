const preciosOriginales = [8, 12, 25, 5, 18];
const preciosDescuento = [];

// Usamos un 'for' clásico porque conocemos el tamaño exacto del array (preciosOriginales.length)
for (let i = 0; i < preciosOriginales.length; i++) {
    let precioActual = preciosOriginales[i];
    
    if (precioActual > 10) {
        preciosDescuento.push(precioActual - 5); // Aplicamos descuento
    } else {
        preciosDescuento.push(precioActual); // Se queda igual 
    }
}

console.log(preciosDescuento); // Resultado: [8, 7, 20, 5, 13]