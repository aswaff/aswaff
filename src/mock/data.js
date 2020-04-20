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
    img: 'facerecognition.JPG',
    title: 'Face Recognition APP',
    info:
      "This is a web application using React, Node, and postgreSQL. It lets users register and sign in, and place image URL's. Using the Clairify API, the app will detect human faces, and using CSS, will place a square around the face.",
    info2:
      'Please note: This app is hosted on Heroku free edition, since Heroko deprioritizes free accounts, please give it time to load.',
    url: 'https://face-recognitionaswaff.herokuapp.com/',
    repo: 'https://github.com/aswaff/facerecognition', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'URL shorten.JPG',
    title: 'URL Shortener',
    info:
      'This application is made using React.  It utilizes the shrtcode API.  It allows users to paste a link and then fetches the API, and returns the shortened URL.',
    info2: '',
    url: 'https://aswaff.github.io/URL-Shortener/',
    repo: 'https://github.com/aswaff/URL-Shortener', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.jpg',
    title: 'RoboFriends',
    info:
      'This small application makes a request from Typicode, for a users JSON placeholder.  It places the fetched JSON data into a nice layout of cards on the web page.  It uses RoboHash to generate the photos based on the ID of the JSON. It also allows a live search, that arranges the cards on the page as you type.',
    info2: '',
    url: 'https://aswaff.github.io/robofriends/',
    repo: 'https://github.com/aswaff/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me!',
  btn: 'Email',
  email: 'averyds17@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/avery-swafford-999a2370/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aswaff',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
