const imagens = document.querySelectorAll('.imagem');
const lightbox = document.getElementById('lightbox');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const fechar = document.querySelector('.fechar');

imagens.forEach((imagem) => {
  imagem.addEventListener('click', function() {
    lightbox.classList.add('active');
    imagemAmpliada.src = this.firstChild.src;
  });
});

fechar.addEventListener('click', function() {
  lightbox.classList.remove('active');
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
