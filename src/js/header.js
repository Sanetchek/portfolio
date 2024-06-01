document.addEventListener('DOMContentLoaded', () => {
  const modeSwitcherBtn = document.getElementById('mode-switcher');

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
});
