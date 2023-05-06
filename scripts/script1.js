const stopbtn = document.querySelector('.stop');
const bg =document.querySelector('.bgcontainer');

stopbtn.addEventListener('click', stopMotion);

function stopMotion() {
    bg.style.animation = 'none';
  };


