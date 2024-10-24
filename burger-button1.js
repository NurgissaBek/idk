function setupButtonHandlers() {
  const burgerButton = document.getElementById('burger-button');
  const navMenuOverlay = document.getElementById('navMenuOverlay');
  const mobileSearchAndCategories = document.getElementById('mobile-search-and-categories');
  const closeMenuButton = document.getElementById('close-menu-button');

  // Обработчик события для бургер-кнопки
  burgerButton.addEventListener('click', function() {
      navMenuOverlay.classList.toggle('d-none');
      mobileSearchAndCategories.classList.toggle('d-none');
  });

  // Обработчик события для кнопки закрытия меню
  closeMenuButton.addEventListener('click', function() {
      navMenuOverlay.classList.add('d-none');
      mobileSearchAndCategories.classList.add('d-none');
  });

  // Изменения для поиска
  document.getElementById('search-btn').addEventListener('click', function(event) {
      event.preventDefault();
      const query = document.getElementById('search-input').value;
      console.log('Поиск:', query);
  });

  document.getElementById('search-btn-mobile').addEventListener('click', function(event) {
      event.preventDefault();
      const queryMobile = document.getElementById('search-input-mobile').value;
      console.log('Поиск (мобильный):', queryMobile);
  });
}

// Вызов функции настройки кнопок после загрузки хедера
document.addEventListener('DOMContentLoaded', function() {
  setupButtonHandlers();
});
