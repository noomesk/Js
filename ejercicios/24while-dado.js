// Una persona lanza un dado repetidamente hasta que obtiene un 6.

function lanzarHastaSeis() {
    let dado = 0;
    let lanzamientos = 0;

    while(dado !== 6) {
        dado = Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
        lanzamientos++;
        console.log("Lanzamiento " + lanzamientos + ": " + dado); // Muestra el resultado de cada lanzamiento
    }

    console.log("Salió 6 después de " + lanzamientos + " lanzamientos");
}

lanzarHastaSeis(); // Llama a la función para ejecutar el lanzamiento del dado hasta obtener un 6