const precios = [10, 20, 30];

// Con map creamos un nuevo array con el IVA incluido
const preciosConIVA = precios.map(p => p * 1.16); // [11.6, 23.2, 34.8]

// Con forEach solo imprimimos, no guardamos nada
precios.forEach(p => console.log(`Precio: $${p}`));