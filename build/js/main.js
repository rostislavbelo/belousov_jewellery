//Управление мобильным меню
(function () {
  const mobileMenuElements = document.querySelectorAll('.js__menu');
  const colorMenu = document.querySelector('.js__menu-color');
  const cartColor = document.querySelector('.js__cart-color');
  const logoColor = document.querySelector('.js__logo-color');
  const buttonColor = document.querySelector('.js__button-color');
  const buttonMenu = document.querySelector('.js__menu-button');

  if (mobileMenuElements && colorMenu && cartColor && logoColor && buttonColor) {
    mobileMenuElements.forEach((element) => {
      element.classList.add('js__menu--hidden');
    });
    colorMenu.classList.add('js__menu-color--change');
    cartColor.classList.add('js__cart-color--change');
    logoColor.classList.add('js__logo-color--change');
    buttonColor.classList.add('js__button-color--change');
    buttonMenu.classList.add('js__menu-button--show');

    buttonMenu.addEventListener('click', () => {
      mobileMenuElements.forEach((element) => {
        element.classList.toggle('js__menu--hidden');
      });
      colorMenu.classList.toggle('js__menu-color--change');
      cartColor.classList.toggle('js__cart-color--change');
      logoColor.classList.toggle('js__logo-color--change');
      buttonColor.classList.toggle('js__button-color--change');
    });
  }
}());
