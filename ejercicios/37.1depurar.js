// El descuento resta la cantidad equivocada

/**asi estaba: 
 function aplicarDescuento(precio, tasa) {
  return precio - tasa;
}
console.log(aplicarDescuento(100, 0.2));
 */


function aplicarDescuento(precio, tasa) {
  const descuento = tasa * precio;
  return precio - descuento;
}
console.log(aplicarDescuento(100, 0.2));