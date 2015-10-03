var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

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

createRightSide();
  theLeftSide.lastChild.onclick= function nextLevel(event){
    event.stopPropagation();
    removingChildNodes();
    numberOfFaces += 5;
    generateFaces();
  };
  theBody.onclick = function gameOver() {
     alert("Game Over!");
     theBody.onclick = null;
     theLeftSide.lastChild.onclick = null;
     removingChildNodes();
  };

}

function createRightSide(){
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}


function removingChildNodes() {

while (theLeftSide.hasChildNodes()) {

  theLeftSide.removeChild(theLeftSide.firstChild);

}

while (theRightSide.hasChildNodes()) {

  theRightSide.removeChild(theRightSide.firstChild);

}

}
