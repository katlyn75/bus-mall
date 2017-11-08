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
const sweep = new Pic ('sweep', 'imgs/sweep.png');
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

Pic.prototype.render = function (){
    //create an image element
    const ele = document.createElement ('img');
    //give that element the current products image source
    ele.src = this.src;
    //return that elelment
    return ele;
}

Pic.prototype.wasPicked = function (){
      this.picked += 1;
}

for (let i = 0; i < 3; i ++ ){
    appendRandomPic();
}

const Game = document.getElementById('Game');
//const main = document.querySelector ('main'); 

//create an event (click) handler
function clickHandler (e){
    const clickedPic = e.target;
    if (clickedPic.id === 'Game')
    return;

    console.log ('clickedPic'); 


    for (let i = 0; i < picArray.length; i ++){
        const PicClass = clickedPic.classList.value;
        if (picArray[i].type === PicClass){
            picArray[i].wasClicked();
            console.log ('number of pics', picArray[i].clicked);
        }
    }
    clickedPic.remove();

    for (let i = 0; i < 3; i ++ ){
    appendRandomPic();
    console.log ('clickedPic');
    }   
}
    Game.addEventListener ('click', clickHandler);
    //main.addEventListener('click', clickHandler);
     console.log ('heard by Game', e.target)


//function to return pic from array randomly
function appendRandomPic (){
    const Game = document.getElementById('Game');
    const randomPic = picArray[ Math.floor(Math.random()* picArray.length)];
    const randomPicEle = randomPic.render();
    Game.appendChild(randomPicEle)
}