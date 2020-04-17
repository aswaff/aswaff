import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Avery Swafford | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full Stack Web Dev', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Avery Swafford',
  subtitle: 'Node, React, and Javascript Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I have been in the information technology industry for over 7 years.  I've worked as a help desk person, performing OS installs, virus removal and laptop and desk hardware repair.  I eventually worked my may to become a network engineer and consultant, managing over 150 endpoints and and around 12 servers.  I now assist large and major accounts with IT and software solutions, while maintaining client relationships.",
  paragraphTwo:
    'More recently, I am a self taught full-stack Web Developer.  I have experience in Node.js, React, JavaScript, and CSS/HTML.  As you can see below with my projects, I am a highly motivated and focused developer, that loves to learn new things and ask questions.',
  // paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
