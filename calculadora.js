const importeInput = document.getElementById('importe');
const ivaInput = document.getElementById('iva');
const calcularBtn = document.getElementById('calcular');
const resultadoInput = document.getElementById('resultado');

calcularBtn.addEventListener('click', function () {
  const importe = parseFloat(importeInput.value);
  const iva = parseFloat(ivaInput.value);
  const resultado = importe * iva;
  resultadoInput.value = resultado.toFixed(2);
});
