import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Settings
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

// Variables
const contactFormEl = document.getElementById('contact_form');
const customerEmailEl = document.getElementById('customer_email');
const contactsModal = document.getElementById('modal');
const contactsModalCloseBtn = contactsModal.querySelector('.modal-close-btn');

// Email field validation
const onEmailInput = (event) => {
  const email = event.target;
  const iconSuccess = document.querySelector('.icon-success');
  const errorMessage = document.getElementById('error_message');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email.value)) {
    errorMessage.textContent = 'Invalid email, try again.';
    email.classList.add('input-error'); // Optional: Add a class for styling errors
    iconSuccess.classList.remove('active');
  } else {
    errorMessage.textContent = '';
    email.classList.remove('input-error'); // Optional: Remove error class if valid
    iconSuccess.classList.add('active');
  }
}

// Submit Contact Form Handler
const onContactFormSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formElements = form.elements;
  const email = formElements.customer_email.value.trim();
  const comment = formElements.customer_message.value.trim();
  const params = {
    email,
    comment
  };

  axios.post('/requests', params)
    .then((response) => {
      const {
        title,
        message
      } = response.data;
      contactsModal.querySelector('.modal-title').innerHTML = title;
      contactsModal.querySelector('.modal-message').innerHTML = message;

      modalOpen();
      form.reset();
    })
    .catch((error) => {
      iziToast.error({
        message: error.message,
      })
    });
}

// Events
customerEmailEl.addEventListener('blur', onEmailInput);
contactFormEl.addEventListener('submit', onContactFormSubmit);

// Modal Events
contactsModalCloseBtn.addEventListener('click', modalClose);
window.addEventListener('click', (event) => {
  if (event.target == contactsModal) {
    modalClose();
  }
});

// Modal Open function
function modalOpen() {
  contactsModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Modal Close function
function modalClose() {
  contactsModal.classList.remove('is-open');
  document.body.style.overflow = '';
}