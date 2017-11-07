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
const dogDuck = new Pic ('dogDuck', 'imgs/dog-duck.jpg');
const dragon = new Pic ('dragon', 'imgs/dragon.jpg');
const pen = new Pic ('pen', 'imgs/pen.jpg');
const petSweep = new Pic ('petSweep', 'imgs/pet-sweep.jpg');
const scissors = new Pic ('scissors', 'imgs/scissors.jpg');
const shark = new Pic ('shark', 'imgs/shark.jpg');
const sweep = new Pic ('sweep', 'imgs/sweep.jpg');
const tauntaun = new Pic ('tauntaun', 'imgs/tauntaun.jpg');
const unicorn = new Pic ('unicorn', 'imgs/unicorn.jpg');
const usb = new Pic ('usb', 'imgs/usb.gif');
const waterCan = new Pic ('waterCan', 'imgs/water-can.jpg');
const wineGlass = new Pic ('wineGlass','imgs/wine-glass.jpg');

const picArray = [bag, banana, bathroom, boots, breakfast, bubblegum ,chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function Pic (type,src){
        this.type = type;
        this.src = src;
        this.picked = 0;
    }

console.log (picArray);

//function appendRandomPic();
    //picGame.prototype.wasPicked = function {
    //   this.picked +=1;
    ////};
   // render() {
//    const ele = document.createElement('img');
 //       ele.src = this.src;
        //to do - check if it's adding a class)
  //      return ele;
  //  }
//}
//console.log(src);


//let clicks = 0;
//let Pic;


//const imgs = document.querySelectorAll('img');
//console.log ('imgs');
//image-assets = [];

//function clickHandler (e){
 //   const clickedImage = e.target;
 //   console.log ('alrighty then');
//}
//for (let i = 0; i < 3 ; i++){
//const Game = document.getElementById('Game');
//randomPic = picArray[ Math.floor(Math.random()* 20)];
//const randomPicEle = randomPic.render();
//Game.appendChild(randomPicEle);
//}


//const main = document.querySelector('main');

//game.addEventListener ('click', clickHandler);
//main.addEventListener('click', clickHandler);


 //imgs[i].addEventListener('click', clickHandler);
//}


