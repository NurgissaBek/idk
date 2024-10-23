document.addEventListener('DOMContentLoaded', function () {
  let menu_button = document.querySelector('#burger-button');
  const navMenuOverlay = document.getElementById('navMenuOverlay');
  //const closeButton = document.getElementById('close-button');

  menu_button.onclick = () => {
    if (navMenuOverlay.classList.contains('active')) {
      navMenuOverlay.classList.remove('active');
      navMenuOverlay.classList.add('d-none'); // Скрыть поиск
    } else {
      navMenuOverlay.classList.remove('d-none'); // Показать поиск
      navMenuOverlay.classList.add('active');
    }
  }


  document.addEventListener('click', function (e) {
    // Проверяем, был ли клик вне navMenuOverlay и кнопки бургер-меню
    if (!navMenuOverlay.contains(e.target) && !menu_button.contains(e.target)) {
      navMenuOverlay.classList.remove('active');
      navMenuOverlay.classList.add('d-none');
    }
  });
});
