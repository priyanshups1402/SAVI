```javascript
// STEP CHANGE FUNCTION

function nextStep(step){

document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active");
});

document.getElementById("step"+step).classList.add("active");

}



// PHOTO SLIDESHOW

let slideIndex = 0;

const slides = document.querySelectorAll(".photo");

function showSlides(){

slides.forEach(photo=>{
photo.classList.remove("active");
});

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].classList.add("active");

setTimeout(showSlides,3000);

}

showSlides();



// TYPEWRITER MESSAGE

const message = `

Suno bby humko aapse kuch kahena tha but hum kabhi kahe nhi paye....
ya kabhi himaat ki but phir hum log ladai main and baaton main kahena bhul gye
so aaj main apse kahena chahta hu sabse phly to aapko Happy Birthday
to my angle 🤍🧿

and now moje kahena yeah hn ki kabhi tension na le humesha smile krti rahe
and kabhi yeah na soche ki main choodh kr jaounga....

balhi main tumper gussa krlo daat lo kuch bhi kahe lo but iska mean yeah
nhi ki main aapse pyaar nhi krta hu cheat krta hu....

betu insaaan sabse jadha ladai or fikar oski hi krta hn jisko bo sabse
jadha apni life main chahta hn jaisa ki hum aapko....

and kabhi sad mt hona aap bcz aapki smile hi meri power hn
aapko smile krta dekhta hona wahi meri motivation hn

aapko smile krta dekhne ka liya hum sab kr sakte hn

and mera liya success ka mean yeah nhi hn ki successfull huker aapse
shadi Krna nhi....

mera liya successfull hone ka mean hn aapko apne sath success hota
dekhna kabhi aap apni raha sa bhatko to aapko sahi Raha per lana

or at end aapke sath success hoker ek happy heaven life jeena

and main humesha sa sochta tha sabke partner sabko itna support krte hn
yeah bo kya yahi real love hota hn

but shyd yeah real love nhi hota....

real love main aapko krte dekha hain apne parents family ka against
jaaker mera liya stand lena

and bahut kuch aapne aisa kiya hn mera liya jiska main jindagi bhar
karjdaar rahunga

so thanku so much my dear love
meri wiffey meri life main aane ka liya

and again Many Many Happy Returns of the Day
to my love ones.... ❤️🧿

— From Shubh ❤️

`;

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typewriter").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

typeWriter();



// MUSIC CONTROL

const music = document.getElementById("music");

document.body.addEventListener("click", function(){

music.play();

}, { once:true });
```
