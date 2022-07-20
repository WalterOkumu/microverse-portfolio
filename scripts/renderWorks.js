const bullet = '•';
const apostrophe = '\u0027';
const worksData = [
  {
    id: 0,
    ProjectName: 'Tonic',
    ProjectSubtitle: `CANOPY ${bullet} Back End Dev ${bullet} 2015`,
    Image: './assets/Portfolio_1.png',
    ProjectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Technologies: [
      'html',
      'css',
      'javascript',
    ],
    ProjectLink: 'https://walterokumu.github.io/walter-okumu-portfolio/',
    GitHubLink: 'https://github.com/WalterOkumu/walter-okumu-portfolio',
  },
  {
    id: 1,
    ProjectName: 'Multi-Post Stories',
    ProjectSubtitle: `FACEBOOK ${bullet} Full Stack Dev ${bullet} 2015`,
    Image: './assets/Portfolio_2.png',
    ProjectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    Technologies: [
      'html',
      'ruby on rails',
      'css',
      'javascript',
    ],
    ProjectLink: 'https://walterokumu.github.io/walter-okumu-portfolio/',
    GitHubLink: 'https://github.com/WalterOkumu/walter-okumu-portfolio',
  },
  {
    id: 2,
    ProjectName: 'Facebook 360',
    ProjectSubtitle: `FACEBOOK ${bullet} Full Stack Dev ${bullet} 2015`,
    Image: './assets/Portfolio_3.png',
    ProjectDescription: `Exploring the future of media in Facebook${apostrophe}s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.`,
    Technologies: [
      'html',
      'ruby on rails',
      'css',
      'javascript',
    ],
    ProjectLink: 'https://walterokumu.github.io/walter-okumu-portfolio/',
    GitHubLink: 'https://github.com/WalterOkumu/walter-okumu-portfolio',
  },
  {
    id: 3,
    ProjectName: 'Uber Navigation',
    ProjectSubtitle: `Uber ${bullet} Lead Developer ${bullet} 2018`,
    Image: './assets/Portfolio_4.png',
    ProjectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Technologies: [
      'html',
      'ruby on rails',
      'css',
      'javascript',
    ],
    ProjectLink: 'https://walterokumu.github.io/walter-okumu-portfolio/',
    GitHubLink: 'https://github.com/WalterOkumu/walter-okumu-portfolio',
  },
];

export function objectToHTML(jsObject) {
  return jsObject.map((object) => object.outerHTML).toString();
}

export function createDiv(name) {
  const div = document.createElement('div');
  div.className = name;
  return div;
}

export function createImage(imagePath, altText) {
  const image = document.createElement('img');
  image.src = imagePath;
  image.alt = altText;
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
  p.innerHTML = content;
  return p;
}

export function createUL(name) {
  const ul = document.createElement('ul');
  ul.className = name;
  return ul;
}

export function createLI(name, content) {
  const li = document.createElement('li');
  li.className = name;
  li.innerHTML = content;
  return li;
}

export function createLiItems(totalItems, wkIndex) {
  const liItems = [];

  for (let i = 0; i < totalItems; i += 1) {
    liItems[i] = createLI('card-tags', worksData[wkIndex].Technologies[i]);
  }

  return objectToHTML(liItems);
}

export function createButton(name, content) {
  const button = document.createElement('button');
  button.className = name;
  button.innerHTML = content;
  button.type = 'button';
  button.id = 'worksButton';
  return button;
}

const worksSection = document.getElementById('works');
const worksContainer = createDiv('works-container');

const cardList = [];

function createElements(wdIndex) {
  const card = createDiv('card', '');

  const image = createImage(worksData[wdIndex].Image, worksData[wdIndex].ProjectName);

  const cardBody = createDiv('card-body');

  const cardTitle = createDiv('card-title');
  const h2 = createH2(worksData[wdIndex].ProjectName);
  const cardSubtitle = createDiv('card-subtitle');
  cardSubtitle.innerHTML = worksData[wdIndex].ProjectSubtitle;

  const p = createP('card-body-text', worksData[wdIndex].ProjectDescription);
  const ul = createUL('card-list');
  const li = createLiItems(worksData[wdIndex].Technologies.length, wdIndex);

  const button = createButton('button', 'See Project');

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

for (let i = 0; i < worksData.length; i += 1) {
  cardList[i] = createElements(i);
}

const cardHTML = objectToHTML(cardList);

worksContainer.innerHTML = cardHTML;

worksSection.appendChild(worksContainer);