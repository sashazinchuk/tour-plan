const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
});

$('.parallax-window').parallax({imageSrc: '../img/bg-newsletter.jpg'});

const menuButton = document.querySelector('.humburger-menu');
menuButton.addEventListener('click', function() {
  document.querySelector('.header-bottom').classList.toggle('header-bottom_visible');
});