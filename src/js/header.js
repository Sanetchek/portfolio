// Variables
const modeSwitcherBtn = document.getElementById('mode-switcher');

// Site Color Mode Switcher
const switchColorModeHandler = (event) => {
  event.preventDefault();
  document.body.classList.toggle('dark');
};

// Events
modeSwitcherBtn.addEventListener('change', switchColorModeHandler);