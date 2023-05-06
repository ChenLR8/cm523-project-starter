const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});