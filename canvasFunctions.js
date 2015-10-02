var canvas = document.getElementById("snakeCanvas");
var squareSize = 10;

// Canvas should leave room for a 1 px line between each grid square
if ((canvas.width - squareSize) % (squareSize + 1) != 0 || 
    canvas.width != canvas.height) {
  alert("The canvas is not sized properly");
}

/// Create Back End Representation of the game board
var integerBoardSize = (canvas.width / squareSize) >> 0;
var board = new Array(integerBoardSize);

for (var i = 0; i < board.length; i++) {
  board[i] = new Array(integerBoardSize);
  
  for (var j = 0; j < board.length; j++) {
    board[i][j] = 0;
  }
}
///

// draw grid lines
function initCanvasGraphics() {
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle="#000000";
  ctx.lineWidth="1px";

  // give the canvas a black background
  ctx.rect(0, 0, canvas.width, canvas.width);
  ctx.fillStyle="grey";
  ctx.fill();

  for (var i = 10.5; i < canvas.width; i = i + 11) {
    // draw verticle line
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.width);
    ctx.stroke();

    // draw horizontal line
    ctx.beginPath();
    ctx.moveTo(0, i)
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
}


initCanvasGraphics();
