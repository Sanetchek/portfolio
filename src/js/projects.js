const projects = {
  totals: 9,
  hits: [
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 0
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 0
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 0
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 1
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 1
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 1
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: '',
      pageNum: 2
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: ''
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: ''
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: ''
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: ''
    },
    {
      image: 'www',
      title: 'Project 1',
      tags: [],
      link: ''
    },
  ]
}

const total = projects.totals
const perPage = 3
const totalPages = Math.ceil(total / 3) // 3

const projectsList = projects.hits
let currPageNum = 2

projectsList.filter(({ pageNum }) => pageNum === currPageNum)