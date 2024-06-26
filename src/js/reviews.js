import axios from 'axios';
import Swiper from 'swiper';
import iziToast from 'izitoast';
const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
const elementForMurkup = document.querySelector('.swiper-wrapper');
const murkup = function (reviews) {
  const reviewsArray = [];
  reviews.forEach(review => {
    reviewsArray.push(`
      <li class="swiper-slide">
        <p class="swiper-text">${review.review}"</p>
        <div class="swiper-author-wrapper">
          <img class="swiper-image" src="${review.avatar_url}" alt="author image" loading="lazy">
          <p class="swiper-author">${review.author}</p>
        </div>
      </li>`);
  });
  return reviewsArray.join('');
};
const fechReview = async function fechReviews() {
  await axios
    .get(`https://portfolio-js.b.goit.study/api/reviews`)
    .then(response => {
      return response.data;
    })
    .then(data => {
      elementForMurkup.innerHTML = murkup(data);
    })
    .catch(error => {
      iziToast.show({
        title: 'REVIEWS ERROR: ',
        titleColor: 'white',
        titleSize: '15px',
        titleLineHeight: '150%',
        message: `${error.message}`,
        messageColor: 'white',
        messageSize: '14px',
        messageLineHeight: '150%',
        backgroundColor: '#14c57c',
        zindex: 0,
        close: false,
        closeOnClick: true,
        position: 'bottomLeft',
        timeout: 5000,
        pauseOnHover: true,
        progressBar: true,
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOut',
        transitionInMobile: 'bounceInLeft',
        transitionOutMobile: 'fadeOutDown',
      });

      elementForMurkup.innerHTML = '<p class="error-massege">Not found</p>';
      nextButton.classList.add('is-hidden');
      prevButton.classList.add('is-hidden');
    });
};

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.pagination',
    clickable: true,
    renderBullet: fechReview(),
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      autoHeight: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      autoHeight: true,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      slidesPerGroup: 2,
      autoHeight: false,
    },
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 500,
  allowSlideNext: true,
  on: {
    slideChange: function () {
      if (this.isEnd) {
        nextButton.setAttribute('disabled', '');
      } else {
        nextButton.removeAttribute('disabled', '');
      }
      if (this.isBeginning) {
        prevButton.setAttribute('disabled', '');
      } else {
        prevButton.removeAttribute('disabled', '');
      }
    },
  },
});

prevButton.setAttribute('disabled', '');
nextButton.addEventListener('click', () => {
  swiper.slideNext();
});
prevButton.addEventListener('click', () => {
  swiper.slidePrev();
});