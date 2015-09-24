var target_index = Math.floor((Math.random() * 6) + 1);
var colors = ["purple", "pink", "yellow", "red", "blue", "black"];
var target = colors[target_index]
var finshed = false;
var numberOfGuesses = 0

function start_game(){
  while (!finished)
  {
    var guess_input = prompt("I'm thinking of one of these colors \n\n" +
                          " blue, cyan, gold, gray, green, magenta, orange, red, white, yellow\n\n"+
                          " What color am I thinking of?");
    numberOfGuesses+=1
    if (colors.indexOf(guess_input) == -1)
    {
    alert("Sorry, I don't recogonize your color\n\n"
          + "Please try again");
    }
    else
    {
      if (guess_input > target)
      { alert("Sorry, your guess is not correct\n\n"
          + "Hint: your color is alphabetically higher than mine\n\n" +
            "Please try again");
      }
    else if (target > guess_input)
     {alert("Sorry, your guess is not correct\n\n"
          + "Hint: your color is alphabetically lower than mine\n\n" +
            "Please try again");
    }
    else
    {
      body.style.background=target;
      alert("Congratulations. You have guessed the color\n\n" +
          "It took you " + numberOfGuesses + "to finish the game!\n\n" +
          "You can see the color in the background");
      finished = true;
    }
  }
}
}
