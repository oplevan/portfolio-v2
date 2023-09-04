const projects = [
  {
    id: 'bruckenbauverein-frankfurt',
    title: 'Bruckenbauverein Frankfurt',
    description: {
      short: 'A WordPress website built for the historical town hall, Der Lange Franz, in Frankfurt, Germany, as part of the frontend development team.',
      full: 'The challenge for me was to make it responsive since most pages contain large images so I needed to make sure the whole website looks good on any device.',
    },
    thumbnail: '/assets/projects/bruckenbauverein/preview.png',
    thumbnailHover: '',
    carouselImages: [],
    techList: ['CSS', 'HTML', 'JavaScript', 'jQuery', 'WordPress'],
    category: ['all', 'frontend', 'wordpress'],
    animation: {
      type: 'fade-up',
      delay: 0,
    },
    links: {
      web: 'https://brueckenbauverein-frankfurt.de/',
      gitHub: '',
    },
  },
  {
    id: 'netflix',
    title: 'Netflix Clone',
    description: {
      short: 'Built a Netflix replica using React, Firebase and hosted on Netlify.',
      full: "In this React Project I'm trying to replicate Netflix - the world's leading streaming entertainment platform. At this moment it has multiple pages such as Home, Sign In & Sign Up and Browse. I used Firebase auth to store data in the Firebase auth database when a user signs up & signs in. I build this app using React (custom hooks, context, portals), Compound & Styled Components for styling, React Router for navigation, as well as custom UI effects such as hover and modal.",
    },
    thumbnail: '/assets/projects/netflix/preview.png',
    thumbnailHover: '/images/netflix-clone/preview-hover.jpg',
    carouselImages: [
      '/images/netflix-clone/netflix-clone-1.jpg',
      '/images/netflix-clone/netflix-clone-2.jpg',
      '/images/netflix-clone/netflix-clone-3.jpg',
      '/images/netflix-clone/netflix-clone-4.jpg',
      '/images/netflix-clone/netflix-clone-5.jpg',
      '/images/netflix-clone/netflix-clone-6.jpg',
      '/images/netflix-clone/netflix-clone-7.jpg',
    ],
    techList: ['React', 'Firebase'],
    category: ['all', 'frontend', 'react'],
    animation: {
      type: 'fade-up',
      delay: 0,
    },
    links: {
      web: 'https://netflix-oleg.netlify.app/',
      gitHub: 'https://github.com/oplevan/netflix-clone',
    },
  },
  {
    id: 'my-portfolio',
    title: 'Personal Website V1',
    description: {
      short: 'First iteration of my personal Portfolio website built with React JS, Material UI and hosted on Netlify.',
      full: "The idea behind this project was to create a showcase of my technical and design skills. I tried to keep the UI as simple as possible yet to make it attractive and stylish. For this project I've used ReactJs, Material UI components and React Router for navigation.",
    },
    thumbnail: '/assets/projects/portfolio-v1/preview.png',
    thumbnailHover: '/images/my-portfolio/preview-hover.jpg',
    carouselImages: [
      '/images/my-portfolio/1.jpg',
      '/images/my-portfolio/2.jpg',
      '/images/my-portfolio/3.jpg',
      '/images/my-portfolio/4.jpg',
      '/images/my-portfolio/5.jpg',
      '/images/my-portfolio/6.jpg',
    ],
    techList: ['React', 'Firebase', 'Material UI'],
    category: ['all', 'frontend', 'react'],
    animation: {
      type: 'fade-up',
      delay: 0,
    },
    links: {
      web: 'https://oplevan.com',
      gitHub: 'https://github.com/oplevan/my-portfolio',
    },
  },
  {
    id: 'tyrvaya',
    title: 'Tyrvaya® - promo website',
    description: {
      short:
        "A promo website for OysterPoint's new product - Tyrvaya®, built with React, leveraging Salesforce Marketing Cloud API integration, and deployed to AWS using CI/CD pipeline.",
      full: '',
    },
    thumbnail: '/assets/projects/tyrvaya/preview.png',
    thumbnailHover: '/images/my-portfolio/preview-hover.jpg',
    carouselImages: [
      '/images/my-portfolio/1.jpg',
      '/images/my-portfolio/2.jpg',
      '/images/my-portfolio/3.jpg',
      '/images/my-portfolio/4.jpg',
      '/images/my-portfolio/5.jpg',
      '/images/my-portfolio/6.jpg',
    ],
    techList: ['React', 'AWS', 'API', 'CI/CD'],
    category: ['all', 'frontend', 'react'],
    animation: {
      type: 'fade-up',
      delay: 0,
    },
    links: {
      web: 'https://oplevan.com',
      gitHub: 'https://github.com/oplevan/my-portfolio',
    },
  },
];
export default projects;
