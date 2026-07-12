function obtenerEstacion(mes) {
    switch (mes) {
        case 1:
        case 2:
        case 12:
            return "Invierno";
        case 3:
        case 4:
        case 5:
            return "Primavera";
        case 6:
        case 7:
        case 8:
            return "Verano";
        case 9:
        case 10:
        case 11:
            return "Otoño";
        default:
            return "Mes inválido";
    }
}

console.log(obtenerEstacion(1)); // Invierno
console.log(obtenerEstacion(4)); // Primavera
console.log(obtenerEstacion(7)); // Verano
console.log(obtenerEstacion(10)); // Otoño
console.log(obtenerEstacion(20)); // Mes inválido
