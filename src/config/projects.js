'use strict'

module.exports = {
  title: 'Projects',
  state: 'projects',
  description: 'Check out our work',
  projects: [
    {
      id: 1,
      name: 'Project 1',
      date: 'October 2018',
      categories: 'commercial',
      portfolioImg: {
        alt: 'Project 1 img',
        src: 'http://via.placeholder.com/809x600'
      },
      type: 'Commercial',
      address: 'San Francisco, CA',
      info: 'Here is some project info.'
    },
    {
      id: 2,
      name: 'Project 2',
      date: 'August 2018',
      categories: 'residential',
      portfolioImg: {
        alt: 'Project 2 img',
        src: 'http://via.placeholder.com/809x600'
      },
      type: 'Residential',
      address: 'San Bruno, CA',
      info: 'Here is some project info.'
    },
    {
      id: 3,
      name: 'Project 3',
      date: 'December 2017',
      categories: 'commercial',
      portfolioImg: {
        alt: 'Project 3 img',
        src: 'http://via.placeholder.com/809x600'
      },
      type: 'Commercial',
      address: 'Pacifica, CA',
      info: 'Here is some project info.'
    }
  ]
}
