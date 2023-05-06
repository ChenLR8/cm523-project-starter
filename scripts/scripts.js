/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const nextbtn = Array.from(document.querySelectorAll('.next'));
const backbtn = Array.from(document.querySelectorAll('.back'));
const submitbtn = document.querySelector('.submit');
const Questions =Array.from(document.querySelectorAll('fieldset'));
const Time = Array.from(document.getElementsByName('start'));
const Category = Array.from(document.getElementsByName('category'));
const Explore = Array.from(document.getElementsByName('explore'));
const Style = Array.from(document.getElementsByName('style'));
const Preferences = Array.from(document.getElementsByName('preferences'));
const Family = Array.from(document.getElementsByName('family'));
const nav =document.querySelector('nav');
const refreshbtn = document.querySelector('.refresh');

refreshbtn.addEventListener('click', refresh)

function refresh() {
  location.reload();
};


	


/*
function FilterChange() {
  const selectedCategory = filter.value;

  content.forEach(item => {
    if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}*/



//NAV BAR//
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});



/*const spotscontainer =document.querySelector('.spotscontainer');*/
const headline= document.querySelector('h2.recommtitle');
const FreedomTrail = document.querySelector('#FreedomTrail')
const JFK= document.querySelector('#JFK');
const USS=document.querySelector('#USS');
const Isabella = document.querySelector('#Isabella');
const MFA = document.querySelector('#MFA');
const HarvardArt = document.querySelector('#HarvardArt');
const BosCommon =document.querySelector('#BosCommon');
const PublicGarden = document.querySelector('#PublicGarden');
const Fenway = document.querySelector('#Fenway');
const TD =document.querySelector('#TD');
const NewEngland = document.querySelector('#NewEngland');
const Children =document.querySelector('#Children');
const TeaParty = document.querySelector('#TeaParty');
const Arnold = document.querySelector('#Arnold');
const Library = document.querySelector('#Library');
const Bookshop = document.querySelector('#Bookshop');
const SoWa = document.querySelector('#SoWa');
const Greenway =document.querySelector('#Greenway');

headline.style.display='none';
FreedomTrail.style.display='none';
JFK.style.display='none';
USS.style.display='none';
Isabella.style.display='none';
MFA.style.display='none';
HarvardArt.style.display='none';
BosCommon.style.display='none';
PublicGarden.style.display='none';
Fenway.style.display='none';
TD.style.display='none';
NewEngland.style.display='none';
Children.style.display='none';
TeaParty.style.display='none';
Arnold.style.display='none';
Bookshop.style.display='none';
SoWa.style.display='none';
Greenway.style.display='none';
Library.style.display='none';


const plan={
    Time: null,
    Category: null,
    Explore: null,
    Style: null,
    Preferences: null,
    FamilyPlace: null,

}

//Hide question
//
Questions.forEach((question, index) => {
    if (index > 0){
        question.style.display='none';
    }
});



//next and back btn//
startindex = 0;
function NextQuestion(){  
    Questions[startindex].style.display='none';
    startindex++;
    Questions[startindex].style.display = 'block';
}

function PreviousQuestion(){
    Questions[startindex].style.display='none';
    startindex--;
    Questions[startindex].style.display = 'block';
    }

nextbtn.forEach(nextbtn=>{
    nextbtn.addEventListener('click',NextQuestion);
    })
    
backbtn.forEach(backbtn=>{
    backbtn.addEventListener('click', PreviousQuestion);
    })

//print recommendation//

function getPlan(){
    Time.forEach(item=>{
        if(item.checked){
            plan.Time = item.value;
        };});
    Category.forEach(item=>{
        if(item.checked){
            plan.Category = item.value;
        };});
    Explore.forEach(item=>{
        if(item.checked){
            plan.Explore = item.value;
        };});
    Style.forEach(item=>{
        if(item.checked){
            plan.Style = item.value;
        };});
    Preferences.forEach(item=>{
        if(item.checked){
            plan.Preferences = item.value;
        };});
    Family.forEach(item=>{
        if(item.checked){
            plan.FamilyPlace = item.value;
        };});
    console.log(plan);
    getRecommendations(plan);
}

//let it scroll to the recommendation when submitted//
const offset = nav.offsetHeight;

submitbtn.addEventListener('click', function() {
    getPlan();
    scrollToRecommendations();
  });
  
  function scrollToRecommendations() {
    const position = headline.offsetTop - offset;
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
  }
  

function getRecommendations(plan){
    console.log('getRecommendations');
    /*spotscontainer.forEach(recommendation => {
        recommendation.style.display = 'none';
      });console.log(plan);
      console.log(plan.Time + " plan");
      console.log(halfHistory1.Time + " halfHistory");*/

      if (plan.Category === category.history && plan.Preferences=== preferences.classic && plan.FamilyPlace === family.adult) {
        headline.style.display = 'block';
        FreedomTrail.style.display = 'block';
        USS.style.display = 'block';
      }

      if (plan.Category === category.history && plan.Preferences=== preferences.niche && plan.FamilyPlace === family.adult) {
        headline.style.display = 'block';
        JFK.style.display = 'block';
        Library.style.display = 'block';
      }

      if (plan.Category === category.history && plan.FamilyPlace === family.family) {
        headline.style.display = 'block';
        TeaParty.style.display = 'block';
        USS.style.display = 'block';
      }
      
      if (plan.Category === category.art && plan.Preferences === preferences.classic&& plan.FamilyPlace === family.adult) {
        headline.style.display = 'block';
        Isabella.style.display = 'block';
        MFA.style.display = 'block';
      }

      if (plan.Category === category.art && plan.FamilyPlace === family.family) {
        headline.style.display = 'block';
        Children.style.display = 'block';
        NewEngland.style.display = 'block';
      }

      if (plan.Category === category.art && plan.Preferences === preferences.niche&&plan.FamilyPlace === family.adult) {
        headline.style.display = 'block';
        Isabella.style.display = 'block';
        Bookshop.style.display = 'block';
      }
      if (plan.Time === fullday.Time && plan.Category === category.art && plan.Preferences === preferences.classic) {
        headline.style.display = 'block';
        HarvardArt.style.display = 'block';
        MFA.style.display = 'block';
      }
      if (plan.Time === fullday.Time &&plan.Category === category.art && plan.Preferences === preferences.niche&&plan.FamilyPlace === family.adult) {
        headline.style.display = 'block';
        SoWa.style.display = 'block';
        Bookshop.style.display = 'block';
      }
      if (plan.Category === category.nature && plan.Style === style.personal) {
        headline.style.display = 'block';
        Arnold.style.display = 'block';
        PublicGarden.style.display = 'block';
      }
      if (plan.Category === category.nature && plan.Style === style.lively) {
        headline.style.display = 'block';
        Greenway.style.display = 'block';
        BosCommon.style.display = 'block';
      }

      if (plan.Time === fullday.Time && plan.Category === category.nature && plan.Style === style.lively) {
        headline.style.display = 'block';
        Greenway.style.display = 'block';
        BosCommon.style.display = 'block';
        PublicGarden.style.display = 'block';
      }
     
      if (plan.Category === category.entertainment) {
        headline.style.display = 'block';
        Fenway.style.display = 'block';
        TD.style.display = 'block';
      }
      
}
//user type//
//halfday//
//classic_history_depth_personal_family_seafood//

const fullday={
    Time:'fullday',
}

const halfday={
    Time:'halfday',
}

const category = {
    history:'HistoricalLandmarks',
    art: 'Art',
    nature:'Nature',
    entertainment:'Entertainment',

}


const explore={
    depth:'depth',
    variety:'variety',
}

const style={
    personal:'personal',
    lively:'lively',
}

const family ={
    family:'family',
    adult:'adult',
}

const preferences={
    classic:'classic',
    niche:'niche',
}



