import {
  createButton, createDiv, createImage, createLiItems, createP, createUL, worksData,
} from './renderWorks.js';

const body = document.getElementsByTagName('body')[0];

const project0Button = document.getElementById('worksButton-0');
const project1Button = document.getElementById('worksButton-1');
const project2Button = document.getElementById('worksButton-2');
const project3Button = document.getElementById('worksButton-3');

function checkOutsideClick(projectModal) {
  // eslint-disable-next-line func-names
  window.onclick = function (event) {
    if (event.target === projectModal) {
      projectModal.style.display = 'none';
      body.style.overflow = 'auto';
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
      body.style.overflow = 'auto';
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

  const imageContainer = createDiv('image-container');

  const image = createImage(worksData[wkDataIndex].Image, worksData[wkDataIndex].ProjectName);

  image.className = 'modal-image';

  imageContainer.appendChild(image);

  modalContent.appendChild(imageContainer);

  const modalFooter = createDiv('modal-footer');

  const modalFooterLeft = createP('modal-footer-left');

  modalFooterLeft.innerHTML = worksData[wkDataIndex].ProjectDescription;

  const modalFooterRight = createDiv('modal-footer-right');

  const modalFooterRightList = createUL('modal-footer-right-list');

  const modalFooterRightListItem = createLiItems(worksData[wkDataIndex].Technologies.length, wkDataIndex, 'modal-footer-right-list-item');

  const hr = document.createElement('hr');

  const buttonContainer = createDiv('modal-button-container');

  const modalFooterRightButton1 = createButton('modal-button');

  modalFooterRightButton1.innerHTML = 'See Live <i class="bi bi-arrow-up-right-circle"></i>';

  const modalFooterRightButton2 = createButton('modal-button');

  modalFooterRightButton2.innerHTML = 'See Source <i class="fa-brands fa-github github-icon"></i>';

  modalFooterRightList.innerHTML = modalFooterRightListItem.replace(/,/g, '');

  modalFooterRight.appendChild(modalFooterRightList);

  modalFooterRight.appendChild(hr);

  buttonContainer.appendChild(modalFooterRightButton1);
  buttonContainer.appendChild(modalFooterRightButton2);

  modalFooterRight.appendChild(buttonContainer);

  modalFooter.appendChild(modalFooterLeft);
  modalFooter.appendChild(modalFooterRight);

  modalContent.appendChild(modalFooter);

  projectModal.appendChild(modalContent);

  return projectModal;
}

// eslint-disable-next-line func-names
project0Button.onclick = function () {
  const wkDataIndex = 0;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'flex';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);

  body.style.overflow = 'hidden';
};

// eslint-disable-next-line func-names
project1Button.onclick = function () {
  const wkDataIndex = 1;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'flex';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);

  body.style.overflow = 'hidden';
};

// eslint-disable-next-line func-names
project2Button.onclick = function () {
  const wkDataIndex = 2;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'flex';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);

  body.style.overflow = 'hidden';
};

// eslint-disable-next-line func-names
project3Button.onclick = function () {
  const wkDataIndex = 3;

  const projectModal = createModal(wkDataIndex);

  projectModal.style.display = 'flex';

  checkOutsideClick(projectModal);

  body.appendChild(projectModal);

  body.style.overflow = 'hidden';
};