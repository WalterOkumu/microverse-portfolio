const navBar = document.getElementsByClassName('nav')[0];
const openModal = document.getElementsByClassName('openModal')[0];
const mobileModal = document.getElementsByClassName('mobile-menu-modal')[0];
const closeModal = document.getElementsByClassName('closeModal')[0];

const navigatePortfolio = document.getElementsByClassName('navigatePortfolio')[0];
const navigateAbout = document.getElementsByClassName('navigateAbout')[0];
const navigateContact = document.getElementsByClassName('navigateContact')[0];

openModal.onclick = function () {
  navBar.style.display = 'none';
  mobileModal.style.display = 'block';
};

closeModal.onclick = function () {
  navBar.style.removeProperty('display');
  mobileModal.style.display = 'none';
};

navigatePortfolio.onclick = function () {
  navBar.style.removeProperty('display');
  mobileModal.style.display = 'none';
  window.location.href = '#works';
};

navigateAbout.onclick = function () {
  navBar.style.removeProperty('display');
  mobileModal.style.display = 'none';
  window.location.href = '#about';
};

navigateContact.onclick = function () {
  navBar.style.removeProperty('display');
  mobileModal.style.display = 'none';
  window.location.href = '#contact';
};