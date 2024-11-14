// Declaramos el array con números
const numeros = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];

// Función que recorre el array y suma sus elementos
function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i]; // Sumamos cada número en el array
    }
    return suma;
}

// Seleccionamos el botón y el párrafo donde mostraremos el resultado
const boton = document.getElementById('sumar-btn');
const resultado = document.getElementById('resultado');

// Agregamos un evento al botón para calcular la suma cuando se haga clic
boton.addEventListener('click', () => {
    const total = sumarArray(numeros); // Llamamos a la función con el array
    resultado.textContent = `Resultado: ${total}`; // Mostramos el resultado en el párrafo
});