$(document).ready(function(){

	alert ("pick a player");
//button clicks!
 	var playerOne = $("#playerOne").click(function(){
   		 alert( "You are Player one")
    	 console.log("playerOne");
    	});

	var playerTwo= $("#playerTwo").click(function(){
   		 alert("Hand it over to player one")
    	 console.log("playerTwo");
    	});

	$("#newGame").click(function(){
   		 
    	 console.log("newGame");
    	});
 

});/*closing document ready*/

var cell;
var whosNext= 'X';
//if player tries to select a box with something in it they will get an error.
function cellClick(cell){
	if (cell.textContent === 'X' || cell.textContent === 'O')
		{ alert ('This one already has something in it! Pick another one.');
		return
	}
	cell.textContent = whosNext;
	nextTurn();
}
function nextTurn(){
	if(whosNext == 'X'){
    	whosNext = 'O';
    }
	else {
    whosNext = 'X';
    }
}
// we will need to find winner meaning that there will need to be a row somewhere on the grid filled with either x or o, if there are not 1 row of x and 1 row of o somewhere on the board we will need to alert that it is a cats game






//we will need to add a point to either player one or player 2 in the score box everytime a winner is declared.


//after game is either won or there is draw player will need to be able to click new game button and reset the board like new



