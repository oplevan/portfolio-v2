const allProjects = [
  {
    id: 'tyrvaya',
    slug: 'tyrvaya',
    title: 'Tyrvaya® - promo website',
    client: 'Oyster Point',
    projectType: 'Website',
    completionDate: '11/2022',
    images: {
      preview: '/assets/images/projects/tyrvaya/preview.png',
      mockup: '/assets/images/projects/tyrvaya/mockup.png',
      screenshots: [],
    },
    techList: ['React', 'AWS', 'API', 'CI/CD'],
    category: ['all', 'frontend', 'react'],
    links: {
      web: 'https://tyrvaya.com',
      gitHub: '',
    },
    description: {
      short:
        "A promo website for OysterPoint's new product - Tyrvaya®, built with React, leveraging Salesforce Marketing Cloud API integration, and deployed to AWS using CI/CD pipeline.",
      full: '',
    },
    developmentProcess: (
      <>
        <h5>Development Process</h5>
        <ul>
          <li>
            <h6>Project Kickoff</h6>
            The development of this website began with a thorough project kickoff phase. During this stage, I collaborated with stakeholders to define the
            project&apos;s goals, target audience, and key features. We created a project roadmap and established a clear vision for the website.
          </li>
          <li>
            <h6>Technology Stack Selection</h6>
            After the initial planning phase, I selected the technology stack that best suited the project&apos;s requirements. React was chosen as the
            front-end library due to its flexibility and component-based architecture. SCSS was selected for styling to maintain a scalable and maintainable
            codebase.
          </li>
          <li>
            <h6>Git Version Control</h6>
            To ensure smooth collaboration and version control, I used Git for tracking changes in the project&apos;s source code. This allowed for easy
            collaboration with team members and provided a history of code changes.
          </li>
          <li>
            <h6>Responsive Design</h6>
            From the outset, I prioritized responsive design to ensure that the website would be accessible and user-friendly across various devices and screen
            sizes. This involved using media queries and flexbox/grid layouts for efficient and adaptable UI design.
          </li>
          <li>
            <h6>Component-Based Development</h6>
            One of the strengths of React is its component-based architecture. I&nbsp;leveraged this by breaking down the UI into reusable components, resulting
            in a more maintainable codebase and faster development.
          </li>
          <li>
            <h6>Continuous Integration and Deployment</h6>
            For automated testing, building, and deployment, I set up a continuous integration and continuous deployment (CI/CD) pipeline using AWS Amplify.
            This streamlined the development process and ensured that changes were automatically deployed to the production environment.
          </li>
          <li>
            <h6>Testing and Quality Assurance</h6>
            Throughout development, I conducted thorough cross-browser testing to guarantee compatibility with various web browsers as well as used BrowserStack
            for testing responsiveness on various mobile devices.
          </li>
          <li>
            <h6>Monitoring and Performance Optimization</h6>
            After deployment, I implemented monitoring and analytics tools to track user engagement and identify areas for improvement. Performance optimization
            techniques, such as lazy loading of assets and code splitting, were applied to enhance page load times.
          </li>
          <li>
            <h6>Documentation</h6>
            To facilitate future maintenance and onboarding of team members, I maintained comprehensive documentation, including README files, component
            documentation, and code comments.
          </li>
          <li>
            <h6>Ongoing Maintenance</h6>
            The development process doesn&apos;t end with deployment. I remain committed to ongoing maintenance, including addressing bug reports, implementing
            updates, and exploring opportunities for feature enhancements.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'netflix',
    slug: 'netflix-clone',
    title: 'Netflix Clone',
    client: 'Personal project',
    projectType: ' Web App',
    completionDate: '11/2021',
    description: {
      short: 'Built a Netflix replica using React, Firebase and hosted on Netlify.',
      full: "In this React Project I'm trying to replicate Netflix - the world's leading streaming entertainment platform. At this moment it has multiple pages such as Home, Sign In & Sign Up and Browse. I used Firebase auth to store data in the Firebase auth database when a user signs up & signs in. I build this app using React (custom hooks, context, portals), Compound & Styled Components for styling, React Router for navigation, as well as custom UI effects such as hover and modal.",
    },
    images: {
      preview: '/assets/images/projects/netflix/preview.png',
      mockup: '/assets/images/projects/netflix/mockup.png',
      screenshots: [],
    },
    techList: ['React', 'Firebase'],
    category: ['all', 'frontend', 'react'],
    links: {
      web: 'https://netflix-oleg.netlify.app/',
      gitHub: 'https://github.com/oplevan/netflix-clone',
    },
  },
  {
    id: 'portfolio-v1',
    slug: 'portfolio-v1',
    title: 'Personal Website v1',
    client: 'Personal project',
    projectType: 'Web App',
    completionDate: '10/2021',
    description: {
      short: 'First iteration of my personal Portfolio website built with React, Material UI and hosted on Netlify.',
      full: "The idea behind this project was to create a showcase of my technical and design skills. I tried to keep the UI as simple as possible yet to make it attractive and stylish. For this project I've used ReactJs, Material UI components and React Router for navigation.",
    },
    images: {
      preview: '/assets/images/projects/portfolio-v1/preview.png',
      mockup: '/assets/images/projects/portfolio-v1/mockup.png',
      screenshots: [],
    },
    techList: ['React', 'Firebase', 'Material UI'],
    category: ['all', 'frontend', 'react'],
    links: {
      web: 'https://oplevan.com',
      gitHub: 'https://github.com/oplevan/my-portfolio',
    },
  },
  {
    id: 'bruckenbauverein-frankfurt',
    slug: 'bruckenbauverein-frankfurt',
    title: 'Bruckenbauverein Frankfurt',
    client: 'Neuer Brückenbauverein',
    projectType: 'Website',
    completionDate: '9/2016',
    description: {
      short: 'A WordPress website built for the historical town hall, Der Lange Franz, in Frankfurt, Germany, as part of the frontend development team.',
      full: 'The challenge for me was to make it responsive since most pages contain large images so I needed to make sure the whole website looks good on any device.',
    },
    images: {
      preview: '/assets/images/projects/bruckenbauverein/preview.png',
      mockup: '/assets/images/projects/bruckenbauverein/mockup.png',
      screenshots: [],
    },
    techList: ['JavaScript', 'jQuery', 'WordPress'],
    category: ['all', 'frontend', 'wordpress'],
    links: {
      web: 'https://brueckenbauverein-frankfurt.de/',
      gitHub: '',
    },
  },
];
export default allProjects;
