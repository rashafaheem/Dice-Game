   
var myPix = new Array("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png");

var p1Score = document.getElementById("player1Score");
var p2Score = document.getElementById("player2Score");
var score1 = 0;
var score2 = 0;
var moves = 0;
var activePlayer;
var diceTotal = 0;

function score()
{
switch (scored) {
  case "d1.png":
    score = 1;
    break;
  case "d2.png":
    score = 2;
    break;
  case "d3.png":
    score = 3;
    break;
  case "d4.png":
    score = 4;
    break;
  case "d5.png":
    score = 5;
    break;
  case "d6.png":
    score = 6;
}
}

function rollDice()  
{
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
     moves++;
     console.log(moves);
}


document.getElementById("roll").disabled = true;
function startGame()
{
    var x = document.getElementById("mixBut");
    if (x.innerHTML === "START") {
      x.innerHTML = "STOP";
      console.log("Started");
      document.getElementById("mixBut");
      document.getElementById("roll").disabled = false;
    } 
    else {
      x.innerHTML = "START";
      console.log("Stopped");
      document.getElementById("mixBut");
      document.getElementById("roll").disabled = true;
    }
}



function switchChance()
{

if (moves % 2 == 0) 
{
  console.log("p2");
  document.getElementById('player2').src='active.png';
  document.getElementById('player1').src='player1.png';
  score2 = score2 + scored;
  p2Score.innerHTML = score2;

} 
else {
  console.log("p1");
  document.getElementById('player1').src='active.png';
  document.getElementById('player2').src='player2.png';
  document.getElementById("player1Score").innerHTML = text;
  score1 = score1 + scored;
  p1Score.innerHTML = score1;
} 

}
