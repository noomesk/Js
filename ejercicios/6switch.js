function obtenerDia(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4: 
            return "Jueves";
        case 5:
            return "Viernes"; 
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido";
    }   
}

console.log(obtenerDia(1));
console.log(obtenerDia(5));



// Ahora si no hubiese escrito return, sino console log,
// tendria que usar break para que no siga ejecutando.

switch(numero){

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;
}

// o aqui también necesito break:

function obtenerDia(numero){

    let dia;

    switch(numero){

        case 1:
            dia = "Lunes";
            break;

        case 2:
            dia = "Martes";
            break;

        default:
            dia = "Inválido";

    }

    return dia;

}

//esa variable let anterior se coloco, porque
// a veces necesitas hacer más cosas antes de retornar
function obtenerDia(numero){

    let dia;

    switch(numero){

        case 1:
            dia = "Lunes";
            break;

        case 2:
            dia = "Martes";
            break;

        default:
            dia = "Inválido";
    }

    console.log("El día encontrado es:", dia);

    return dia;
}

//o también:

function calcularPrecio(tipoCliente){

    let precio;

    switch(tipoCliente){

        case "premium":
            precio = 100;
            break;

        case "normal":
            precio = 200;
            break;

        default:
            precio = 300;
    }


    precio = precio * 1.19; // agregar IVA

    return precio;
}