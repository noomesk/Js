//  ejercicio: puede conducir? 

function puedeConducir(edad, tieneLicencia) {
   if (edad < 18) {
        return "No puede conducir, es menor de edad";

    } else {

        if (tieneLicencia) {
            return "Puede conducir";

        } else { 
            return "Necesita licencia";
        }

    }
}

console.log(puedeConducir(16, true));
console.log(puedeConducir(20, false));
console.log(puedeConducir(25, true));

/*
             ¿edad >= 18?
              /        \
            NO          SÍ
            |            |
       No puede       ¿Tiene licencia?
                         /       \
                       NO         SÍ
                       |           |
              Necesita licencia  Puede conducir */ 


//también se puede sin anidar:

function puedeConducir(edad, tieneLicencia) {

    if (edad < 18) {
        return "No puede conducir, es menor de edad";
    }

    if (tieneLicencia) {
        return "Puede conducir";
    }

    return "Necesita licencia";
}

//Esta versión es más común en código profesional 
// porque evita muchos niveles de indentación.