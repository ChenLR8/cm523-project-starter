const stopbtn = document.getElementById('switch');
const bg = document.querySelector('.bgcontainer');



stopbtn.addEventListener('change', animationControl)

function animationControl() {
  if (stopbtn.checked) {
    bg.style.animationPlayState = 'paused';
  } else {
    bg.style.animationPlayState = 'running';
  }
};