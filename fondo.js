  // Asegura que el video se reproduzca automáticamente al cargar la página
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    video.play().catch(error => {
      console.warn("El video no se puede reproducir automáticamente: ", error);
    });

    // En caso de que se pause al recargar, forzamos la reproducción
    video.addEventListener("pause", function () {
      video.play();
    });
  });