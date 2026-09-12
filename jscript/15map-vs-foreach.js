const precios = [10, 20, 30];

// Con map creamos un nuevo array con el IVA incluido
const preciosConIVA = precios.map(p => p * 1.16); // [11.6, 23.2, 34.8]

// Con forEach solo imprimimos, no guardamos nada
precios.forEach(p => console.log(`Precio: $${p}`));

/** 
 * Explicación: Imagina que tienes tres naranjas.
map() es un extractor de jugo. Tomas las tres naranjas, 
las exprimes y obtienes un vaso con tres porciones de jugo 
(un nuevo array con datos transformados).
forEach() es simplemente comerte las naranjas o tirarlas.
 Haces una acción con ellas, pero no te da un nuevo producto al
  final (no retorna nada).**/
