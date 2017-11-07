'use strict';

//creates array of images//
const bag = new Pic ('bag', 'imgs/bag.jpg');
const banana = new Pic ('banana', 'imgs/banana.jpg');
const bathroom = new Pic ('bathroom','imgs/bathroom.jpg');
const boots = new Pic ('boots', 'imgs/boots.jpg');
const breakfast = new Pic ('breakfast', 'imgs/breakfast.jpg');
const bubblegum = new Pic ('bubblegum', 'imgs/bubblegum.jpg');
const chair = new Pic ('chair', 'imgs/chair.jpg');
const cthulhu = new Pic ('cthulhu', 'imgs/cthulhu.jpg');
const dogduck = new Pic ('dog-duck', 'imgs/dog-duck.jpg');
const dragon = new Pic ('dragon', 'imgs/dragon.jpg');
const pen = new Pic ('pen', 'imgs/pen.jpg');
const petsweep = new Pic ('pet-sweep', 'imgs/pet-sweep.jpg');
const scissors = new Pic ('scissors', 'imgs/scissors.jpg');
const shark = new Pic ('shark', 'imgs/shark.jpg');
const sweep = new Pic ('sweep', 'imgs/sweep.jpg');
const tauntaun = new Pic ('tauntaun', 'imgs/tauntaun.jpg');
const unicorn = new Pic ('unicorn', 'imgs/unicorn.jpg');
const usbgif = new Pic ('usb', 'imgs/usb.gif');
const watercan = new Pic ('water-can', 'imgs/water-can.jpg');
const wineglass = new Pic ('wine-glass','imgs/wine-glass.jpg');

const picArray = [bag, banana, bathroom, boots, breakfast, bubblegum ,chair, cthulhu, dog-duck, dragon, pen, pet-sweep, scissors, shark, sweep, tauntaun, unicorn, usb, water-can, wine-glass];
console.log (picArray);

//let myArray = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']


//constructor function for random photo picker//
function Pic (type,src){
    this.type = type ;
    this.src = src;
    this.picked = 0;
}

//picGame.prototype.wasPicked = function {
 //   this.picked +=1;
////};

Pic.prototype.render = function(){
    const ele = document.createElement('img');
    ele.src = this.src;
    //to do - check if it's adding a class)
    return ele;
}

//let clicks = 0;
//let Pic;


//const imgs = document.querySelectorAll('img');
//console.log ('imgs');
//image-assets = [];

//function clickHandler (e){
 //   const clickedImage = e.target;
 //   console.log ('alrighty then');
//}

function appendrandomPic();

for (let i = 0; i < 3 ; i++){
const Game = document.getElementById('Game');
randomPic = picArray[ Math.floor(Math.random()* 20)];
const randomPicEle = randomPic.render();
Game.appendChild(randomPicEle);
}


//const main = document.querySelector('main');

//game.addEventListener ('click', clickHandler);
//main.addEventListener('click', clickHandler);


 //imgs[i].addEventListener('click', clickHandler);
//}


