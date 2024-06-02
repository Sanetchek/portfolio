document.addEventListener('DOMContentLoaded', () => {
  const modeSwitcherBtn = document.getElementById('mode-switcher');
  const burgerBtn = document.getElementById('show-menu');
  const closeBtn = document.getElementById('close-menu');

  if (modeSwitcherBtn) {
    // Site Color Mode Switcher
    const switchColorModeHandler = event => {
      event.preventDefault();
      document.body.classList.toggle('dark');
      const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('color-mode', mode);
    };

    // Events
    modeSwitcherBtn.addEventListener('click', switchColorModeHandler);
  }

  // Hide Loader when Page is load
  const onPageLoad = () => {
    var loaderOverlay = document.querySelector('.loader-overlay');
    if (loaderOverlay) {
      loaderOverlay.classList.add('is-hidden');
    }
  };

  onPageLoad();

  const onOpenMobileMenu = event => {
    event.preventDefault();

    const headerMenuEl = document.querySelector('.header-menu');
    headerMenuEl.classList.add('is-open');

    document.body.style.overflow = 'hidden';
  };

  burgerBtn.addEventListener('click', onOpenMobileMenu);

  const onCloseMobileMenu = event => {
    event.preventDefault();

    const headerMenuEl = document.querySelector('.header-menu');

    headerMenuEl.classList.remove('is-open');

    document.body.style.overflow = 'inherit';
  };

  closeBtn.addEventListener('click', onCloseMobileMenu);
});
