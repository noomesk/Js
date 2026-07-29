const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const resultado = document.getElementById("resultado");

// Guardar dato en localStorage
document.getElementById("color").addEventListener("click", () => {
    if (!clave.value || !valor.value) {
        resultado.textContent = "Debes ingresar un color";
        return;
    }
    localStorage.setItem("colorFavorito", color.value); // no sé donde poner colorFavorito ¿dónde lo pongo?
    resultado.textContent = `Color guardado: ${clave.value} = ${valor.value}`;
});

// Leer dato de localStorage
document.getElementById("leer").addEventListener("click", () => {
    const dato = localStorage.getItem(clave.value);
    resultado.textContent = dato
        ? `Encontrado: ${clave.value} = ${dato}`
        : `No se encontró la clave "${clave.value}"`;
});

// Eliminar un dato
document.getElementById("eliminar").addEventListener("click", () => {
    localStorage.removeItem(clave.value);
    resultado.textContent = `Eliminado: ${clave.value}`;
});

// Limpiar todo el storage
document.getElementById("limpiar").addEventListener("click", () => {
    localStorage.clear();
    resultado.textContent = "localStorage limpiado";
});