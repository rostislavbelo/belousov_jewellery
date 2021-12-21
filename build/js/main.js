//Управление мобильным меню.
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
      slidesPerView: 2.000000000000001,
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
      spaceBetween: '10.65%',
    };

    const swiperArea = document.querySelector('.swiper');
    const DESKTOP_WIDTH = 1023;
    const TABLET_WIDTH = 767;

    const desktopNoTouchValue = window.screen.width <= 1023;

    const initializeSwipe = (screen) => {

      new Swiper(swiperArea, {
        //  simulateTouch: screen,
        loop: true,
        breakpoints: {
          1023: SWIPER_DESKTOP,
          767: SWIPE_TABLET,
          0: SWIPER_MOBILE,
        },
      });
    };

    initializeSwipe();
  }
}());

/*

  window.addEventListener('resize', () => {
    if (window.screen.width <= DESKTOP_WIDTH) {
      initializeSwipe(true);
    } else {
      if (window.screen.width <= DESKTOP_WIDTH) {
        initializeSwipe(false)
      }
    }
  })

   */

/* new Swiper('.swiper', {
    breakpoints: {

      0: {SWIPER_MOBILE},

      TABLET_WIDTH: {SWIPE_TABLET},

      DESKTOP_WIDTH: {SWIPER_DESKTOP},
    }
  });
   */
/*
  new Swiper('.swiper', {
    breakpoints: {

      0: { SWIPER_MOBILE },

      TABLET_WIDTH: { SWIPE_TABLET },

      DESKTOP_WIDTH: { SWIPER_DESKTOP },
    }
  });
   */

/* const pepepe = () => {
    window.addEventListener('resize', () => {
      let rarara = window.screen.width < 1023;
      return rarara;
    });
  }

  console.log(pepepe())
   */


/* if (screen.width > DESKTOP_WIDTH) {
    initializeSwipeDesktop();
  }

  if (screen.width <= DESKTOP_WIDTH && screen.width > TABLET_WIDTH) {
    initializeSwipeTablet();
  }

  if (screen.width <= TABLET_WIDTH) {
    initializeSwipeMobile();
  }

  const setTimeOutResizeSwipe = () => {

    setTimeout(() => window.addEventListener('resize', () => {
      initializeSwipeDesktop();
      initializeSwipeTablet();
    }), 400);


    clearTimeout(() => window.addEventListener('resize', () => {
      initializeSwipeDesktop();
      initializeSwipeTablet();

    }), 500);


  }

  setTimeOutResizeSwipe();
   */

/* const DESKTOP_WIDTH = 1023;
  const TABLET_WIDTH = 767;
  const SLIDES_GROUP_MOBILE = 2;
  const SLIDES_VIEW_DESKTOP = 4;
  const SLIDES_VIEW_MOBILE = 2;
  const SLIDES_GROUP_DESKTOP = 4;
  const PAGINATION_MOBILE = 'fraction';
  const PAGINATION_DESKTOP = 'bullets';
  const SPACE = 30;

  const RENDER_DESKTOP = (index, className) => {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  };


  const startSwiper = (type, view, group, space, touch, render) => {

    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: type,
        clickable: true,
        renderBullet: render,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      simulateTouch: touch,
      slidesPerView: view,
      slidesPerGroup: group,
      spaceBetween: space,
      loop: true,
    },
    );
  }

  const initializeSwipe = () => {

    if (screen.width > DESKTOP_WIDTH) {
      startSwiper(PAGINATION_DESKTOP, SLIDES_VIEW_DESKTOP, SLIDES_GROUP_DESKTOP, SPACE, false, RENDER_DESKTOP);
    }

    if (screen.width <= DESKTOP_WIDTH || screen.width > TABLET_WIDTH) {
      startSwiper(PAGINATION_DESKTOP, SLIDES_VIEW_MOBILE, SLIDES_GROUP_MOBILE, SPACE, true, RENDER_DESKTOP);
    }

    if (screen.width <= TABLET_WIDTH) {
      startSwiper(PAGINATION_MOBILE, SLIDES_VIEW_MOBILE, SLIDES_GROUP_MOBILE, SPACE, true, false);
    }


  }

  initializeSwipe();


  const setTimeOutResizeSwipe = () => {

    setTimeout(() => window.addEventListener('resize', () => {
      initializeSwipe();
    }), 400);


    clearTimeout(() => window.addEventListener('resize', () => {
      initializeSwipe();

    }), 500);


  }

  setTimeOutResizeSwipe();
   */

//startSwiper(TABLET_WIDTH, DESKTOP_WIDTH, PAGINATION_DESKTOP, SLIDES_VIEW_DESKTOP, SLIDES_GROUP_MOBILE, SPACE, true, RENDER_DESKTOP);


/* if (screen.width <= 767) {
    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      simulateTouch: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true,
    },
    );
  };
  };

  startSwiper();

   */


/* new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    simulateTouch: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
  },
  );
  };
  startSwiper();
   */


/*

  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    simulateTouch: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,
  },
  )
  }; */


/* const swipe = () => {
    if (screen.width <= 1023) {
      new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        simulateTouch: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        loop: true,
      },
      )
    } else {
      startSwiper();
    }

    if (screen.width <= 768) {
      new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        simulateTouch: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        loop: true,
      },
      )
    } else {
      startSwiper();
    }
  }

  const setTimeOutResize = () => {
    setTimeout(() => window.addEventListener('resize', () => {
      swipe()
    }), 400);

    clearTimeout(() => window.addEventListener('resize', () => {
      swipe()
    }), 500);
  }

  setTimeOutResize();
   */

/* const swipe = () => {
    if (document.documentElement.clientWidth <= 768) {
      new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        simulateTouch: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        loop: true,
      });
    } else {
      startSwiper();
    };
  };

  swipe();
   */


/* Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
   */


/* pagination: {
    el: ".swiper-pagination",
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
  },
  navigation: {
    nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  //Отключение перетаскивания
  simulateTouch: false,

    //выводить по количеству
    slidesPerView: 4,

      //Пролистывать по количеству
      slidesPerGroup: 4,

        //Интервал
        spaceBetween: 30,

          //Замыкание слайдера в кольцо
          loop: true,
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
   */
