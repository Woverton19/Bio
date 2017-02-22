var stopwatch = {

	number: 15,
	run: function () {
		counter = setInterval(stopwatch.increment, 1000);
	},
	increment: function() {
		stopwatch.number--;
      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
      	if (stopwatch.number === 0){
        	stopwatch.stop();
        	
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};


var quiz = [ {
		question: "What year did Doc Brown get sent to at the end of Back to the Future II?",
		choices: ['1985','1955','2015','1885'],
		correct: 3,
	},
	{	question: "What speed do Marty has to reach to make the Delorean to work",
		choices: ['55','88','85','70'],
		correct: 1,
	},
	{	question: "What name is on Marty's underwear  in 1955?",
		
		choices: ['Ralph Luaren','Tommy Hilfiger','Jorashe','Calvin Klein'],
		correct: 2,
	},
	{	question: "What is the name of Marty's brother?",
		
		choices: ['Dan','Dick','Dave','Dean'],
		correct: 2,
	},
	{	question: "What is the name of the dance where Marty's parents first kiss?",
		
		choices: ['The Enchantment Winter Dance','The Enchantment Under The Sea Dance','The Enchantment Under Water Dance','The Fish Under The Sea Dance'],
		correct: 1,
	},
	{	question: "At the end of the first movie, what is the name of the mall where Doc is shot?",
		
		choices: ['Lone Pine Mall','Green Pine Mall','Twin Pines Mall','Single Pine Mall'],
		correct: 1,
	},
	{	question: "Which company manufactured the Hoverboard?",
		
		choices: ['Hot Wheels','Fisher Price','V. Tech','Mattel'],
		correct: 3,
	},
	{	question: "George told Marty that Darth Vader cam down from which planet and told him to ask out Lorraine?",
		
		choices: ['Venus','Vulcan','Mars','Hollywood'],
		correct: 1,
	},
	{	question: "What was Doc doing when he came up with the idea of the Flux Capacitor?",
		
		choices: ['Inventing a mind reading device','Getting a Jules Verne Book from the top shelf','Parking his car','Hanging a clock'],
		correct: 3,
	},
	{	question: "Who was initially cast as Marty?",
		
		choices: ['Rob Lowe','Eric Stoltz','Matthew Broderick','Charlie Sheen'],
		correct: 1,
	},
	{	question: "What was the score for UCLA v Washington, when old biff turns on the radio to prove the almanac can predict the sports scores?",
		
		choices: ['21-13','17-14','19-17','33-32'],
		correct: 2,
}];



var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;





$('input[name="choice"]').hide;

// display question function
function nextQuest(){

	$('#questions').text(quiz[counter].question);	
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);

	console.log(counter);
}


// client-sided validation
function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); // display next question
	}
	else {
		alert("Please make a selection.");
		counter--;
	}
}

// display first question
nextQuest();


// next button function
$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	// increment score if answer is correct
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	// display score screen
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
		return; // returns false *(there has to be a better way! figure it out.)*
	}

	validate();

	// fade in new question
	$('.card').hide().fadeIn("slow");
	
	// clear previous selection
	$('input[name="choice"]').prop('checked', false);
});


// back button function
$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});