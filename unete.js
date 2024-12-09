// Activar animaciones de los beneficios al pasar el mouse
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'all 0.3s ease-in-out';
      item.style.transform = 'translateY(-10px)';
      item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Animación de aparición de los testimonios
  window.addEventListener('scroll', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    testimonials.forEach(testimonial => {
      const position = testimonial.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (position < windowHeight - 100) {
        testimonial.style.opacity = 1;
        testimonial.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Efecto de imagen de la galería al pasar el mouse
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
  
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
  