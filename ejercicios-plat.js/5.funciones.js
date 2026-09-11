//FUNCIONES: ESTRCUTURA:
// function nombreDeLaFuncion(parametro1, parametro2) {
  
//}


//Area de un rectangulo:
function areaRectangulo(ancho, alto) {
  return ancho * alto;
}
const area = areaRectangulo(5, 3);
console.log(area);


//devuelve precio mas imp:

function precioConImpuesto(precio, tasa) {
  // Devuelve el precio más el impuesto.
  //el impuesto es precio multiplicado por la tasa;
  return (tasa * precio)+ precio;
}


//minutos recibe noventa. 
// La división produce uno y medio. return entrega ese número a console.log.
function convertirHoras(minutos) {
  return minutos / 60;
}
console.log(convertirHoras(90));


// Diseña la firma de una función que calcule el costo de entradas para varias personas.
//de 3 en adelante se obtiene un 10% de desc, solo 10% sin importar si son muchas + de 3
//Cuántas personas/entradas → cantidad
//Cuánto cuesta cada entrada → precio
function nombreDeLaFuncion(cantidad, precio) {
    const total = cantidad * precio;
    const descuento = total * 10 /100;

    if(cantidad >= 3){
        return (total - descuento); 
    } 
    return total; 
}

//DOCUMENTACIÓN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions 