
const numeros = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];


function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}


const boton = document.getElementById('sumar-btn');
const resultado = document.getElementById('resultado');


boton.addEventListener('click', () => {
    const total = sumarArray(numeros);
    resultado.textContent = `Resultado: ${total}`;
});