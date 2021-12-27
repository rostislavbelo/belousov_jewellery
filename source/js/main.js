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

  if (mobileMenuElements && colorMenu && cartColor && logoColor && buttonColor && blockHidden && buttonMenu && stylesMenu && itemMenu) {

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

      answer.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          question.classList.toggle('js__questions--hidden');
        }
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
  const body = document.querySelector('.page-body');
  const inputActive = document.querySelector('.login-form__input-login input');

  if (loginButtonStart && popupLogin && buttonClosed && loginSended && body && inputActive) {

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

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        hiddenPopup();
      }
    });

    document.addEventListener('click', (evt) => {
      if (evt.target === popupLogin) {
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

  if (styleSwiperList && styleSwiperItem && styleSwiperButton) {
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

    const restartSwiper = (touch) => {
      //Ниже строка не проверяется линтером - это вызов библиотеки слайдера-свайпера
      // eslint-disable-next-line no-undef
      new Swiper(swiperArea, {
        simulateTouch: touch,
        loop: true,
        breakpoints: {
          1023: SWIPER_DESKTOP,
          767: SWIPE_TABLET,
          0: SWIPER_MOBILE,
        },
      });
    };

    restartSwiper(desktopNoTouchValue);

    window.addEventListener('resize', () => {
      if (window.screen.width <= DESKTOP_WIDTH) {
        restartSwiper(true);
      }
      if (window.screen.width > DESKTOP_WIDTH) {
        setInterval(() => location.reload(), 2000);
      }
    });
  }
}());

//Управление аккордеоном секции Filters.
(function () {

  const filtersRest = document.querySelectorAll('.js__filters--start-hidden');
  const filtersAll = document.querySelectorAll('.js__filters');

  if (filtersRest && filtersAll) {

    filtersRest.forEach((filter) => {
      filter.classList.add('js__filters--hidden');
    });

    filtersAll.forEach((filter) => {
      const answer = filter.querySelector('h3');
      answer.addEventListener('click', () => {
        filter.classList.toggle('js__filters--hidden');
      });

      answer.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          filter.classList.toggle('js__filters--hidden');
        }
      });
    });
  }

}());

//Переключение чекбоксов секции Filters с помощью клавиши Enter при управлении с клавиатуры.
(function () {
  const areaInputs = document.querySelectorAll('.filters__input-custom');

  if (areaInputs) {
    areaInputs.forEach((area) => {
      area.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          const enter = area.querySelector('input');
          enter.toggleAttribute('checked');
        }
      });
    });
  }
}());

//Управление попапом фильтра страницы catalog.html
(function () {
  const filter = document.querySelector('.js__filter');
  const buttonOpen = document.querySelector('.js__form-button-open');
  const buttonClosed = document.querySelector('.js__form-button-closed');
  const blockHiddenFilter = document.querySelectorAll('.js__block-hidden-filter');
  const body = document.querySelector('.page-body');
  const backgroundPopup = document.querySelector('.js__filter-background');

  if (buttonOpen && filter && buttonClosed && blockHiddenFilter && body && backgroundPopup) {
    filter.classList.add('js__filter--hidden');
    buttonOpen.classList.add('js__form-button-open--active');

    buttonOpen.addEventListener('click', () => {
      filter.classList.remove('js__filter--hidden');
      filter.classList.add('js__filter--popup');
      buttonOpen.classList.remove('js__form-button-open--active');
      buttonClosed.classList.add('js__form-button-closed--active');
      body.classList.add('js__body--no-scroll');
      backgroundPopup.classList.add('js__filter-background--popup');

      blockHiddenFilter.forEach((block) => {
        block.classList.add('js__block-hidden--active');
      });
    });

    const deactivePopupFilter = () => {
      filter.classList.add('js__filter--hidden');
      filter.classList.remove('js__filter--popup');
      buttonOpen.classList.add('js__form-button-open--active');
      buttonClosed.classList.remove('js__form-button-closed--active');
      body.classList.remove('js__body--no-scroll');
      backgroundPopup.classList.remove('js__filter-background--popup');

      blockHiddenFilter.forEach((block) => {
        block.classList.remove('js__block-hidden--active');
      });
    };

    buttonClosed.addEventListener('click', () => {
      deactivePopupFilter();
    });

    if (screen.width <= 1023) {
      filter.addEventListener('submit', (evt) => {
        evt.preventDefault();
        deactivePopupFilter();
      });
    }

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        deactivePopupFilter();
      }
    });

    document.addEventListener('click', (evt) => {
      if (evt.target === backgroundPopup) {
        deactivePopupFilter();
      }
    });
  }
}());
