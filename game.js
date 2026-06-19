var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Step 1: Use jQuery to select the button with the same id as randomChosenColour
  var chosenButton = $("#" + randomChosenColour);

  // Step 2: Animate a flash effect to the button
  chosenButton.fadeIn(100).fadeOut(100).fadeIn(100);

  // Step 3: Play the sound for the button colour
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
