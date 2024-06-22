// Detectar el evento de scroll
window.addEventListener("scroll", function() {
    // Obtener el texto
    var text = document.querySelector(".scroll-text");
    
    // Verificar si el texto está en la pantalla
    var rect = text.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      text.classList.add("text-visible"); // Agregar clase para hacer visible
    } else {
      text.classList.remove("text-visible"); // Quitar clase si no está visible
    }
});