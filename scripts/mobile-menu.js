/* eslint-disable no-undef */
const mobileModal = document.getElementById('mobile-menu-modal');
// eslint-disable-next-line no-unused-vars
function openMod() {
  // eslint-disable-next-line no-unused-vars
  const openModal = document.getElementById('openModal');
  navBar.style.display = 'none';
  mobileModal.style.display = 'block';
}
function closeModal() {
  navBar.style.removeProperty('display');
  mobileModal.style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function navigate(anchorId) {
  closeModal();
  // eslint-disable-next-line no-restricted-globals
  const url = location.href;
  // eslint-disable-next-line no-restricted-globals
  location.href = `#${anchorId}`;
  // eslint-disable-next-line no-restricted-globals
  history.replaceState(null, null, url);
}