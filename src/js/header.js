document.addEventListener('DOMContentLoaded', () => {
  const modeSwitcherBtn = document.getElementById('mode-switcher');
  const burgerBtn = document.getElementById('show-menu');
  const closeBtn = document.getElementById('close-menu');
  const menuList = document.querySelector('.menu-nav');
  const desktopMenuList = document.querySelector('.menu-list');
  const heroLink = document.getElementById('hero-link');

  // Switch Mode for Light/Dark theme
  if (modeSwitcherBtn) {
    // Load color mode from localStorage
    const savedMode = localStorage.getItem('color-mode');
    if (savedMode) {
      document.body.classList.add(savedMode);
      modeSwitcherBtn.checked = savedMode === 'dark'; // Set checkbox state based on saved mode
    }

    // Function to switch color mode
    const switchColorModeHandler = event => {
      event.preventDefault();
      const mode = document.body.classList.contains('dark') ? 'light' : 'dark';
      document.body.classList.toggle('dark');

      // Update localStorage
      localStorage.setItem('color-mode', mode);

      // Update checked state
      modeSwitcherBtn.checked = mode === 'dark';
    };

    // Attach event listener
    modeSwitcherBtn.addEventListener('change', switchColorModeHandler);

    document.addEventListener('keydown', function (event) {
      const switcher = event.target.classList.contains('switcher')
      if (switcher && event.key === 'Enter') {
        // Assuming 'modeSwitcherBtn' is the ID of your button
        modeSwitcherBtn.click();
      }
      });
  }

  // Hide Loader when Page is load
  const onPageLoad = () => {
    var loaderOverlay = document.querySelector('.loader-overlay');

    if (loaderOverlay) {
      loaderOverlay.classList.add('is-hidden');
    }
  }

  // Hide Preloader after 2 seconds
  setTimeout(() => {
    onPageLoad();
  }, 1000);

  // Handler Open Mobile Menu on click
  const onOpenMobileMenu = event => {
    event.preventDefault();

    const headerMenuEl = document.querySelector('.header-menu');
    headerMenuEl.classList.add('is-open');

    document.body.style.overflow = 'hidden';
  };

  // Event for Open Menu
  burgerBtn.addEventListener('click', onOpenMobileMenu);

  // Handler Close Mobile Menu on click
  const onCloseMobileMenu = event => {
    event.preventDefault();
    const headerMenuEl = document.querySelector('.header-menu');
    headerMenuEl.classList.remove('is-open');
    document.body.style.overflow = 'inherit';
  };

  // Event for Close Menu
  closeBtn.addEventListener('click', onCloseMobileMenu);

  // Handler on Mobile Menu Click
  const menuLinkClick = event => {
    event.preventDefault();
    const targetLink = event.target.classList.contains('menu-list-link');

    if (targetLink) {
      const headerMenuEl = document.querySelector('.header-menu');
      headerMenuEl.classList.remove('is-open');
      document.body.style.overflow = 'inherit';

      handleLinkClick(event.target)
    }
  };

  // Event On Mobile Menu Click
  menuList.addEventListener('click', menuLinkClick);

  // Initialize the scroll function
  scroll('#about', '#about-link');
  scroll('#my-projects', '#project-link');
  scroll('#contacts', '#contacts-link');

  // Function Scroll
  function scroll(id, item) {
    window.addEventListener('scroll', function () {
      let element = document.querySelector(id);
      let menuItem = document.querySelector(item);

      if (element && menuItem) {
        let hT = element.offsetTop;
        let blockHeight = element.offsetHeight;
        let range = blockHeight - 100;
        let wS = window.scrollY + 200;

        if (wS >= hT && wS <= hT + range) {
          document.querySelectorAll('.menu-list-item').forEach(function (el) {
            el.classList.remove('active');
          });
          menuItem.classList.add('active');
        } else {
          menuItem.classList.remove('active');
        }
      }
    });
  }

  // Smooth scroll to section
  function handleLinkClick(event) {
    const targetId = event.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 120; // 120px earlier

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Handler Desktop Menu Link
  const onDesktopMenuLinkClick = (event) => {
    event.preventDefault();
    const link = event.target.classList.contains('menu-list-link');

    if (link) {
      handleLinkClick(event.target);
    }
  }

  // Handler Hero Link
  const onHeroLinkClick = (event) => {
    event.preventDefault();
    handleLinkClick(event.currentTarget);
  }

  // Event Desktop Menu Link
  desktopMenuList.addEventListener('click', onDesktopMenuLinkClick);
  heroLink.addEventListener('click', onHeroLinkClick);

});