const textarea = document.getElementById('entrada');
const btn = document.getElementById('aplicar');
const resultado = document.getElementById('resultado');
const contador = document.getElementById('contador');

btn.addEventListener('click', () => {
  const texto = textarea.value;
  resultado.textContent = texto;
});

textarea.addEventListener('input', () => {
  contador.textContent = `Caracteres: ${textarea.value.length}`;
});
