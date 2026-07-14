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

//Si la edad es negativa o no es un numero, retorna \'invalido'\.

function clasificarEdad(edad) {
    if (typeof edad !== "number" || edad < 0) {
        return "edad inválida";
    }
    if (edad>0 && edad<=2) {
      return "bebe";
    } else if (edad>=3 && edad<=12) {
      return "niño";
    } else if (edad>=13 && edad<=19) {
      return "adolescente";
    } else if (edad>=20 && edad<=59) {
      return "adulto";
    } else if (edad>=60) {
      return "anciano";
    } else {
      return "edad inválida";
    } 
  
}