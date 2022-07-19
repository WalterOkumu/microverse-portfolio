const navBar = document.getElementById('navBar');
navBar.style.backgroundColor = 'white';
// trigger this function every time the user scrolls
// eslint-disable-next-line func-names
window.onscroll = function () {
  const scroll = window.pageYOffset;
  if (scroll >= 100) {
    navBar.style.backgroundColor = 'transparent';
  } else {
    navBar.style.backgroundColor = 'white';
  }
};