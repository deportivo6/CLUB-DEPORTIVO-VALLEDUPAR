document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    // Selecciona todos los elementos con animaciones
    const elements = document.querySelectorAll(
      ".fade-in-slide, .fade-in-slide-top, .fade-in-slide-right"
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  