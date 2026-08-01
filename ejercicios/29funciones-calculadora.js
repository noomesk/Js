/* con if:
function calcular(a, operador, b){

    if(operador === "+"){
        return sumar(a,b);
    }

    else if(operador === "-"){
        return restar(a,b);
    }

    else if(operador === "*"){
        return multiplicar(a,b);
    }

    else if(operador === "/"){
        return dividir(a,b);
    }

} */ 

function calcular(a, operador, b){

   switch(operador){

    case "+":
        return sumar(a,b);

    case "-":
        return restar(a,b);

    case "×":
        return multiplicar(a,b);

    case "÷":
        return dividir(a,b);

    default:
        return "Error";

}
}

/* Regla o tipsito: 
Usa if cuando haces comparaciones
if (edad >= 18)

if (nota >= 3)

if (saldo < 0)

if (usuario === null)

Porque estás evaluando condiciones.

Usa switch cuando una variable puede tomar varias opciones fijas
switch(dia)

switch(color)

switch(opcionMenu)

switch(operador)

Porque estás eligiendo entre varios casos */  