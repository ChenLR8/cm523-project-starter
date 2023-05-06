
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');
const nav =document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});



const filter= document.getElementById('filter');
const travelGuide = document.querySelectorAll('.travelguide');
const Entertainment = document.querySelectorAll('.event');
const Food=document.querySelectorAll('.food');

function filterSelector() {
  const selectedCategory = filter.value;
  
  if (selectedCategory === 'travelguide') {

    travelGuide.forEach(item => item.style.display = 'block');
    Entertainment.forEach(item => item.style.display = 'none');
    Food.forEach(item => item.style.display = 'none');

  } else if (selectedCategory === 'food') {
    travelGuide.forEach(item => item.style.display = 'none');
    Entertainment.forEach(item => item.style.display = 'none');
    Food.forEach(item => item.style.display = 'block');

  } else if (selectedCategory === 'event') {
    travelGuide.forEach(item => item.style.display = 'none');
    Entertainment.forEach(item => item.style.display = 'block');
    Food.forEach(item => item.style.display = 'none');
  }
  else if (selectedCategory === 'all') {
    travelGuide.forEach(item => item.style.display = 'block');
    Entertainment.forEach(item => item.style.display = 'block');
    Food.forEach(item => item.style.display = 'block');
  }
  ;}

  filter.addEventListener('change', filterSelector);
  

  /*
const content = document.querySelectorAll('ul.cards li');


function FilterChange() {
  const selectedCategory = filter.value;

  content.forEach(item => {
    if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


filter.addEventListener('change', FilterChange);

*/