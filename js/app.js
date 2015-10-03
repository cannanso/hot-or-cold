
$(document).ready(function(){

	function newGame() {
		var count = 0,
				guess = '',
				random = secret(),
				list = '';


		
		console.log('Let the games begin!');
		console.log('Secret Number is ' + random);

		function secret() {
			return Math.floor(Math.random() * 100) + 1;
		}

		function validate(guess) {
			// check if guess supplied a numeric input between 1 and 100.
			if (guess === parseInt(guess, 10)) {
				return true;
			}
			else {
				return false;
			}
		}

		function upCount() {
			// increase count of number of guesses.
			count++;
			$('#count').text(count);
		}

		function addList(guess) {
			// append each guessed number as an <li> to ul#guessList
		}	

		function feedback() {
			// call secret() to set var random
			// change var guess to input#userGuess.val()
			// validate(guess) 
			// if/else ranges for guess
			// call upCount() to set var count
			// addList(guess)
			// later version: call guess() to compare guess with random number
			// return ice cold, cold, warm, hot, burnin hot
			return 'cold';
		}		

	}

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game ---*/
  	$(".new").click(newGame);

		// click input#guessButton to get feedback and change div#feedback.text()	
		$('#guessButton').click(function(e){
			e.preventDefault();
			//var feedback = feedback();
			$('#feedback').text('cold');
		});  	  	

});


