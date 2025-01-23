// Detecta a rolagem da página
window.onscroll = function() {
    var header = document.getElementById('header');
    
    // Adiciona a classe "borrado" ao cabeçalho quando a rolagem for maior que 100px
    if (window.scrollY > 100) {
        header.classList.add('borrado'); // Adiciona a classe para dar efeito de borrado
    } else {
        header.classList.remove('borrado'); // Remove o efeito de borrado quando a rolagem for menor que 100px
    }
};

// Detecta o scroll e atualiza a navegação de acordo com a seção visível na tela
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section"); // Seleciona todas as seções
    const navLinks = document.querySelectorAll("nav ul li a"); // Seleciona todos os links de navegação

    let currentSection = ""; // Variável para armazenar a seção atual visível

    // Loop por todas as seções da página
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Obtém as coordenadas da seção
        // Verifica se a seção está na metade visível da tela
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.getAttribute("id"); // Define a seção atual
        }
    });

    // Loop por todos os links de navegação
    navLinks.forEach(link => {
        link.classList.remove("active"); // Remove a classe "active" de todos os links
        // Se o link corresponde à seção visível, adiciona a classe "active"
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active"); // Marca o link correspondente como ativo
        }
    });
});

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Esperamos a que el DOM cargue (opcional, pero recomendado)
document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializamos VanillaTilt a todas las tarjetas con data-tilt
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 15, // Grado máximo de inclinación
      speed: 600, // Velocidad del efecto
      glare: true, // Efecto de brillo
      "max-glare": 0.2, // Intensidad de brillo
    });
  
    // 2. Slider manual
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const sliderTrack = document.getElementById("sliderTrack");
  
    // Mantendremos un índice para “pasar” las tarjetas.
    // Ejemplo: si hay 3 tarjetas, index = 0 -> 1 -> 2
    let currentIndex = 0;
    const cardCount = document.querySelectorAll(".card").length;
    // Ancho aproximado de cada card (sumado con márgenes). Ajusta según tu layout.
    const cardWidth = 350; 
  
    // Función para actualizar la posición del track
    function updateSlidePosition() {
      // Calculamos cuánta distancia mover (currentIndex * cardWidth)
      const offset = -(currentIndex * cardWidth);
      sliderTrack.style.transform = `translateX(${offset}px)`;
    }
  
    // EventListeners
    btnPrev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
      }
    });
  
    btnNext.addEventListener("click", () => {
      if (currentIndex < cardCount - 1) {
        currentIndex++;
        updateSlidePosition();
      }
    });
  });
  