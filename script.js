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
  "Zagraj ze mną! Kliknij przycisk!" +
  "<br><br>" +
  output.innerHTML;



// losowanie komputera
var komputer = function() {
	var	kompchoice = Math.floor((Math.random() * 3) + 1);

	if (kompchoice == 1) {
       kompchoice = "kamien";
    } if (kompchoice == 2) {
       kompchoice = "papier";
    } if (kompchoice == 3) {
       kompchoice = "nozyce";
	}
	return kompchoice;
} 




var button1 = document.getElementById("kamien");
var button2 = document.getElementById("papier");
var button3 = document.getElementById("nozyce");

button1.disabled = true;
button2.disabled = true;
button3.disabled = true;

var newGameButton = document.getElementById("btnNewGame");
var newGame = document.getElementById("newGame");

newGameButton.addEventListener('click', function(){
	round = 0;
	userround = window.prompt("A po ilu rundach Ty się uśmiechniesz? :-)");

	if (userround == null || userround == "" || isNaN(userround)|| (userround < 1) ){
		newGame.insertAdjacentHTML ('afterend',  '<br><br>Hej, dlaczego nie chcesz pograć? Podaj liczbę rund!');
	} else if 
		(userround > 0) {
		newGameButton.disabled = true;
		button1.disabled = false;
		button2.disabled = false;
		button3.disabled = false;
		roundLeft.innerHTML = '<br><br>Rundy do zagrania: ' + (userround - round);
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
		output.insertAdjacentHTML('afterend', '<br><br>'+'Komputer wybrał ' + kompchoice + '. Ty również wybrałeś ' + user + '. Remis!');
	}
	else if ((user == "kamien") && (kompchoice == "nozyce") || ((user == "papier") && (kompchoice == "kamien")) || ((user == "nozyce") && (kompchoice == "papier"))) {
		userresult++;
		round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Komputer wybrał ' + kompchoice + '. Ty wybrałeś ' + user + '. Gratulacje! Wygrałeś!');
	}
	else if 
		((kompchoice == "kamien") && (user == "nozyce") || ((kompchoice == "papier") && (user == "kamien")) || ((kompchoice == "nozyce") && (user == "papier"))) {
		kompresult++;
		round++;
		output.insertAdjacentHTML('afterend', '<br><br>'+'Komputer wybrał ' + kompchoice + '. Ty wybrałeś ' + user + '. Przykro mi, przegrałeś.');
	}

	if (userround == round) {
		button1.disabled = true;
		button2.disabled = true;
		button3.disabled = true;

		newGameButton.disabled = false;

		if (kompresult > userresult) {
		roundLeft.insertAdjacentHTML('afterend', '<br><br>' + 'Komputer wygrał całą rozgrywkę! Zacznij od nowa!' + '<br><br>');
		} else if (userresult > kompresult) {
		roundLeft.insertAdjacentHTML('afterend', '<br><br>'+'Ty wygrałeś całą rozgrywkę! Zacznij od nowa!' + '<br><br>');
		}
	}
}


	


button1.addEventListener('click', function(){
	game((userchoice('kamien')),komputer());
	roundLeft.innerHTML = '<br><br>Rundy do zagrania: ' + (userround - round);
	results.innerHTML = "Wyniki" + "<br><br>" +"Komputer: " + kompresult + " : " + "Gracz: " + userresult
})

button2.addEventListener('click', function(){
	game((userchoice('papier')),komputer());
	roundLeft.innerHTML = '<br><br>Rundy do zagrania: ' + (userround - round);
	results.innerHTML = "Wyniki" + "<br><br>" +"Komputer: " + kompresult + " : " + "Gracz: " + userresult
})

button3.addEventListener('click', function(){
	game((userchoice('nozyce')),komputer());
	roundLeft.innerHTML = '<br><br>Rundy do zagrania: ' + (userround - round);
	results.innerHTML = "Wyniki" + "<br><br>" +"Komputer: " + kompresult + " : " + "Gracz: " + userresult
})




