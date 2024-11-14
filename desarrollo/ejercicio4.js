// Función que recibe tres números y retorna el mayor de ellos
function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1; // Si num1 es mayor o igual a los otros dos
    } else if (num2 >= num1 && num2 >= num3) {
        return num2; // Si num2 es mayor o igual a los otros dos
    } else {
        return num3; // Si num3 es mayor que los otros dos
    }
}

// Seleccionamos el formulario y los elementos de entrada de números
const formulario = document.getElementById('formulario');
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const inputNumero3 = document.getElementById('numero3');
const resultado = document.getElementById('resultado');

// Agregamos un evento al formulario para manejar la verificación al enviar
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const num3 = parseFloat(inputNumero3.value);
    const mayor = encontrarMayor(num1, num2, num3); // Llamamos a la función con los tres números
    resultado.textContent = `El número mayor es: ${mayor}`; // Mostramos el resultado en el párrafo
});