$(document).ready(function() {

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    var winsCount = 0;
    var lossCount = 0;
    var userScore = 0;
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#random-number").text(randomNumber);

    var resetGame = function(){
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#score").text(userScore);
        $("#random-number").text(randomNumber);
    }
    $("#crystal-1").on("click", function() {
      userScore += crystalOne;
      $("#score").text(userScore);
      if (userScore === randomNumber) {
          winsCount ++;
          $("#win-count").text("Wins: " + winsCount);
          $("#win-lose").text("You Win!")
          resetGame()
        }
        if (userScore > randomNumber) {
            lossCount ++;
            $("#loss-count").text("Loses: " + lossCount);
            $("#win-lose").text("You lose.")
            resetGame()
        }
    });

    $("#crystal-2").on("click", function() {
        userScore += crystalTwo;
        $("#score").text(userScore);
        if (userScore === randomNumber) {
            winsCount ++;
            $("#win-count").text("Wins: " + winsCount);
            $("#win-lose").text("You Win!")
            resetGame()
        }
        if (userScore > randomNumber) {
            lossCount ++;
            $("#loss-count").text("Loses: " + lossCount);
            $("#win-lose").text("You lose.")
            resetGame()
        }
    });

    $("#crystal-3").on("click", function() {
        userScore += crystalThree;
        $("#score").text(userScore);
        if (userScore === randomNumber) {
            winsCount ++;
            $("#win-count").text("Wins: " + winsCount);
            $("#win-lose").text("You Win!")
            resetGame()
        }
        if (userScore > randomNumber) {
            lossCount ++;
            $("#loss-count").text("Loses: " + lossCount);
            $("#win-lose").text("You lose.")
            resetGame()
        }
    });

    $("#crystal-4").on("click", function() {
        userScore += crystalFour;
        $("#score").text(userScore);
        if (userScore === randomNumber) {
            winsCount ++;
            $("#win-count").text("Wins: " + winsCount);
            $("#win-lose").text("You Win!")
            resetGame()
        }
        if (userScore > randomNumber) {
            lossCount ++;
            $("#loss-count").text("Loses: " + lossCount);
            $("#win-lose").text("You lose.")
            resetGame()
        }
    });
});