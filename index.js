var randomNummber1 = Math.floor(Math.random()*6)+1;
var randomNummber2 = Math.floor(Math.random()*6)+1;

var dicePath1 = "images/dice"+randomNummber1+".png";
var dicePath2 = "images/dice"+randomNummber2+".png";

document.querySelector(".img1").setAttribute("src",dicePath1);
document.querySelector(".img2").setAttribute("src",dicePath2);

if(randomNummber1==randomNummber2){
    document.querySelector("h1").innerHTML="<h1>Draw!</h1>"
}
else if(randomNummber1>randomNummber2){
    document.querySelector("h1").innerHTML="<h1>🚩 Player 1 Wins!</h1>"
} 
else {
    document.querySelector("h1").innerHTML="<h1>Player 2 Wins! 🚩</h1>"
}
    