
const formulario = document.getElementById('formulario');
const inputNota = document.getElementById('nota');
const resultado = document.getElementById('resultado');


function verificarNota(nota) {
    if (nota >= 11 && nota <= 20) {
        return '¡Felicidades! Aprobaste.';
    } else if (nota >= 0 && nota < 11) {
        return 'Lo siento, reprobaste.';
    } else {
        return 'Nota no válida. Introduce un valor entre 0 y 20.';
    }
}


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nota = parseInt(inputNota.value); 
    const mensaje = verificarNota(nota); 
    resultado.textContent = mensaje; 
});