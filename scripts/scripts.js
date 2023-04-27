/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const nextbtn = document.querySelectorAll('.start');
const backbtn = document.querySelectorAll('.back');
const question =Array.from(document.querySelectorAll('fieldset'));

let beginning = 0;

question.forEach((question, index) => {
    if (index > 0){
        question.style.display='none';
    }
});

