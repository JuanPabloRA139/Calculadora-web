const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

document.getElementById("sumar").addEventListener("click", () => {
    resultado.textContent = parseFloat(num1.value) + parseFloat(num2.value);
});

document.getElementById("restar").addEventListener("click", () => {
    resultado.textContent = parseFloat(num1.value) - parseFloat(num2.value);
});

document.getElementById("multiplicar").addEventListener("click", () => {
    resultado.textContent = parseFloat(num1.value) * parseFloat(num2.value);
});

document.getElementById("dividir").addEventListener("click", () => {
    const divisor = parseFloat(num2.value);
    if (divisor === 0) {
        resultado.textContent = "ERROR";
    } else {
        resultado.textContent = parseFloat(num1.value) / divisor;
    }
});
