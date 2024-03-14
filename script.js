function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 186; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#pBottom").innerHTML = clutter;
}
makeBubble(); //Until this part, the bubbles will be set


var time = 60 //Default timer
var randomHitValue;

var timerRunning = function timer(){
    setInterval(function(){
   if(time>0){
    time--; //Until it reaches zero it will keep reducing 1 second of time
    document.querySelector("#timerValue").textContent = time;
   }
   else{
    clearInterval(timerRunning) //After it reaches zero the interval will be cleared so it doesn't take unnecessary memory
    document.querySelector("#pBottom").innerHTML = `<h1>Game Over</h1`
   }
    },1000)
}
timerRunning();

function newHit(){
   randomHitValue = Math.floor(Math.random()*10);
    document.querySelector("#bubbleHit").textContent = randomHitValue
}
newHit();


var score = 0;
var scoreUpdate = function(){
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#pBottom").addEventListener('click',function(dets){
   var clickedNum = Number(dets.target.textContent)
    if(clickedNum === randomHitValue){
        scoreUpdate();
        makeBubble();
        newHit();
    }
})