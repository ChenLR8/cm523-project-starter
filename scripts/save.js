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
const viewbtn = document.querySelector('.viewplan');


/*const spotscontainer =document.querySelector('.spotscontainer');*/
const h2= document.querySelector('h2.recommendations');
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

h2.style.display='none';
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
submitbtn.addEventListener('click',getPlan);

function getRecommendations(plan){
    console.log('getRecommendations');
    /*spotscontainer.forEach(recommendation => {
        recommendation.style.display = 'none';
      });*/console.log(plan);
      console.log(plan.Time + " plan");
      console.log(halfHistory1.Time + " halfHistory");

    if (plan.Time == halfHistory1.Time){
        console.log('true');
        h2.style.display='block';
        FreedomTrail.style.display='block';
        JFK.style.display='block';
        
    }
    if (plan == halfArt1){
        h2.style.display='block';
        Isabella.style.display = 'block';
    }
}
//user type//
//halfday//
//classic_history_depth_personal_family_seafood//
const halfHistory1={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',

}
//freedom trail JFK//

//classic_history_depth_lively_family_seafood//
const halfHistory2={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',
}

//USS TEA//
//classic_history_depth_personal_adult_seafood//
const halfHistory3={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_depth_lively_adult_seafood//
const halfHistory4={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',

}

//classic_history_variety_personal_family_seafood//
const halfHistory5={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}
//classic_history_variety_personal_adult_seafood//

const halfHistory6={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_variety_lively_family_seafood//

const halfHistory7={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',
    
}
//classic_history_variety_lively_adult_seafood//
const halfHistory8={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_family_seafood//
const halfHistoryN1={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',

}
//niche_history_depth_lively_adult_seafood//
const halfHistoryN2={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_adult_seafood//

const halfHistoryN3={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_lively_family_seafood//
const halfHistoryN4={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_family_seafood//
const halfHistoryN5={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_adult_seafood//
const halfHistoryN6={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',
}
//niche_history_variety_lively_family_seafood//
const halfHistoryN7={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_lively_adult_seafood//
const halfHistoryN8={
    Time: 'halfday',
    Category: 'HistoricalLandmarks',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',
}
//Art//
const halfArt1={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}

//classic_Art_depth_lively_family_seafood//
const halfArt2={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}
//classic_Art_depth_personal_adult_seafood//
const halfArt3={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_depth_lively_adult_seafood//
const halfArt4={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',
 

}
//classic_Art_variety_personal_family_seafood//
const halfArt5={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}
//classic_Art_variety_personal_adult_seafood//

const halfArt6={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_variety_lively_family_seafood//

const halfArt7={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',
    
}
//classic_history_variety_lively_adult_seafood//
const halfArt8={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_family_seafood//
const halfArtN1={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',

}
//niche_history_depth_lively_adult_seafood//
const halfArtN2={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_adult_seafood//

const halfArtN3={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_lively_family_seafood//
const halfArtN4={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_family_seafood//
const halfArtN5={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_adult_seafood//
const halfArtN6={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',
}
//niche_history_variety_lively_family_seafood//
const halfArtN7={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_lively_adult_seafood//
const halfArtN8={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',
}
//Nature//
const halfNature1={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}

//classic_Art_depth_lively_family_seafood//
const halfNature2={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}
//classic_Art_depth_personal_adult_seafood//
const halfNature3={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_depth_lively_adult_seafood//
const halfNature4={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',
 

}
//classic_Art_variety_personal_family_seafood//
const halfNature5={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'Yes',


}
//classic_Art_variety_personal_adult_seafood//

const halfNature6={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'classic',
    FamilyPlace: 'No',


}
//classic_history_variety_lively_family_seafood//

const halfNature7={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'Yes',
    
}
//classic_history_variety_lively_adult_seafood//
const halfNature8={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'classic',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_family_seafood//
const halfNatureN1={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',

}
//niche_history_depth_lively_adult_seafood//
const halfNatureN2={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_personal_adult_seafood//

const halfNatureN3={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',

}
//niche_history_depth_lively_family_seafood//
const halfNatureN4={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'depth',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_family_seafood//
const halfNatureN5={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_personal_adult_seafood//
const halfNatureN6={
    Time: 'halfday',
    Category: 'Art',
    Explore: 'variety',
    Style: 'personal',
    Preferences: 'niche',
    FamilyPlace: 'No',
}
//niche_history_variety_lively_family_seafood//
const halfNatureN7={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'Yes',
}
//niche_history_variety_lively_adult_seafood//
const halfNatureN8={
    Time: 'halfday',
    Category: 'Nature',
    Explore: 'variety',
    Style: 'lively',
    Preferences: 'niche',
    FamilyPlace: 'No',
}


//classic_entertainment_depth_personal_family_seafood//
//classic_entertainment_depth_lively_family_seafood//
//classic_entertainment_depth_personal_adult_seafood//
//classic_entertainment_depth_lively_family_seafood//
//classic_entertainment_variety_personal_family_seafood//
//classic_entertainment_variety_personal_adult_seafood//
//classic_entertainment_variety_lively_family_seafood//
//classic_entertainment_variety_lively_adult_seafood//

//niche_entertainment_depth_personal_family_seafood//
//niche_entertainment_depth_lively_adult_seafood//
//niche_entertainment_depth_personal_adult_seafood//
//niche_entertainment_depth_lively_family_seafood//
//niche_entertainment_variety_personal_family_seafood//
//niche_entertainment_variety_personal_adult_seafood//
//niche_entertainment_variety_lively_family_seafood//
//niche_entertainment_variety_lively_adult_seafood//



//whole day//
//classic_history_depth_personal_family_seafood//

//classic_history_depth_lively_family_seafood//
//classic_history_depth_personal_adult_seafood//
//classic_history_depth_lively_family_seafood//
//classic_history_variety_personal_family_seafood//
//classic_history_variety_personal_adult_seafood//
//classic_history_variety_lively_family_seafood//
//classic_history_variety_lively_adult_seafood//

//niche_history_depth_personal_family_seafood//
//niche_history_depth_lively_adult_seafood//
//niche_history_depth_personal_adult_seafood//
//niche_history_depth_lively_family_seafood//
//niche_history_variety_personal_family_seafood//
//niche_history_variety_personal_adult_seafood//
//niche_history_variety_lively_family_seafood//
//niche_history_variety_lively_adult_seafood//

//classic_art_depth_personal_family_seafood//
//classic_art_depth_lively_family_seafood//
//classic_art_depth_personal_adult_seafood//
//classic_art_depth_lively_family_seafood//
//classic_art_variety_personal_family_seafood//
//classic_art_variety_personal_adult_seafood//
//classic_art_variety_lively_family_seafood//
//classic_art_variety_lively_adult_seafood//


//niche_art_depth_personal_family_seafood//
//niche_art_depth_lively_adult_seafood//
//niche_art_depth_personal_adult_seafood//
//niche_art_depth_lively_family_seafood//
//niche_art_variety_personal_family_seafood//
//niche_art_variety_personal_adult_seafood//
//niche_art_variety_lively_family_seafood//
//niche_art_variety_lively_adult_seafood//


//classic_nature_depth_personal_family_seafood//
//classic_nature_depth_lively_family_seafood//
//classic_nature_depth_personal_adult_seafood//
//classic_nature_depth_lively_family_seafood//
//classic_nature_variety_personal_family_seafood//
//classic_nature_variety_personal_adult_seafood//
//classic_nature_variety_lively_family_seafood//
//classic_nature_variety_lively_adult_seafood//


//niche_nature_depth_personal_family_seafood//
//niche_nature_depth_lively_adult_seafood//
//niche_nature_depth_personal_adult_seafood//
//niche_nature_depth_lively_family_seafood//
//niche_nature_variety_personal_family_seafood//
//niche_nature_variety_personal_adult_seafood//
//niche_nature_variety_lively_family_seafood//
//niche_nature_variety_lively_adult_seafood//

//classic_entertainment_depth_personal_family_seafood//
//classic_entertainment_depth_lively_family_seafood//
//classic_entertainment_depth_personal_adult_seafood//
//classic_entertainment_depth_lively_family_seafood//
//classic_entertainment_variety_personal_family_seafood//
//classic_entertainment_variety_personal_adult_seafood//
//classic_entertainment_variety_lively_family_seafood//
//classic_entertainment_variety_lively_adult_seafood//

//niche_entertainment_depth_personal_family_seafood//
//niche_entertainment_depth_lively_adult_seafood//
//niche_entertainment_depth_personal_adult_seafood//
//niche_entertainment_depth_lively_family_seafood//
//niche_entertainment_variety_personal_family_seafood//
//niche_entertainment_variety_personal_adult_seafood//
//niche_entertainment_variety_lively_family_seafood//
//niche_entertainment_variety_lively_adult_seafood//


