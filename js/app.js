var keyValue;
var guessValue;
var guessCount=0;


$(document).ready(function(){
	keyValue = (Math.floor((Math.random()*100 +1)));
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Reset Game  ---*/
  	$(".new").click(function(){
  		keyValue = (Math.floor((Math.random() * 100 +1)));  		
  		//alert(keyValue);
  		$("#userGuess").val("");
  		$('#feedback').text("Make your Guess!");
  		$("#count").text("0");
  		for(var removeLi = 1; removeLi<=guessCount; removeLi++){
  			$("#guessList li").remove();
  		}
  		guessCount = 0;
  	});

  	/*--- Guess Routine ---*/
  	$("#guessButton").click(function(event){
  		event.preventDefault(); /*--- keep guessButton of type-> submit from reloading  ---*/
  		guessCount++;
  		guessValue = $("#userGuess").val();
  		
  		/*--- calculate distance from target ---*/
  		var error = Math.abs(guessValue - keyValue);
  		var guessClass;
  		
  		$("#count").text(guessCount);  //update count of guesses.

  		/*--- Customize Feedback Based on Distance from Target ---*/
  		if(error ==0){
  			$('#feedback').text("You Got It!");
  			guessClass="gotIt"
  		}
  		else if(error < 3){
  			$('#feedback').text("You are REALLY Warm");
  			guessClass="hot"
  		}
  		else if(error < 10){
  			$('#feedback').text("You Are Very Warm");
  			guessClass="warm"
  		}
  		else if(error < 25){
  			$('#feedback').text("You are Warm");
  			guessClass="tepid"
  		}
  		else {
  			$('#feedback').text("You are Cold");
  			guessClass="cold"
  		}

  		/*--- Add to List of Guesses  ---*/
  		$("#guessList").append("<li class="+ guessClass + ">"+guessValue+"</li>");
  		$("#userGuess").val("");
  	})
});


