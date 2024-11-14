
function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1; 
    } else if (num2 >= num1 && num2 >= num3) {
        return num2; 
    } else {
        return num3; 
    }
}


const formulario = document.getElementById('formulario');
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const inputNumero3 = document.getElementById('numero3');
const resultado = document.getElementById('resultado');


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const num3 = parseFloat(inputNumero3.value);
    const mayor = encontrarMayor(num1, num2, num3); 
    resultado.textContent = `El número mayor es: ${mayor}`; 
});