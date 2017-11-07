'use strict';

//creates array of images//
const bag = new Pic ('bag', images/bag.jpg);
const banana = new Pic ('banana', images/banana.jpg);
const bathroom = new Pic ('bathroom', images/bathroom.jpg);
const boots = new Pic ('boots', images/boots.jpg);
const breakfast = new Pic ('breakfast', images/breakfast.jpg);
const bubblegum = new Pic ('bubblegum', images/bubblegum.jpg);
const chair = new Pic ('chair', images/chair.jpg);
const cthulhu = new Pic ('cthulhu', images/chair.jpg);
const dog-duck = new Pic ('dog-duck', images/dog-duck.jpg);
const dragon = new Pic ('dragon', images/dragon.jpg);
const pen = new Pic ('pen', images/pen.jpg);
const pet-sweep = new Pic ('pet-sweep', images/pet-sweep.jpg);
const scissors = new Pic ('scissors', images/scissors.jpg);
const shark = new Pic ('shark', images/shark.jpg);
const sweep = new Pic ('sweep', images/sweep.jpg);
const tauntaun = new Pic ('tauntaun', images/tauntaun.jpg);
const unicorn = new Pic ('unicorn', images/unicorn.jpg);
const usb.gif = new Pic ('usb', images/usb.gif);
const water-can = new Pic ('water-can', images/water-can.jpg);
const wine-glass = new Pic ('wine-glass',images/wine-glass.jpg);

const picArray = ['images/bag.jpg', 'images/banana.jpg','images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.jpg', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];
//let myArray = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']


//constructor function for random photo picker//
function Pic (type,src){
    this.type = type ;
    this.src = './images/' + src;
    this.picked = 0;
}

//picGame.prototype.wasPicked = function {
    this.picked +=1;
////};

Pic.prototype.render = function(){
    const ele = document.createElement('img');
    ele.src = this.src;
    //to do - check if it's adding a class)
    return ele;
}

//let clicks = 0;
//let picGame;


//const imgs = document.querySelectorAll('img');
//console.log ('imgs');
//image-assets = [];

//function clickHandler (e){
 //   const clickedImage = e.target;
 //   console.log ('alrighty then');
//}

function appendrandomPic();

for (let i = 0; i < 3 ; i++){
const game = document.getElementById('game');
randomPic = picArray[ Math.floor(Math.random()* 20)];
const randomPicEle = randomPic.render();
game.appendChild(randomPicEle);
}


//const main = document.querySelector('main');

//game.addEventListener ('click', clickHandler);
//main.addEventListener('click', clickHandler);

//console.log ('what the hell?');
const Pic = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass']; 



 //imgs[i].addEventListener('click', clickHandler);
}


