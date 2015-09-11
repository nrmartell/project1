$(document).ready(function(){

  
  alert ("pick a player");
//button clicks!
    var X = $("#playerOne").click(function(){
   		 alert( "You are Player one")
    	 console.log("playerOne");
    	});

	   var O= $("#playerTwo").click(function(){
   		 alert("Hand it over to player one")
    	 console.log("playerTwo");
    	});

	   $("#newGame").click(function(){
   		 
    	 console.log("newGame");
    	}); 
 
 var turns=0;
    
      $('.gameboard').find('td').on('click', function(){
            if (turns % 2 === 0){
              $(this).text('X'); 
              checkWinner('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkWinner('O');
            }
          turns++;
          
      });

 
  function checkWinner(){
    var winner= null;
    var boxzero= $("#boxzero").text();
    var boxone= $("#boxone").text();
    var boxtwo= $("#boxtwo").text();
    var boxthree= $("#boxthree").text();
    var boxfour= $("#boxfour").text();
    var boxfive= $("#boxfive").text();
    var boxsix= $("#boxsix").text();
    var boxseven= $("#boxseven").text();
    var boxeight= $("#boxeight").text();
    
   

    if (boxzero === 'X' && boxone === 'X'&& boxtwo=== 'X'){
          console.log ("winner x across row 1");
          
          alert("Player 1 wins! Play Again");
           
    }
      else if (boxthree === 'X' && boxfour === 'X'&& boxfive=== 'X'){
        console.log ("winner x across row 2");
        alert("Player 1 wins! Play Again");
        

        }
        else if (boxsix === 'X' && boxseven === 'X'&& boxeight=== 'X'){
          console.log ("winner x across row 3");
          alert("Player 1 wins! Play Again");
          
        }
          else if (boxzero === 'X' && boxthree === 'X'&& boxsix=== 'X'){
            console.log ("winner x down column 1");
            alert("Player 1 wins! Play Again");
            
          }
            else if (boxone === 'X' && boxfour === 'X'&& boxseven=== 'X'){
              console.log ("winner x down column 2");
              alert("Player 1 wins! Play Again");
              
            }
              else if (boxtwo === 'X' && boxfive === 'X'&& boxeight=== 'X'){
                console.log ("winner x down column 3");
                alert("Player 1 wins! Play Again");
                
              }
      else if (boxzero === 'O' && boxone === 'O'&& boxtwo=== 'O'){
        console.log ("winner x across row 1");
        alert("Player 2 wins! Play Again");
        
      }
        else if (boxthree === 'O' && boxfour === 'O'&& boxfive=== 'O'){
          console.log ("winner x across row 2");
          alert("Player 2 wins! Play Again");
          
        }
          else if (boxsix === 'O' && boxseven === 'O'&& boxeight=== 'O'){
            console.log ("winner x across row 3");
            alert("Player 2 wins! Play Again");
            
          }
            else if (boxzero === 'O' && boxthree === 'O'&& boxsix=== 'O'){
              console.log ("winner x down column 1");
              alert("Player 2 wins! Play Again");
              
            }
              else if (boxone === 'O' && boxfour === 'O'&& boxseven=== 'O'){
                console.log ("winner O down column 2");
                alert("Player 2 wins! Play Again");
                
              }
                else if (boxtwo === 'O' && boxfive === 'O'&& boxeight=== 'O'){
                  console.log ("winner O down column 3");
                  alert("Player 2 wins! Play Again");
                  
                  }
                  if (turnCount>=9){
                    alert("its a draw");
                  }
}
         
          $(".cell").click(function(){
  
              checkWinner();
         });




});/*closing document ready*/


//playerone will need to select a box to add x into it, when they click select box in the grid it will need to display an X 
// playertwo  will then need to do the same except the box that they choose will need to display an O, in the future  if players try to select a box with text already in it they will get an alert notifying them of issue.
var cell;
var player= 'X';

function nextTurn(){
 if (player=== 'X'){
      player= 'O';

 }
 else{
  player = 'X';
 }


}
function cellClick(cell){
  if (cell.textContent === 'X' || cell.textContent === 'O')
    { alert ('This one already has something in it! Pick another one.');
  
  }
  cell.textContent = player;
  nextTurn();
  }



// we will need to find winner. A winner is declared when a row is filled with either x's or os. this can be across a row, down a row, or diagnol across the board. once this happens we will alert that player one or player two is the winner then add the score into the score box. 



//if there are not 1 row of x and 1 row of o somewhere on the board and the board is full we will need to alert that it is a cats game and there is no winner


//after game is either won or there is draw player we will need to be able to click new game button and reset the board like new and start over.



