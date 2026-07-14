//escribe una función que retorne: cuántos números pares hay entre 1 y n (incluyendo n si es par).
function contarPares(n) {
    let contador = 0;

    for (let i = 1; i <= n; i++) {

        if (i % 2 === 0) {
            contador++;
        }

    }

    return contador;
}