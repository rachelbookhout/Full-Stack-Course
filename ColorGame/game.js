var target_index = Math.floor((Math.random() * 10) + 1);
var colors = ["cyan", "blue", "gold", "grey", "green", "magenta", "orange", "red", "white", "yellow"];
var target = colors[target_index]
var finished = false;
var numberOfGuesses = 0

function do_game(){
  while (!finished)
  {
    var answer = prompt("I'm thinking of one of these colors \n\n" +
                          " blue, cyan, gold, grey, green, magenta, orange, red, white, yellow\n\n"+
                          " What color am I thinking of?");
    guess_input = String(answer);
    numberOfGuesses+=1
    check_guess();
  }
}

function check_guess(){
  if (colors.indexOf(guess_input) == -1)
    {
    alert("Sorry, I don't recogonize your color\n\n"
          + "Please try again");
    }
    else
    {
      if (guess_input > target)
      {
        alert("Sorry, your guess is not correct\n\n"
          + "Hint: your color is alphabetically higher than mine\n\n" +
            "Please try again");
      }
    else if (target > guess_input)
      {
        alert("Sorry, your guess is not correct\n\n"
          + "Hint: your color is alphabetically lower than mine\n\n" +
            "Please try again");
    }
    else
    {
      var page = document.getElementsByTagName("body")[0];
      page.style.background=target;
      alert("Congratulations. You have guessed the color\n\n" +
          "It took you " + numberOfGuesses + " guess to finish the game!\n\n" +
          "You can see the color in the background");
      finished = true;
    }
  }
}
