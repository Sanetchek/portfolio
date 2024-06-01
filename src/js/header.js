// Variables
const modeSwitcherBtn = document.getElementById('mode-switcher');

// Site Color Mode Switcher
const switchColorModeHandler = event => {
  event.preventDefault();
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('color-mode', mode);
};

// Hide Loader when Page is load
const onPageLoad = () => {
  var loaderOverlay = document.querySelector('.loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.add('is-hidden');
  }
};

// Events
modeSwitcherBtn.addEventListener('change', switchColorModeHandler);
document.addEventListener('DOMContentLoaded', onPageLoad);

// Open Menu
$('.open-menu-but').on('click', function () {
  $('.header-menu').fadeIn();
  $('body').css('overflow', 'hidden');
});

// Close Menu
$('.close-menu-but').on('click', function () {
  $('.header-menu').fadeOut();
  $('body').css('overflow', 'unset');
});

// Activate Menu BTN for each section
scroll('#about', '#menu_about');
scroll('#yachts', '#menu_yachts');
scroll('#reviews', '#menu_review');

function scroll(id, item) {
  $(window).on('scroll', function () {
    let hT = $(id).offset().top,
      blockHeight = $(id).outerHeight(),
      range = blockHeight - 100,
      wS = $(this).scrollTop() + 100;

    if (wS >= hT && wS <= hT + range) {
      $('.menu-list-item').removeClass('active');
      $(item).addClass('active');
    } else {
      $(item).removeClass('active');
    }
  });
}

// Smooth scroll for links
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();

    $('body').css('overflow', 'unset');

    $('.header-menu').fadeOut();
    $('html, body').stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});
