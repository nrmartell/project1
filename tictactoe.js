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
var nextTurn = 'X';

function cellClick(cell){
if (cell.innerHTML === 'X' || cell.innerHTML === 'O')
{ alert ('Square has already been choosen, please select another square');
return
}
cell.innerHTML = nextTurn;
playersTurn();

}
function playersTurn(){
if(nextTurn == 'X'){
    nextTurn = 'O';
    }
else {
    nextTurn = 'X';
    }

}

 



