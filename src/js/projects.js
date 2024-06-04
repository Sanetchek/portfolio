import AOS from 'aos';
import 'aos/dist/aos.css';

// init aos animation
AOS.init({
  offset: 60
});

// Import sprite
import svgSprite from '../img/sprite.svg';

// Import images
import project_4_mobile_default from '../img/my-projects/my-projects-img--mobile--4.jpg';
import project_4_mobile_retina from '../img/my-projects/my-projects-img--mobile--4@2x.jpg';
import project_4_tablet_default from '../img/my-projects/my-projects-img--tablet--4.jpg';
import project_4_tablet_retina from '../img/my-projects/my-projects-img--tablet--4@2x.jpg';
import project_4_desktop_default from '../img/my-projects/my-projects-img--desktop--4@2x.jpg';
import project_4_desktop_retina from '../img/my-projects/my-projects-img--desktop--4@2x.jpg';
import project_5_mobile_default from '../img/my-projects/my-projects-img--mobile--5.jpg';
import project_5_mobile_retina from '../img/my-projects/my-projects-img--mobile--5@2x.jpg';
import project_5_tablet_default from '../img/my-projects/my-projects-img--tablet--5.jpg';
import project_5_tablet_retina from '../img/my-projects/my-projects-img--tablet--5@2x.jpg';
import project_5_desktop_default from '../img/my-projects/my-projects-img--desktop--5@2x.jpg';
import project_5_desktop_retina from '../img/my-projects/my-projects-img--desktop--5@2x.jpg';
import project_6_mobile_default from '../img/my-projects/my-projects-img--mobile--6.jpg';
import project_6_mobile_retina from '../img/my-projects/my-projects-img--mobile--6@2x.jpg';
import project_6_tablet_default from '../img/my-projects/my-projects-img--tablet--6.jpg';
import project_6_tablet_retina from '../img/my-projects/my-projects-img--tablet--6@2x.jpg';
import project_6_desktop_default from '../img/my-projects/my-projects-img--desktop--6@2x.jpg';
import project_6_desktop_retina from '../img/my-projects/my-projects-img--desktop--6@2x.jpg';
import project_7_mobile_default from '../img/my-projects/my-projects-img--mobile--7.jpg';
import project_7_mobile_retina from '../img/my-projects/my-projects-img--mobile--7@2x.jpg';
import project_7_tablet_default from '../img/my-projects/my-projects-img--tablet--7.jpg';
import project_7_tablet_retina from '../img/my-projects/my-projects-img--tablet--7@2x.jpg';
import project_7_desktop_default from '../img/my-projects/my-projects-img--desktop--7@2x.jpg';
import project_7_desktop_retina from '../img/my-projects/my-projects-img--desktop--7@2x.jpg';
import project_8_mobile_default from '../img/my-projects/my-projects-img--mobile--8.jpg';
import project_8_mobile_retina from '../img/my-projects/my-projects-img--mobile--8@2x.jpg';
import project_8_tablet_default from '../img/my-projects/my-projects-img--tablet--8.jpg';
import project_8_tablet_retina from '../img/my-projects/my-projects-img--tablet--8@2x.jpg';
import project_8_desktop_default from '../img/my-projects/my-projects-img--desktop--8@2x.jpg';
import project_8_desktop_retina from '../img/my-projects/my-projects-img--desktop--8@2x.jpg';
import project_9_mobile_default from '../img/my-projects/my-projects-img--mobile--9.jpg';
import project_9_mobile_retina from '../img/my-projects/my-projects-img--mobile--9@2x.jpg';
import project_9_tablet_default from '../img/my-projects/my-projects-img--tablet--9.jpg';
import project_9_tablet_retina from '../img/my-projects/my-projects-img--tablet--9@2x.jpg';
import project_9_desktop_default from '../img/my-projects/my-projects-img--desktop--9@2x.jpg';
import project_9_desktop_retina from '../img/my-projects/my-projects-img--desktop--9@2x.jpg';
import project_10_mobile_default from '../img/my-projects/my-projects-img--mobile--10.jpg';
import project_10_mobile_retina from '../img/my-projects/my-projects-img--mobile--10@2x.jpg';
import project_10_tablet_default from '../img/my-projects/my-projects-img--tablet--10.jpg';
import project_10_tablet_retina from '../img/my-projects/my-projects-img--tablet--10@2x.jpg';
import project_10_desktop_default from '../img/my-projects/my-projects-img--desktop--10@2x.jpg';
import project_10_desktop_retina from '../img/my-projects/my-projects-img--desktop--10@2x.jpg';

// Define projects array
const projects = [{
    name: "Power pulse webservice",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_4_mobile_default,
        retina: project_4_mobile_retina,
      },
      tablet: {
        default: project_4_tablet_default,
        retina: project_4_tablet_retina,
      },
      desktop: {
        default: project_4_desktop_default,
        retina: project_4_desktop_retina,
      },
    },
    pageNum: 0
  },
  {
    name: "Mimino website",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_5_mobile_default,
        retina: project_5_mobile_retina,
      },
      tablet: {
        default: project_5_tablet_default,
        retina: project_5_tablet_retina,
      },
      desktop: {
        default: project_5_desktop_default,
        retina: project_5_desktop_retina,
      },
    },
    pageNum: 0
  },
  {
    name: "Vyshyvanka vibes Landing Page",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_6_mobile_default,
        retina: project_6_mobile_retina,
      },
      tablet: {
        default: project_6_tablet_default,
        retina: project_6_tablet_retina,
      },
      desktop: {
        default: project_6_desktop_default,
        retina: project_6_desktop_retina,
      },
    },
    pageNum: 0
  },
  {
    name: "Chego jewelry website",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_7_mobile_default,
        retina: project_7_mobile_retina,
      },
      tablet: {
        default: project_7_tablet_default,
        retina: project_7_tablet_retina,
      },
      desktop: {
        default: project_7_desktop_default,
        retina: project_7_desktop_retina,
      },
    },
    pageNum: 1
  },
  {
    name: "Energy flow webservice",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_8_mobile_default,
        retina: project_8_mobile_retina,
      },
      tablet: {
        default: project_8_tablet_default,
        retina: project_8_tablet_retina,
      },
      desktop: {
        default: project_8_desktop_default,
        retina: project_8_desktop_retina,
      },
    },
    pageNum: 1
  },
  {
    name: "Fruitbox online store",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_9_mobile_default,
        retina: project_9_mobile_retina,
      },
      tablet: {
        default: project_9_tablet_default,
        retina: project_9_tablet_retina,
      },
      desktop: {
        default: project_9_desktop_default,
        retina: project_9_desktop_retina,
      },
    },
    pageNum: 1
  },
  {
    name: "Starlight studio landing page",
    stack: "React, JavaScript, Node JS, Git",
    link: "https://sanetchek.github.io/portfolio/",
    image: {
      mobile: {
        default: project_10_mobile_default,
        retina: project_10_mobile_retina,
      },
      tablet: {
        default: project_10_tablet_default,
        retina: project_10_tablet_retina,
      },
      desktop: {
        default: project_10_desktop_default,
        retina: project_10_desktop_retina,
      },
    },
    pageNum: 2
  }
];

// Define DOM elements
const listEl = document.querySelector('.js-my-projects-list');
const loadMoreEl = document.querySelector('.js-my-projects-load-more');
const loadMoreBtnEl = document.querySelector('.js-my-projects-load-more-btn');
const lastProjectItemSelector = '.js-my-projects-list-item:last-child';

// Define initial variables
let lastGalleryItemEl = getLastProjectsItemEL();
let currentIndex = 0;
const projectsPerPage = 3;

// Define listeners
const onLoadMoreBtnClick = () => {

  let projectsToLoad = '';

  for (let i = 0; i < projectsPerPage; i++) {
    const project = projects[currentIndex];
    projectsToLoad += createProject(project);

    if (currentIndex >= projects.length - 1) {
      hideLoadMore();
      break;
    }
    currentIndex++;
  }

  listEl.insertAdjacentHTML('beforeend', projectsToLoad);

  AOS.refesh();

  window.scrollBy({
    top: lastGalleryItemEl.getBoundingClientRect().bottom,
    left: 0,
    behavior: 'smooth',
  });

  lastGalleryItemEl = getLastProjectsItemEL();
};

// Add listeners
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

// Common functions
function getLastProjectsItemEL() {
  return listEl.querySelector(lastProjectItemSelector);
}

function createProject(project) {
  const {
    name,
    image,
    stack,
    link
  } = project;
  return `<li class="my-projects-list-item js-my-projects-list-item" data-aos="fade-up">
      <img
        class="my-projects-img"
        srcset="
            ${ image.mobile.default } 320w,
            ${ image.mobile.retina } 640w,
            ${ image.tablet.default } 704w,
            ${ image.tablet.retina } 1408w,
            ${ image.desktop.default } 1008w,
            ${ image.desktop.retina } 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="${ image.mobile.default }"
        alt="${ name }"
        width="320"
      />
      <div class="my-projects-stack">${ stack }</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${ name }</h3>
        <a class="my-projects-link" href="${ link }" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="${ svgSprite }#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`;
}

function hideLoadMore() {
  loadMoreEl.classList.add('is-hidden');
}