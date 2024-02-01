(function () {
    const Nosotros = document.querySelector('.nosotros-item');
    const items = document.querySelector('.nav2-items')
    const Nav2Container = document.querySelector('.nav2-oculto-container');
  
    Nosotros.addEventListener('mouseenter', () => {
      Nav2Container.classList.add('nav2--show');
      Nav2Container.style.height = 'auto'; // Ajusta la altura a 'auto' para medir el contenido
      const height = Nav2Container.clientHeight + 'px';
      Nav2Container.style.height = '0'; // Restablece la altura a cero
      setTimeout(() => {
        Nav2Container.style.height = height; // Aplica la altura medida para la animación
      }, 0);
    });
  
    Nosotros.addEventListener('mouseleave', () => {
      Nav2Container.style.height = '0'; // Reduce la altura a cero al salir del hover
    });
  })();