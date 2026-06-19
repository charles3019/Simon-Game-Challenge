var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Step 1-2: Handle button clicks with jQuery
$(".btn").on("click", function() {
  // Get the id of the clicked button
  var userChosenColour = $(this).attr("id");
  
  // Step 4: Add to userClickedPattern array
  userClickedPattern.push(userChosenColour);
  
  // Log to console for testing
  console.log(userClickedPattern);
});

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
