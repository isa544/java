const imagen = document.getElementById('imagen');

imagen.addEventListener('click', () => {
  imagen.style.transform = 'scale(2)';
  imagen.style.transition = 'transform 0.2s ease-in-out';
});

imagen.addEventListener('dblclick', () => {
  imagen.style.transform = 'scale(1)';
  imagen.style.transition = 'transform 0.2s ease-in-out';
});