

function verificarAcceso(edad) {
    const acceso = edad >= 18 ? "Puede entrar" : "No puede entrar";
}

console.log(verificarAcceso(20)); // Puede entrar
console.log(verificarAcceso(15)); // No puede entrar

// estructura: condición ? valorSiTrue : valorSiFalse
//El lado izquierdo del : no necesita otra condición.S
