let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

document.getElementById("sumar").onclick = function() {
resultado.textContent = "Resultado: " + (parseFloat(num1.value) + parseFloat(num2.value));
};

document.getElementById("restar").onclick = function() {
resultado.textContent = "Resultado: " + (parseFloat(num1.value) - parseFloat(num2.value));
};

document.getElementById("multiplicar").onclick = function() {
resultado.textContent = "Resultado: " + (parseFloat(num1.value) * parseFloat(num2.value));
};

document.getElementById("dividir").onclick = function() {
if (parseFloat(num2.value) === 0) {
resultado.textContent = "Error: no se puede dividir entre 0";
} else {
resultado.textContent = "Resultado: " + (parseFloat(num1.value) / parseFloat(num2.value));
}
};
