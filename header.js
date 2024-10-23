function loadHeader() {
  const headerHTML = `
  <header class="navbar navbar-expand-lg py-2 px-xl-5 sticky-top">
    <div class="container-fluid mx-xl-5">
      <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
      <div id="categoryDropdownMenuLink" class="dropdown category-dropdown ms-xl-5 mx-2">
        <button id="categoryDropdownMenuLink" class="btn btn-light dropdown-toggle border-black border-2" type="button" aria-expanded="false">
          Категории
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0" aria-labelledby="categoryDropdownMenuLink">
          <li><a class="dropdown-item" href="fruits-berries.html">Фрукты, ягоды</a></li>
          <li><a class="dropdown-item" href="vegetables-herbs.html">Овощи, зелень</a></li>
          <li><a class="dropdown-item" href="dairy-eggs.html">Молочные продукты, яйца</a></li>
          <li><a class="dropdown-item" href="meat-poultry.html">Мясо, птица</a></li>
          <li><a class="dropdown-item" href="fish-seafood.html">Рыба, морепродукты</a></li>
          <li><a class="dropdown-item" href="grain-pasta.html">Крупы, макароны</a></li>
          <li><a class="dropdown-item" href="bread-baked.html">Хлеб, выпечка</a></li>
          <li><a class="dropdown-item" href="candies-cookies-snacks.html">Конфеты, печенье, снеки</a></li>
          <li><a class="dropdown-item" href="drinks.html">Соки, напитки</a></li>
          <li><a class="dropdown-item" href="tea-coffee.html">Чай, кофе</a></li>
        </ul>
      </div>
      <form class="d-flex mx-2" role="search">
        <input id="search-input" class="form-control me-2 border-black border-2" type="search" placeholder="Поиск" aria-label="Search">
        <button id="search-btn" class="btn btn-success border-2" type="submit"><i class="bi bi-search"></i></button>
        <button id="close-search-btn" class="btn btn-danger border-2 d-none" type="button">
          <i class="bi bi-x-lg"></i>
        </button>
      </form>
        <div id="navItems" class="align-items-center gap-3">
          <ul id="cart-profile-liked" class="navbar-nav ms-auto flex-row align-items-center gap-3">
            <li class="nav-item">
              <a class="nav-link" href="liked.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-heart"></i></button>
              </a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-success border-2 rounded-4 dropdown-toggle" type="button" aria-expanded="false"><i class="bi bi-basket me-2"></i>
                  Корзина
                </button>
                <div class="dropdown-menu dropdown-cart">
                  <table class="table-sm table-hover">
                    <tr>
                      <td class="text-short">
                        <img src="images/drinks/actual_peach_passionfruit.jpg" class="cart-min-img" alt="">
                        Актуаль Персик Маракуйя 1л
                      </td>
                      <td>10шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/lays_chili_lime.jpg" class="cart-min-img" alt="">
                        Lays Чили Лайм 200г
                      </td>
                      <td>5шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/fruits-berries/tashkent_lemon.png" class="cart-min-img" alt="">
                        Ташкентские Лимоны
                      </td>
                      <td>2шт</td>
                    </tr>
                  </table>
                  <hr class="dropdown-divider">
                  <a href="cart.html" class="button-cart">
                    <button class="btn btn-success border-2">Вся корзина</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="profile.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-person me-2"></i>Профиль</button>
              </a>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler ms-auto d-lg-none" type="button" id="burger-button" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMenuOverlay" class="nav-menu-overlay d-none">
          <div class="nav-items-mobile flex-column gap-3">
          <ul id="cart-profile-liked" class="navbar-nav ms-auto align-items-center gap-3">
            <li class="nav-item">
              <a class="nav-link" href="liked.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-heart"></i></button>
              </a>
            </li>
            <li class="nav-item">
              <a href="cart.html" class="button-cart">
                <button class="btn btn-success border-2">Вся корзина</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="profile.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-person me-2"></i>Профиль</button>
              </a>
            </li>
          </ul>
          </div>
        </div>
    </div>
  </header>
  `;

  document.getElementById('header-container').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);

