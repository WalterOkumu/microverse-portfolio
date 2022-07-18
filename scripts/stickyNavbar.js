const navBar = document.getElementsByClassName('nav')[0];
navBar.style.backgroundColor = 'white';

// trigger this function every time the user scrolls
window.onscroll = function () {
  const scroll = window.pageYOffset;
  if (scroll >= 100) {
    navBar.style.backgroundColor = 'transparent';
  } else {
    navBar.style.backgroundColor = 'white';
  }
};