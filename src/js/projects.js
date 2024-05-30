// Projects to load
const projects = [
  {
    name: 'Power pulse webservice',
    number: '4',
    pageNum: 0,
  },
  {
    name: 'Mimino website',
    number: '5',
    pageNum: 0,
  },
  {
    name: 'Vyshyvanka vibes Landing Page',
    number: '6',
    pageNum: 0,
  },
  {
    name: 'Chego jewelry website',
    number: '7',
    pageNum: 1,
  },
  {
    name: 'Energy flow webservice',
    number: '8',
    pageNum: 1,
  },
  {
    name: 'Fruitbox online store',
    number: '9',
    pageNum: 1,
  },
  {
    name: 'Starlight studio landing page',
    number: '10',
    pageNum: 2,
  },
];

// Define DOM elements
const listEl = document.querySelector('.js-my-projects-list');
const loadMoreEl = document.querySelector('.js-my-projects-load-more');
const loadMoreBtnEl = document.querySelector('.js-my-projects-load-more-btn');
const lastProjectItemSelector = '.js-my-projects-list-item:last-child';

// Define initial variables
const perPage = 3;
let currentPageNum = 0;
let lastGalleryItemEl = getLastProjectsItemEL();
let isNoProjectsToLoad = false;

// Define listeners
const onLoadMoreBtnClick = function() {
  const projectsToLoad = getProjects(projects);

  if (!projectsToLoad) {
    hideLoadMore();
    return;
  }

  const markup = createProjectItem(projectsToLoad);

  listEl.insertAdjacentHTML('beforeend', markup);

  window.scrollBy({
    top: lastGalleryItemEl.getBoundingClientRect().bottom,
    left: 0,
    behavior: 'smooth',
  });

  lastGalleryItemEl = getLastProjectsItemEL();

  if (projectsToLoad.length < perPage) {
    isNoProjectsToLoad = true;
  }

  if (isNoProjectsToLoad) {
    hideLoadMore();
  }
};

// Add listeners
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

// Common functions
function getLastProjectsItemEL() {
  return listEl.querySelector(lastProjectItemSelector);
}

function getProjects(projectsObj) {
  let projects = projectsObj.filter(({ pageNum }) => pageNum === currentPageNum);
  if (projects.length === 0) return false;
  currentPageNum += 1;
  return projects;
}

function createProjectItem(projects) {
  return projects
    .map(
      ({
         name,
         number,
       }) => `
    <li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ./img/my-projects/my-projects-img--mobile--${ number }.jpg 320w,
            ./img/my-projects/my-projects-img--mobile--${ number }@2x.jpg 640w,
            ./img/my-projects/my-projects-img--tablet--${ number }.jpg 704w,
            ./img/my-projects/my-projects-img--tablet--${ number }@2x.jpg 1408w,
            ./img/my-projects/my-projects-img--desktop--${ number }.jpg 1008w,
            ./img/my-projects/my-projects-img--desktop--${ number }@2x.jpg 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="./img/my-projects/my-projects-img--mobile--${ number }.jpg"
        alt="${ name }"
        width="320"
        height="184"
      />
      <div class="my-projects-stack">React, JavaScript, Node JS, Git</div>
      <div class="my-projects-name-link">
        <div class="my-projects-name">${ name }</div>
        <a class="my-projects-link" href="https://sanetchek.github.io/portfolio/" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="./img/sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`,
    )
    .join('');
}

function hideLoadMore() {
  loadMoreEl.classList.add('is-hidden');
}