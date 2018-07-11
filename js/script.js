"use strict";


var output = document.getElementById("buttons");
var results = document.getElementById("result");
var choice;
var user;
var kompresult = 0;
var userresult = 0;
var userround = 0;
var round = 0;

output.innerHTML =
  "Play with me! Click the button!" +
  "<br><br>" +
  output.innerHTML;



// losowanie komputera
var komputer = function() {
	var	kompchoice = Math.floor((Math.random() * 3) + 1);

	if (kompchoice == 1) {
       kompchoice = "stone";
    } if (kompchoice == 2) {
       kompchoice = "paper";
    } if (kompchoice == 3) {
       kompchoice = "scissors";
	}
	return kompchoice;
} 




var button1 = document.getElementById("stone");
var button2 = document.getElementById("paper");
var button3 = document.getElementById("scissors");

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;

var newGameButton = document.getElementById("btnNewGame");
var newGame = document.getElementById("newGame");

newGameButton.addEventListener('click', function(){
	round = 0;
	userround = window.prompt("How many rounds do you want to play? :-)");

	if (userround == null || userround == "" || isNaN(userround)|| (userround < 1) ){
		newGame.insertAdjacentHTML ('afterend',  '<br><br>Hey, dont you want to play? Give me number!');
	} else if 
		(userround > 0) {
		newGameButton.disabled = true;
		button1.disabled = false;
		button2.disabled = false;
		button3.disabled = false;
		roundLeft.innerHTML = '<br><br>Rounds to play: ' + (userround - round);
	}
})


// wybor uzytkownika
var userchoice = function(choice) {
	user = choice;
	return user;
}

//porownanie
var roundLeft = document.getElementById("roundLeft");


var game = function(user,kompchoice) {
	var kompchoice = komputer();

	if (user == kompchoice) {
		round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You also chose ' + user + '. Draw!');
	}
	else if ((user == "stone") && (kompchoice == "scissors") || ((user == "paper") && (kompchoice == "stone")) || ((user == "scissors") && (kompchoice == "paper"))) {
		userresult++;
		round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You chose ' + user + '. Congratulations! You won!');
	}
	else if 
		((kompchoice == "stone") && (user == "scissors") || ((kompchoice == "paper") && (user == "stone")) || ((kompchoice == "scissors") && (user == "paper"))) {
		kompresult++;
		round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You chose ' + user + '. It is sad, but you lost.');
	}

	if (userround == round) {
		button1.disabled = true;
		button2.disabled = true;
		button3.disabled = true;

		newGameButton.disabled = false;

		if (kompresult > userresult) {
		roundLeft.insertAdjacentHTML('afterend', '<br><br>' + 'Computer won this game. Start again! ' + '<br><br>');
		} else if (userresult > kompresult) {
		roundLeft.insertAdjacentHTML('afterend', '<br><br>'+'You won this game! Start again!' + '<br><br>');
		}
	}
}


	
var gameButtons = document.querySelectorAll('.player-move');


for(var i = 0; i < gameButtons.length; i++){
		gameButtons[i].addEventListener('click', function(){
			var choice = event.target.getAttribute("data-move");
			console.log(choice);
			game((userchoice(choice)),komputer());
			roundLeft.innerHTML = '<br><br>Rounds left: ' + (userround - round);
			results.innerHTML = "Scores" + "<br><br>" +"Computer: " + kompresult + " : " + "Player: " + userresult + "<br><br>"

		});

	}

/*
button1.addEventListener('click', function(){
	game((userchoice('stone')),komputer());
	roundLeft.innerHTML = '<br><br>Rounds left: ' + (userround - round);
	results.innerHTML = "Scores" + "<br><br>" +"Computer: " + kompresult + " : " + "Player: " + userresult + "<br><br>"
})

button2.addEventListener('click', function(){
	game((userchoice('paper')),komputer());
	roundLeft.innerHTML = '<br><br>Rounds left: ' + (userround - round);
	results.innerHTML = "Scores" + "<br><br>" +"Computer: " + kompresult + " : " + "Player: " + userresult + "<br><br>"
})

button3.addEventListener('click', function(){
	game((userchoice('scissors')),komputer());
	roundLeft.innerHTML = '<br><br>Rounds left: ' + (userround - round);
	results.innerHTML = "Scores" + "<br><br>" +"Computer: " + kompresult + " : " + "Player: " + userresult + "<br><br>"
})
 */



