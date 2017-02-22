var colors = ["#redBox", "#blueBox", "#greenBox", "#yellowBox"];
var sequence = [];
var playerSequence = [];
var level = 1;
var turn = "computer";
var count = 0;


function playGame() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // for (var i = 0; i < sequence.length; i++) {
  //      if (s)sequence[i]
  // }

  sequence.push(randomColor);
  playSequence(sequence);
}

function animate(color) {
  $(color).addClass('active').fadeTo("fast", .33, function(){
    $(color).addClass('active').fadeTo("fast", 1);  })
  
  setTimeout(function() {
    $(color).removeClass('active');
  }, 1000);
}

function playSequence(arr) {
  var i = 0;

  if (i <= arr.length) {
    var active = setInterval(function() {
      animate(arr[i]);
      i++;
    }, 1000);
  } else {
    clearInterval(active);
  }
  turn = "player";
  playerSequence = [];
}

$(".color").click(function() {
  if (turn === "player") {
    var playerColor = "#" + $(this).attr('id');
    playerSequence.push(playerColor);
    animate(playerColor);
    if (sequence[count] === playerSequence[count]) {
      count++;
      if (count === sequence.length) {
        count = 0;
        level++;
        if (level === 100) {
          alert("You win! Press start for a new game.");
          return;
        }
        
        playGame();
        displayLevel();
      }
    } else {
      displayLevel();
      endGame();
      return;
    }
  }
});

$(".startButton").click(function() {
  console.log("runing")
  count = 0;
  level = 1;
  sequence = [];
  playerSequence = [];
  playGame();
});

function endGame(){
  console.log(level);
  displayLevel();
  alert("game Over You loose! You got to Level:  " + level);
  clearGame();
}
function clearGame(){
  count = 0;
  level = 1;
  sequence = [];
  playerSequence = [];

}

$('.stopButton').click( function() {
  $("#myModal").show( function() {
    $('#yesButton').click( function(){
        playGame();
        $('#myModal').hide();
    });       
    
     $('#noButton').click( function(){
       displayLevel();
       clearGame()
       $('#myModal').hide();
    });   
    
  }); 

}); 

function displayLevel(){
  $('#userStats').html(level);
}