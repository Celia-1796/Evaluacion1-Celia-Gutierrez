// Seleccionamos el formulario, el campo de entrada de la nota y el párrafo de resultado
const formulario = document.getElementById('formulario');
const inputNota = document.getElementById('nota');
const resultado = document.getElementById('resultado');

// Función para determinar si la nota es aprobatoria o no
function verificarNota(nota) {
    if (nota >= 11 && nota <= 20) {
        return '¡Felicidades! Aprobaste.';
    } else if (nota >= 0 && nota < 11) {
        return 'Lo siento, reprobaste.';
    } else {
        return 'Nota no válida. Introduce un valor entre 0 y 20.';
    }
}

// Agregamos un evento al formulario para manejar la verificación de la nota al enviar
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    const nota = parseInt(inputNota.value); // Convertimos el valor a número
    const mensaje = verificarNota(nota); // Llamamos a la función para verificar la nota
    resultado.textContent = mensaje; // Mostramos el mensaje en el párrafo resultado
});