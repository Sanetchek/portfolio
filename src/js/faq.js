import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

 

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.ac-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement.parentElement;
      const isActive = parent.classList.contains('active');

      triggers.forEach(trig => trig.querySelector('use').setAttribute('href', '../img/sprite.svg#icon-drop-down'));
      document.querySelectorAll('.faq-list-item.ac').forEach(item => item.classList.remove('active'));

      if (!isActive) {
        parent.classList.add('active');
        trigger.querySelector('use').setAttribute('href', '../img/sprite.svg#icon-drop-up');
      }
    });
  });

new Accordion('.faq-list');
});