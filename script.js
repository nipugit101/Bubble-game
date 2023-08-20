var timer=20;
var score=0;
clickedNum=0;

var rnhit=0;
function increseScore(){
    score+=10;
    document.querySelector("#scoree").textContent=score
}
function getNewHit(){
    rnhit=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=rnhit
}
function makebubble() {
    var cultter='';
    for(var i=1;i<=270;i++){
    cultter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector("#btnp").innerHTML=cultter
}
function runtimer() {


    var timeinterval=setInterval(function(){
        timer--;
        if (timer>=0) {
            document.querySelector("#timerr").textContent=timer
        } else {
            clearInterval(timeinterval)
            document.querySelector("#btnp").innerHTML=`Game Over Bro!!! <br> Your Score is ${score}...`
        }
        
    }, 1000);
    
}
getNewHit()
makebubble()
runtimer()
document.querySelector("#btnp").addEventListener("click",function (dtls) {
    clickedNum=Number(dtls.target.textContent);
    if(clickedNum===rnhit){
        makebubble()
        getNewHit()
        increseScore()
        
    }
});

