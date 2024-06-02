import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

 

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.ac-trigger');

// Add click event listener to all triggers
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement.parentElement;
      const isActive = parent.classList.contains('active');

// Close all panels
      triggers.forEach(trig => trig.querySelector('use').setAttribute('href', '../img/sprite.svg#icon-drop-down'));
      document.querySelectorAll('.faq-list-item.ac').forEach(item => item.classList.remove('active'));


      //If the pressed panel was inactive, open it
      if (!isActive) {
        parent.classList.add('active');
        trigger.querySelector('use').setAttribute('href', '../img/sprite.svg#icon-drop-up');
      }
    });
  });

  //Connect accordion-js library
new Accordion('.faq-list');
});