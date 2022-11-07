const bullet = '•';
export const worksData = [
  {
    id: 0,
    ProjectName: 'AfriCities 2022',
    ProjectSubtitle: `AFRICITIES ${bullet} Full Stack Dev ${bullet} 2022`,
    ProjectSubtitle1: 'The 9th AfriCities Summit 2022',
    ProjectSubtitle2: ` ${bullet} Full Stack Dev ${bullet} 2022`,
    Image: './assets/Microverse-Capstone-home-full-page-desktop.png',
    ProjectDescription: 'A website showcasing the AfriCities Summit in Kisumu County, Kenya',
    Technologies: [
      'html',
      'scss',
      'css',
      'javascript',
    ],
    ProjectLink: 'https://walterokumu.github.io/microverse-capstone-1/',
    GitHubLink: 'https://github.com/WalterOkumu/microverse-capstone-1',
  },
  {
    id: 1,
    ProjectName: 'Crypto Watcher',
    ProjectSubtitle: `CRYPTO ${bullet} Full Stack Dev ${bullet} 2022`,
    ProjectSubtitle1: 'CRYPTO WATCHER',
    ProjectSubtitle2: ` ${bullet} Full Stack Dev ${bullet} 2022`,
    Image: './assets/Crypto-Watcher-cover.png',
    ProjectDescription: 'A Web App built in React JS, that draws information from an API, and displays Crypto data in real-time.',
    Technologies: [
      'react',
      'axios',
      'scss',
      'chart.js',
      'react-router-dom',
      'react-alice-carousel',
      'REST-API',
    ],
    ProjectLink: 'https://crypto-watcher-api.netlify.app/',
    GitHubLink: 'https://github.com/WalterOkumu/crypto-watcher',
  },
  {
    id: 2,
    ProjectName: 'TV-Show Web App',
    ProjectSubtitle: `TV SHOWS ${bullet} Full Stack Dev ${bullet} 2022`,
    ProjectSubtitle1: 'WEB APP',
    ProjectSubtitle2: ` ${bullet} Full Stack Dev ${bullet} 2022`,
    Image: './assets/tv-shows-cover.PNG',
    ProjectDescription: 'This is a JavaScript capstone project about building a web application based on an external API. We selected an API, TV-Maze, that provides data about tv shows and then built the webapp around it.',
    Technologies: [
      'html',
      'scss',
      'webpack',
      'javascript',
      'eslint',
      'stylelint',
    ],
    ProjectLink: 'https://walterokumu.github.io/tv-show/dist/',
    GitHubLink: 'https://github.com/WalterOkumu/tv-show',
  },
  {
    id: 3,
    ProjectName: 'React Metrics WebApp',
    ProjectSubtitle: `METRICS ${bullet} Full Stack Dev ${bullet} 2022`,
    ProjectSubtitle1: 'METRICS',
    ProjectSubtitle2: ` ${bullet} Full Stack Dev ${bullet} 2022`,
    Image: './assets/react-metrics-app.PNG',
    ProjectDescription: 'A React mobile web application to check a list of metrics (numeric values) using of React and Redux. The metrics of choice are Crypto currencies.',
    Technologies: [
      'react',
      'sass',
      'react logger',
      'redux logger',
      'react redux',
      '@redux/toolkit',
      'react loading',
      'millify',
      'react sparklines',
      'react icons',
      'html-react-parser',
      'jest',
      'eslint',
      'stylelint',
    ],
    ProjectLink: 'https://okumu-react-metrics-webapp.netlify.app/',
    GitHubLink: 'https://github.com/WalterOkumu/react-metrics-webapp',
  },
  {
    id: 4,
    ProjectName: 'Space Travelers Hub',
    ProjectSubtitle: `SPACE ${bullet} Contributing Dev ${bullet} 2022`,
    ProjectSubtitle1: 'Space Travelers Hub',
    ProjectSubtitle2: ` ${bullet} Contributing Dev ${bullet} 2022`,
    Image: './assets/Space Travellers Hub - Rockets.PNG',
    ProjectDescription: 'In this project, we worked with the real live data from the SpaceX API. Our task was to build a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    Technologies: [
      'scss',
      'react',
      'redux',
      'redux-logger',
      'react-router',
    ],
    ProjectLink: 'https://okumus-space-travelers-hub.netlify.app/',
    GitHubLink: 'https://github.com/WalterOkumu/space-travelers-hub',
  },
];

export function objectToHTML(jsObject) {
  return jsObject.map((object) => object.outerHTML).toString();
}

export function createDiv(name) {
  const div = document.createElement('div');
  div.className = name;
  div.id = name;
  return div;
}

export function createImage(imagePath, altText, name) {
  const image = document.createElement('img');
  image.src = imagePath;
  image.alt = altText;
  image.className = name;
  return image;
}

export function createH2(content) {
  const h2 = document.createElement('h2');
  h2.innerHTML = content;
  return h2;
}

export function createP(name, content) {
  const p = document.createElement('p');
  p.className = name;
  p.id = name;
  p.innerHTML = content;
  return p;
}

export function createUL(name) {
  const ul = document.createElement('ul');
  ul.className = name;
  ul.id = name;
  return ul;
}

export function createLI(name, content) {
  const li = document.createElement('li');
  li.className = name;
  li.id = name;
  li.innerHTML = content;
  return li;
}

export function createLiItems(totalItems, wkIndex, name) {
  const liItems = [];

  for (let i = 0; i < totalItems; i += 1) {
    liItems[i] = createLI(name, worksData[wkIndex].Technologies[i]);
  }

  return objectToHTML(liItems);
}

export function createButton(name, content, id) {
  const button = document.createElement('button');
  button.className = name;
  button.innerHTML = content;
  button.type = 'button';
  if (content === 'See Project') {
    button.id = `worksButton-${id}`;
  }
  return button;
}

const worksSection = document.getElementById('works');
const worksContainer = createDiv('works-container');

function createElements(wdIndex) {
  const card = createDiv('card', '');

  const image = createImage(worksData[wdIndex].Image, worksData[wdIndex].ProjectName, 'card-images');

  const cardBody = createDiv('card-body');

  const cardTitle = createDiv('card-title');
  const h2 = createH2(worksData[wdIndex].ProjectName);
  const cardSubtitle = createDiv('card-subtitle');
  cardSubtitle.innerHTML = worksData[wdIndex].ProjectSubtitle;

  const p = createP('card-body-text', worksData[wdIndex].ProjectDescription);
  const ul = createUL('card-list');
  const li = createLiItems(worksData[wdIndex].Technologies.length, wdIndex, 'card-tags');

  const button = createButton('button', 'See Project', worksData[wdIndex].id);

  card.appendChild(image);
  card.appendChild(cardBody);

  cardBody.appendChild(cardTitle);

  cardTitle.appendChild(h2);

  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(p);

  ul.innerHTML = li.replace(/,/g, '');

  cardBody.appendChild(ul);

  cardBody.appendChild(button);

  return card;
}

export function populateCards() {
  const cardList = [];

  for (let i = 0; i < worksData.length; i += 1) {
    cardList[i] = createElements(i);
  }

  return cardList;
}

worksContainer.innerHTML = objectToHTML(populateCards());

worksSection.appendChild(worksContainer);