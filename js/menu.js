// scroll.js
// ... (código original)

// java.js
function cambiarTamanoImagen(imagen, factor) {
    imagen.style.transform = `scale(${factor})`;
    imagen.style.transition = 'transform 0.2s ease-in-out';
  }
  
  const imagen = document.getElementById('imagen');
  imagen.addEventListener('click', () => {
    cambiarTamanoImagen(imagen, 2);
  });
  
  imagen.addEventListener('dblclick', () => {
    cambiarTamanoImagen(imagen, 1);
  });
  