import {
  createButton, createDiv, createImage, createLI, createP, createUL, worksData, createLiItems,
} from './renderWorks.js';

// function updateContent() {
//   const modalHeaderTitle = document.getElementById('modal-header-title');

//   const modalCloseButton = document.getElementById('modal-close-button');

// }

// function closeModal() {
//   // eslint-disable-next-line func-names
//   sd
// }

function checkOutsideClick(projectModal) {
  // eslint-disable-next-line func-names
  window.onclick = function (event) {
    if (event.target === projectModal) {
      projectModal.style.display = 'none';
    }
  };
}

function createModal(wkDataIndex) {
  const projectModal = createDiv('project-modal');

  const modalContent = createDiv('modal-content');

  const modalHeader = createDiv('modal-header');

  const modalHeaderTitle = createDiv('modal-header-title');

  modalHeaderTitle.innerHTML = worksData[wkDataIndex].ProjectName;

  const modalCloseButton = createDiv('modal-close-button');

  modalCloseButton.id = 'modal-close-button';
  modalCloseButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  modalCloseButton.addEventListener('click', (event) => {
    if (event.srcElement.className === 'fa-solid fa-xmark') {
      projectModal.style.display = 'none';
    }
  });

  modalHeader.appendChild(modalHeaderTitle);
  modalHeader.appendChild(modalCloseButton);

  modalContent.appendChild(modalHeader);

  const modalSubtitle = createDiv('modal-subtitle');

  const modalSubtitlePart1 = createDiv('modal-subtitle-part-1');

  modalSubtitlePart1.innerHTML = worksData[wkDataIndex].ProjectSubtitle1;

  const modalSubtitlePart2 = createDiv('modal-subtitle-part-2');

  modalSubtitlePart2.innerHTML = worksData[wkDataIndex].ProjectSubtitle2;

  modalSubtitle.appendChild(modalSubtitlePart1);
  modalSubtitle.appendChild(modalSubtitlePart2);

  modalContent.appendChild(modalSubtitle);

  const image = createImage(worksData[wkDataIndex].Image, worksData[wkDataIndex].ProjectName);

  image.className = 'modal-image';

  modalContent.appendChild(image);

  const modalFooter = createDiv('modal-footer');

  const modalFooterLeft = createP('modal-footer-left');

  modalFooterLeft.innerHTML = worksData[wkDataIndex].ProjectDescription;

  const modalFooterRight = createDiv('modal-footer-right');

  const modalFooterRightList = createUL('modal-footer-right-list');

  const modalFooterRightListItem = createLI('modal-footer-right-list-item');

  const listItems = createLiItems(worksData[wkDataIndex].Technologies.length, wkDataIndex, 'modal-footer-right-list-item');

  modalFooterRightListItem.innerHTML = listItems.replace(/,/g, ' ');

  const hr = document.createElement('hr');

  const modalFooterRightButton1 = createButton('modal-footer-right-buttons');

  modalFooterRightButton1.innerHTML = 'See Live <i class="bi bi-arrow-up-right-circle"></i>';

  const modalFooterRightButton2 = createButton('modal-footer-right-buttons');

  modalFooterRightButton2.innerHTML = 'See Source <i class="fa-brands fa-github github-icon"></i>';

  modalFooterRightList.appendChild(modalFooterRightListItem);

  modalFooterRight.appendChild(modalFooterRightList);

  modalFooterRight.appendChild(hr);

  modalFooterRight.appendChild(modalFooterRightButton1);
  modalFooterRight.appendChild(modalFooterRightButton2);

  modalFooter.appendChild(modalFooterLeft);
  modalFooter.appendChild(modalFooterRight);

  modalContent.appendChild(modalFooter);

  projectModal.appendChild(modalContent);

  return projectModal;
}

const body = document.getElementsByTagName('body')[0];

const project0Button = document.getElementById('worksButton-0');
const project1Button = document.getElementById('worksButton-1');
const project2Button = document.getElementById('worksButton-2');
const project3Button = document.getElementById('worksButton-3');

// eslint-disable-next-line func-names
project0Button.onclick = function () {
  const wkDataIndex = 0;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'block';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);
};

// eslint-disable-next-line func-names
project1Button.onclick = function () {
  const wkDataIndex = 1;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'block';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);
};

// eslint-disable-next-line func-names
project2Button.onclick = function () {
  const wkDataIndex = 2;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'block';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);
};

// eslint-disable-next-line func-names
project3Button.onclick = function () {
  const wkDataIndex = 3;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'block';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);
};