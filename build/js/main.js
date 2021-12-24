//Управление мобильным меню.
(function () {
  const mobileMenuElements = document.querySelectorAll('.js__menu');
  const colorMenu = document.querySelector('.js__menu-color');
  const cartColor = document.querySelector('.js__cart-color');
  const logoColor = document.querySelector('.js__logo-color');
  const buttonColor = document.querySelector('.js__button-color');
  const buttonMenu = document.querySelector('.js__menu-button');
  const blockHidden = document.querySelectorAll('.js__block-hidden');
  const stylesMenu = document.querySelector('.js__styles-height');
  const itemMenu = document.querySelectorAll('.js__menu-item');

  if (mobileMenuElements && colorMenu && cartColor && logoColor && buttonColor && blockHidden) {

    const startJsMenu = () => {
      mobileMenuElements.forEach((element) => {
        element.classList.add('js__menu--hidden');
      });
      colorMenu.classList.add('js__menu-color--change');
      cartColor.classList.add('js__cart-color--change');
      logoColor.classList.add('js__logo-color--change');
      buttonColor.classList.add('js__button-color--change');
      buttonMenu.classList.add('js__menu-button--show');
    };

    startJsMenu();

    buttonMenu.addEventListener('click', () => {
      mobileMenuElements.forEach((element) => {
        element.classList.toggle('js__menu--hidden');
      });
      blockHidden.forEach((element) => {
        element.classList.toggle('js__block-hidden--active');
      });
      stylesMenu.classList.toggle('js__styles-height--active');
      colorMenu.classList.toggle('js__menu-color--change');
      cartColor.classList.toggle('js__cart-color--change');
      logoColor.classList.toggle('js__logo-color--change');
      buttonColor.classList.toggle('js__button-color--change');
    });

    itemMenu.forEach((element) => {
      element.addEventListener('click', () => {
        blockHidden.forEach((block) => {
          block.classList.remove('js__block-hidden--active');
        });
        stylesMenu.classList.remove('js__styles-height--active');

        startJsMenu();
      });
    });
  }
}());

//Управление попапом
(function () {
  const loginButtonStart = document.querySelector('.js__login');
  const popupLogin = document.querySelector('.js__popup-login');
  const buttonClosed = document.querySelector('.js__popup-closed');
  const loginSended = document.querySelector('.js__send-form');
  const body = document.querySelector('.js__body');
  const inputActive = document.querySelector('.login-form__input-login input');

  if (loginButtonStart && popupLogin) {

    const showPopup = () => {
      popupLogin.classList.add('js__popup-login--show');
      body.classList.add('js__body--no-scroll');
      inputActive.focus();
    };

    const hiddenPopup = () => {
      popupLogin.classList.remove('js__popup-login--show');
      body.classList.remove('js__body--no-scroll');
    };

    loginButtonStart.addEventListener('click', (evt) => {
      evt.preventDefault();
      showPopup();
    });

    buttonClosed.addEventListener('click', () => {
      hiddenPopup();
    });

    loginSended.addEventListener('submit', (evt) => {
      evt.preventDefault();
      hiddenPopup();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hiddenPopup();
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target === popupLogin) {
        hiddenPopup();
      }
    });
  }
}());


//Управление слайдером-свайпером.
(function () {

  const styleSwiperList = document.querySelector('.js__styles-swiper-list--no-js');
  const styleSwiperItem = document.querySelectorAll('.js__styles-swiper-item--no-js');
  const styleSwiperButton = document.querySelectorAll('.js__styles-swiper-button--no-js');

  if (styleSwiperList, styleSwiperItem, styleSwiperButton) {
    styleSwiperList.classList.remove('js__styles-swiper-list--no-js');

    styleSwiperItem.forEach((element) => {
      element.classList.remove('js__styles-swiper-item--no-js');
    });

    styleSwiperButton.forEach((element) => {
      element.classList.remove('js__styles-swiper-button--no-js');
    });

    const SWIPER_DESKTOP = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      simulateTouch: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    };

    const SWIPE_TABLET = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      simulateTouch: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    };

    const SWIPER_MOBILE = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      simulateTouch: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    };

    const swiperArea = document.querySelector('.swiper');
    const DESKTOP_WIDTH = 1023;
    const desktopNoTouchValue = window.screen.width <= DESKTOP_WIDTH;

    // eslint-disable-next-line no-undef
    new Swiper(swiperArea, {
      simulateTouch: desktopNoTouchValue,
      loop: true,
      breakpoints: {
        1023: SWIPER_DESKTOP,
        767: SWIPE_TABLET,
        0: SWIPER_MOBILE,
      },
    });
  }
}());

//Управление аккордеоном секции Questions.
(function () {

  const questionsRest = document.querySelectorAll('.js__questions:not(:first-child)');
  const questionsAll = document.querySelectorAll('.js__questions');

  if (questionsRest && questionsAll) {

    questionsRest.forEach((question) => {
      question.classList.add('js__questions--hidden');
    });


    questionsAll.forEach((question) => {
      const answer = question.querySelector('p');
      answer.addEventListener('click', () => {
        question.classList.toggle('js__questions--hidden');
      });
    });

    /*     questionsAll.forEach((question) => {

          questionTitles.forEach((title) => {
            title.addEventListener('click', () => {

              question.classList.toggle('js__questions--hidden');
            })
          })
        })

     */

    /*     questionTitles.forEach((title) => {
          title.addEventListener('click', () => {
            questionsAll.forEach((question) => {
              question.classList.toggle('js__questions--hidden');
            })
          })
        }) */
  }

}());
