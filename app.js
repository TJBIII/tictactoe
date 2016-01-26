var turnNumber = 0;
var ids = ['topLeft', 'topMid', 'topRight', 'midLeft', 'midMid', 'midRight', 'bottomLeft', 'bottomMid', 'bottomRight'];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var board = ['', '', '', '', '', '', '', '', ''];

function initializeDOM (currentItem) {
  var currentEl = document.getElementById('output');
  currentEl.innerHTML += `<div class='tile' id='${currentItem}'></div>`;
  currentEl.addEventListener('click', tileSelected);
}

function gameInit(){
  ids.forEach(initializeDOM);
  board  = ['', '', '', '', '', '', '', '', ''];
}

function tileSelected() {
  var clickedID = event.target.id
  console.log("clicked");

  if (event.target.classList.length < 2){
    turnNumber++;

    if (turnNumber % 2 === 0 && ids.indexOf(clickedID) >= 0){
      document.getElementById(clickedID).classList.add('x');
      board[ids.indexOf(clickedID)] = 'x';
    } else if (ids.indexOf(clickedID) >= 0){
      document.getElementById(clickedID).classList.add('o');
      board[ids.indexOf(clickedID)] = 'o';
    }
  }
  console.log("board", board);
  checkBoard(board);
}

function clearBoard(){
  document.getElementById('output').innerHTML = "";
  gameInit();
}

function checkBoard(currentBoard) {
  if (currentBoard.indexOf("") < 0){
    alert("Draw");
    clearBoard();
  }

  for (var win in wins) {
    if (board[wins[win][0]] === board[wins[win][1]] &&
        board[wins[win][1]] === board[wins[win][2]] &&
        board[wins[win][0]] !== ''){

      alert(`Good job! ${board[wins[win][0]]} wins!`);
      clearBoard();
    }
  }
}

gameInit();