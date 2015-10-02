
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function newGame() {
  		var count = 0;
  		var guess = '';
  		var random = '';
  		var list = '';

			function secret() {
				// generate random number(Math.random)
				// return random number
			}

			function feedback() {
				// change var guess to input#userGuess.val()
				// validate(guess) 
				// if/else ranges for guess
				// call upCount() to set var count
				// addList(guess)
				// call secret() to set var random
				// later version: call guess() to compare guess with random number
				// return ice cold, cold, warm, hot, burnin hot
			}

			function validate(guess) {
				// check if guess supplied a numeric input between 1 and 100.
				// parseInt();
			}

			function upCount() {
				// increase count of number of guesses.
				// count++;
				// change content of span#count.
			}

			function addList(guess) {
				// append each guessed number as an <li> to ul#guessList
			}
			

  	}

  	// click a.new to start a new game
  	// click input#guessButton to get feedback and change div#feedback.text()
  	

});


