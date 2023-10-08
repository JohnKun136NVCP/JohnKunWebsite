// Detectar el evento de scroll
window.addEventListener("scroll", function() {
    // Obtener la imagen
    var image = document.querySelector(".scroll-image");
    
    // Verificar si la imagen está en la pantalla
    var rect = image.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      image.classList.add("image-visible"); // Agregar clase para hacer visible
    } else {
      image.classList.remove("image-visible"); // Quitar clase si no está visible
    }
  });

  