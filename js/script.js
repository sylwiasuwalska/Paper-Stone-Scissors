"use strict";


var output = document.getElementById("buttons");
var results = document.getElementById("result");


var params = {
	choice: 0,
	kompresult: 0,
	userresult: 0,
	userround: 0,
	round: 0,
	progres: [],
}

output.innerHTML =
  "Play with me! Click the button!" +
  "<br><br>" +
  output.innerHTML;





// obsluga modali, funkcje
	//otwieranie modala
	var showModal = function(score){

		document.querySelector('.overlay').classList.add('show');
		document.querySelector(score).classList.add('show');
	};

	var hideModal = function(event){
	event.preventDefault();

	document.querySelector('#modal-overlay').classList.remove('show');

	var modalsToClose = document.querySelectorAll('.modal');

	for(var i = 0; i < modalsToClose.length; i++){
	modalsToClose[i].classList.remove('show');
	};

	};

	var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	
	};
	
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	};






// gra wlasciwa

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
	params.round = 0;
	params.userround = window.prompt("How many rounds do you want to play? :-)");

	if (params.userround == null || params.userround == "" || isNaN(params.userround)|| (params.userround < 1) ){
		newGame.insertAdjacentHTML ('afterend',  '<br><br>Hey, dont you want to play? Give me number!');
	} else if 
		(params.userround > 0) {
		newGameButton.disabled = true;
		button1.disabled = false;
		button2.disabled = false;
		button3.disabled = false;
		roundLeft.innerHTML = '<br><br>Rounds to play: ' + (params.userround - params.round);
	}
})



//porownanie
var roundLeft = document.getElementById("roundLeft");


var game = function(user,kompchoice) {
	var kompchoice = komputer();

	if (user == kompchoice) {
		params.round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You also chose ' + user + '. Draw!');
	}
	else if ((user == "stone") && (kompchoice == "scissors") || ((user == "paper") && (kompchoice == "stone")) || ((user == "scissors") && (kompchoice == "paper"))) {
		params.userresult++;
		params.round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You chose ' + user + '. Congratulations! You won!');
	}
	else if 
		((kompchoice == "stone") && (user == "scissors") || ((kompchoice == "paper") && (user == "stone")) || ((kompchoice == "scissors") && (user == "paper"))) {
		params.kompresult++;
		params.round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Computer chose ' + kompchoice + '. You chose ' + user + '. It is sad, but you lost.');
	}

	if (params.userround == params.round) {
		button1.disabled = true;
		button2.disabled = true;
		button3.disabled = true;

		newGameButton.disabled = false;

		if (params.kompresult < params.userresult) {
			showModal('#modal-won');
		//roundLeft.insertAdjacentHTML('afterend', '<br><br>' + 'Computer won this game. Start again! ' + '<br><br>');
		} else if (params.userresult < params.kompresult) {
			showModal('#modal-lost');
		//roundLeft.insertAdjacentHTML('afterend', '<br><br>'+'You won this game! Start again!' + '<br><br>');
		} else if (params.userresult == params.kompresult) {
			showModal('#modal-draw');
		//roundLeft.insertAdjacentHTML('afterend', '<br><br>'+'You won this game! Start again!' + '<br><br>');
		} 
	}
}


	
var gameButtons = document.querySelectorAll('.player-move');


for(var i = 0; i < gameButtons.length; i++){
		gameButtons[i].addEventListener('click', function(){
			var choiceUser = event.target.getAttribute("data-move");
			game(choiceUser,komputer());
			roundLeft.innerHTML = '<br><br>Rounds left: ' + (params.userround - params.round);
			results.innerHTML = "Scores" + "<br><br>" +"Computer: " + params.kompresult + " : " + "Player: " + params.userresult + "<br><br>"

		});

	}



