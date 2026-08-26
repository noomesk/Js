//Escribe la expresión que decide si una compra tiene envío gratis.

const compra = 20;

const envGratis = compra >= 10; 

console.log(envGratis);

/**
 * const compra = 9;  // debería dar false
 * const compra = 10; // debería dar true
 * const compra = 20; // debería dar true
 */