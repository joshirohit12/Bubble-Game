var timer = document.getElementById("timer");


var counter = 60;
var scoreCounter = 0;
var rhit = 0;


function makeBubble(){

let clutter = "";

for(var i =1; i<=168; i++)
{
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector(".pbtm").innerHTML= clutter;
}

function Timer(){
    var Time = setInterval( function () {
        if(counter > 0){
        counter--;
        timer.innerHTML= counter;
        }
        else{
            clearInterval(Time);
            document.querySelector(".pbtm").innerHTML= "";
        }
    }, 1000);
}

function newHit(){
    rhit = Math.floor(Math.random()*10);
    document.getElementById("Hit").innerHTML = rhit;
}

function score(){
    scoreCounter += 10;
    document.getElementById("Score").innerHTML=scoreCounter;
}

function scoreDecrease(){
    scoreCounter -= 10;
    document.getElementById("Score").innerHTML=scoreCounter;
}

makeBubble();
Timer();
newHit();
score();

document.querySelector(".pbtm").addEventListener("click", function (dets) {
   var chosenNumb = Number(dets.target.textContent);
   if (chosenNumb === rhit){
    score();
    makeBubble();
    newHit();
   }
   else{
    scoreDecrease();
   }
});