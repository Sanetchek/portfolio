import axios from 'axios';

// Function to fetch projects from json file
const fetchProjects = async filePath => {
  const response = await axios.get(filePath);
  return response.data;
};

// Define DOM elements
const listEl = document.querySelector('.js-my-projects-list');
const loadMoreEl = document.querySelector('.js-my-projects-load-more');
const loadMoreBtnEl = document.querySelector('.js-my-projects-load-more-btn');
const lastProjectItemSelector = '.js-my-projects-list-item:last-child';

// Define initial variables
const projectsJsonFilePath = './my-projects.json';
const perPage = 3;
let currentPageNum = 0;
let lastGalleryItemEl = getLastProjectsItemEL();
let isNoProjectsToLoad = false;
let projectsArr = [];

// Define listeners
const onLoadMoreBtnClick = async () => {

  // To fetch projects once instead if each time on click
  if (projectsArr.length === 0) {
    try {
      projectsArr = await fetchProjects(projectsJsonFilePath);
    } catch (error) {
      alert(error.message);
    }
  }

  const projectsToLoad = getProjects(projectsArr);

  if (!projectsToLoad || projectsToLoad.length === 0) {
    hideLoadMore();
    return;
  }

  const markup = createProjectItem(projectsToLoad);

  listEl.insertAdjacentHTML('beforeend', markup);

  // Need to correct getBoundingClientRect calculation after insertAdjacentHTML
  setTimeout(function() {

    window.scrollBy({
      top: lastGalleryItemEl.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth',
    });

    lastGalleryItemEl = getLastProjectsItemEL();

  }, 50);


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
  let projects = projectsObj.filter(
    ({ pageNum }) => pageNum === currentPageNum,
  );
  if (projects.length === 0) return false;
  currentPageNum += 1;
  return projects;
}

function createProjectItem(projects) {
  return projects
    .map(
      ({ name, number, stack, link }) => `
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
      />
      <div class="my-projects-stack">${ stack }</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${ name }</h3>
        <a class="my-projects-link" href="${ link }" target="_blank">
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
