
$(document).ready(function(){

	var count = 0,
		random = secret();

	function secret() {
		// generate random number between 1 and 100
		var num = Math.floor(Math.random() * 100) + 1;
		console.log('Secret number is: ' + num);
		return num;
	}				

	function newGame() {
		count = 0;
		random = secret();

		$('#guessList').empty();
		$('#count').text(count);
		$('#feedback').text('Make your Guess!');

		console.log('Let the games begin!');
	}

	function feedback() {
		var guess = $('#userGuess').val(), 
				range = '';
		//clear input
		$('#userGuess').val('');

		if(validate(guess)) {
			addList(guess);
			upCount();
			range = findRange(random, guess);
		}
		else {
			range = 'Enter a number between 1 and 100.';
		}
		return range;
	}

	function validate(guess) {
		// check if guess supplied a numeric input between 1 and 100.
		guess = parseInt(guess);

		if (!isNaN(guess) && guess >= 1 && guess <= 100) {
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
		$('#guessList').append('<li>' + guess + '</li>');
	}

	function findRange(random, guess) {
		var	phrase = '',
				diff = Math.abs(random - guess); // always positive value 
		// return ice cold, cold, warm, hot, burnin hot
		if (diff > 50) {
			phrase = 'ice cold';
		}
		else if (diff > 30  && diff <= 50) {
			phrase = 'cold';
		}					
		else if (diff > 20  && diff <= 30) {
			phrase = 'warm';
		}					
		else if (diff > 10  && diff <= 20) {
			phrase = 'hot';
		}			
		else if (diff >= 1 && diff <= 10) {
			phrase = 'burning hot';
		}
		else if (diff === 0) {
			phrase = 'Firrrrrre!';
		}
		return phrase;
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

  	/*--- Get feedback for user guess ---*/
  	$('#guessButton').click(function(e){
  		e.preventDefault();
  		$('#feedback').text(feedback());
  	});  	  	

});


