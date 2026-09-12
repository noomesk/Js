const color = document.getElementById("color");
const resultado = document.getElementById("resultado");

// Buscar boton q guarda color
document.getElementById("guardarColor").addEventListener("click", () => {
    if (!color.value) { // pa revisar si el color ta vacio
        resultado.textContent = "Debes ingresar un color";
        return; //detener la funct ´pa q no siga ejecutando 
    }
    // Leer dato de localStorage (dato guardado q el user escribió)
    localStorage.setItem("colorFavorito", color.value); // ***no sé donde poner colorFavoritoxd ¿si va ahí?
    //mensaje confirmatorio de q el color si se wardó
    resultado.textContent = `Color guardado: ${color.value}`;
});

