var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementById("body");

function generateFaces() {

for(var i=0; i<numberOfFaces; i++){

var imgpositionLeft = Math.floor(Math.random()*400);

var imgpositionTop = Math.floor(Math.random()*400);

var imgface = document.createElement("img");

imgface.setAttribute("src","https://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");

imgface.style.top = imgpositionTop+"px";

imgface.style.left = imgpositionLeft +"px";

theLeftSide.appendChild(imgface);

}

//createRightSide();

}
  //in each iteration an image is created using createElement()
  //the img is the smily face
  //the position is controlled by the top and left value
  //top should be random between a certain range (height of div and height of image) - use style.top
  //left should be random beween a certain range (width of div and width of image) - use style.left
  //add the newly created image to the LeftSide dev using appendChild()
  //call createRightSide
  //call playGame


function createRightSide(){
  //use cloneNode(true) to copy the leftSide div (leftSideImages = theLeftSide.cloneNode(true);)
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSide);
  //delete the last child of leftSideImages
  //add leftSideImages to RightSide div

}

function playGame(){
  generateFaces();
 theLeftSide.lastChild.onclick= function nextLevel(event){
        event.stopPropagation();
        removeAllChildren();
         numberOfFaces += 5;
         generateFaces();
  };
 //encorporte the two below methods for how the game is played
 //if they are successful
  //delete out all the child nodes of both left and right sides
 //if they are not
theBody.onclick = function gameOver() {
     alert("Game Over!");
     theBody.onclick = null;
     theLeftSide.lastChild.onclick = null;
};

}

 // //add a onclick event to the last child on the left side
 //  theLeftSide.lastChild.onclick= function nextLevel(event){
 //        event.stopPropagation();
 //        numberOfFaces += 5;
 //        generateFaces();
 //  };
 //  //if they don't click on the last child, end the game
 //  theBody.onclick = function gameOver() {
 //    alert("Game Over!");
 //    theBody.onclick = null;
 //    theLeftSide.lastChild.onclick = null;
 //  };
