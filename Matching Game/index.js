var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementById("body");

function generateFaces(){
  //faces are created in a loop and executes numberofFaces times
  for (i = 0; i < numberofFaces; i++){

    var width = Math.floor((Math.random() * style.left) + 1);
    var height = Math.floor((Math.random() * style.top) + 1);
    var smiley = createElement("img");
    smiley.setAttribute("src","./Scripts/smile.png" );
    smiley.setAttribute("height", height);
    smiley.setAttribute("width", width);
    theLeftSide.appendChild(smiley);
  }
  //in each iteration an image is created using createElement()
  //the img is the smily face
  //the position is controlled by the top and left value
  //top should be random between a certain range (height of div and height of image) - use style.top
  //left should be random beween a certain range (width of div and width of image) - use style.left
  //add the newly created image to the LeftSide dev using appendChild()
  //call createRightSide
  //call playGame
}

function createRightSide(){
  //use cloneNode(true) to copy the leftSide div (leftSideImages = theLeftSide.cloneNode(true);)
  //delete the last child of leftSideImages
  //add leftSideImages to RightSide div

}

function playGame(){
 //encorporte the two below methods for how the game is played
 //if they are successful
  //delete out all the child nodes of both left and right sides
 //if they are not


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
