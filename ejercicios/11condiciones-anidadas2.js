function evaluarCompra(total, esMiembro) {
   if (total < 100) {
        return "No hay descuento"

    } else {

        if (esMiembro) {
            return "Descuento del 20%";

        } else { 
            return "Descuento del 10%";
        }

    }
}

console.log(evaluarCompra(80, true));
console.log(evaluarCompra(120, false));
console.log(evaluarCompra(150, true));