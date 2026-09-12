/**Ejercicio 1: Diferencia entre textContent e innerHTML
Pregunta: ¿Cuál es la diferencia entre textContent e innerHTML? ¿Qué pasa si haces titulo.innerHTML = '<em>Hola</em>' en vez de titulo.textContent = '<em>Hola</em>'?

Respuesta:
textContent: Obtiene o establece el contenido de texto de un elemento. Si le pasas etiquetas HTML, las tratará como texto plano (literal). Es la opción más segura cuando solo quieres modificar texto, ya que previene ataques de inyección de código (XSS).
innerHTML: Obtiene o establece el marcado HTML que se encuentra dentro de un elemento. Si le asignas una cadena con etiquetas HTML, el navegador las parseará e interpretará como elementos HTML reales.
 ¿Qué pasa en cada caso?

Si haces titulo.innerHTML = '<em>Hola</em>': El navegador renderizará la palabra "Hola" en cursiva (enfatizada), ya que interpreta la etiqueta <em>.
Si haces titulo.textContent = '<em>Hola</em>': Verás literalmente en la pantalla el texto <em>Hola</em>, con las etiquetas visibles como texto plano, sin aplicar ningún formato de cursiva.
*/

