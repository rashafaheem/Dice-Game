   
var myPix = new Array("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png");

function display_random_image()  {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}

document.getElementById("demo").disabled = true;

var mixBut = document.getElementById("mixBut");
mixBut.addEventListener("click", Start);
function Start(){
    var x = document.getElementById("mixBut");
    if (x.innerHTML === "START") {
      x.innerHTML = "STOP";
      console.log("Started");
      document.getElementById("demo").disabled = false;
    } 
    else {
      x.innerHTML = "START";
      console.log("Stopped");
      document.getElementById("demo").disabled = true;
    }}
    

    