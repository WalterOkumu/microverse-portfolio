const form = document.getElementById('contact-form');
const text = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  const emailValue = form.elements.email.value;
  if ((emailValue.toLowerCase() !== emailValue)) {
    event.preventDefault();
    text.classList.add('error-message');
    text.innerHTML = 'Please make sure to enter your email address in lowercase';
  } else {
    text.innerHTML = '';
    text.removeAttribute('class', 'error-message');
    form.submit();
  }
});