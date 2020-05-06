

{
    
var myPix = new Array("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png");

function display_random_image()  {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
}
