function showPage(pageId) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Mostrar la página seleccionada
  document.getElementById(pageId).style.display = 'block';

  // Mostrar u ocultar botones del navbar
  updateNavbar(pageId);
}

function updateNavbar(pageId) {
  // Referencias a botones
  const btnInicio = document.getElementById('btn-inicio');
  const btnYamaha = document.getElementById('btn-yamaha');
  const btnKawasaki = document.getElementById('btn-kawasaki');
  const btnDucati = document.getElementById('btn-ducati');

  // Mostrar todos por defecto
  btnInicio.style.display = 'inline-block';
  btnYamaha.style.display = 'inline-block';
  btnKawasaki.style.display = 'inline-block';
  btnDucati.style.display = 'inline-block';

  // Lógica por página
  if (pageId === 'yamaha') {
    btnKawasaki.style.display = 'none';
    btnDucati.style.display = 'none';
  }

  if (pageId === 'kawasaki') {
    btnYamaha.style.display = 'none';
    btnDucati.style.display = 'none';
  }

  if (pageId === 'ducati') {
    btnYamaha.style.display = 'none';
    btnKawasaki.style.display = 'none';
  }
}

// Página inicial
showPage('inicio');



// CARRUSEL GENÉRICO PARA TODAS LAS MARCAS

function nextSlide(button) {
  const carousel = button.closest('.carousel');
  changeSlide(carousel, 1);
}

function prevSlide(button) {
  const carousel = button.closest('.carousel');
  changeSlide(carousel, -1);
}

function changeSlide(carousel, direction) {
  const slides = carousel.querySelectorAll('.carousel-img');
  let currentIndex = 0;

  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      currentIndex = index;
      slide.classList.remove('active');
    }
  });

  let newIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[newIndex].classList.add('active');
}