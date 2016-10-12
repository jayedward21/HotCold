
var count = 0;
var random = Math.floor( Math.random() * (1 - 999 + 1) ) + 999;
var i = 0;
var guess = [];

$(document).ready(function(){
	
	/*--- Display information modal box ---*/

	$("#userGuess").keydown(function (e) {
        myCheck(e);
    });  	
	$(".what").click(function(){
    	
		$(".overlay").fadeIn(1000);

  	
	});

  	/*--- Hide information modal box ---*/
  	
	$("a.close").click(function(){
  		
		$(".overlay").fadeOut(1000);
  	
	});

  
	$(".new").click(function(){
		count = 0;
		random = Math.floor( Math.random() * (1 - 999 + 1) ) + 999;
		$("#guessList").find('li').remove();
		document.getElementById("feedback").innerHTML = "Make your Guess!";
		document.getElementById("count").innerHTML= count;
		resetInput();
	});	
	$(".button").click(function(){
		var temp = document.getElementById('userGuess').value;	
		for (var j = 0; j < i; j++){	
			if ( (temp) == (guess[j]) ) {
    				alert("Already guessed this number");
				return false;
			}
		}
		guess[i] = temp;
		var difference = Math.abs((random) - (guess[i]));		
		myFeedback(difference);
		myCount();				
		myList(guess, i);
		resetInput();
		i++;
		return false;	
	});

	function myCheck(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
	}
	function myFeedback(difference) {
  		if (difference < 999){
		document.getElementById("feedback").innerHTML = "cold";
		}
		if (difference < 100){
		document.getElementById("feedback").innerHTML = "warm";
		}
		if (difference < 10){
		document.getElementById("feedback").innerHTML = "hot";
		}
		if (difference < 1) {
		document.getElementById("feedback").innerHTML = "Winner";
		}
	}
	function myCount(guess) {
		count++;
		document.getElementById("count").innerHTML= count;
	}
	function myList(guess, i) {
		$("#guessList").append('<li>' + guess[i] + '</li>');
	}
	function resetInput() {
		$('#userGuess').val('');
	}	
});


