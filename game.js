/*var oldx, oldy;
function getCursorPosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  ctx.moveTo(oldx, oldy);
  oldx = x;
  oldy = y;
  ctx.lineTo(x, y);
  ctx.stroke();
  console.log("mouse at x: " + x + " y: " + y);

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, 4, 0, 2 * Math.PI);
  ctx.fill();
  // ctx.beginPath()
  // ctx.lineTo(x,y)
}

canvas.addEventListener("wheel", function(e) {
  //changeRadius(canvas, e);
});

canvas.addEventListener("mousedown", function(e) {
  getCursorPosition(canvas, e);
});
*/
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
function keyPress(code) {
  //console.log(code);
  if (code == 37) {
    //console.log("LEFT")
    playerX = playerX - 50;
    if (playerX<0){
      playerX = 450
    }
  }
  if (code == 39) {
    //console.log("RIGHT")
    playerX = playerX + 50;
    if (playerX>450){
      playerX = 0
    }
  }
  if (code == 38) {
    //console.log("UP");
    playerY = playerY - 50;
    if (playerY<0){
      playerY = 450
    }
  }
  if (code == 40) {
    //console.log("DOWN");
    playerY = playerY + 50;
    if (playerY>450){
      playerY = 0
    }
  }
}
addEventListener("keydown", e => keyPress(e.keyCode));
function drawGrid() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);
  for (var i = 0; i < 10; i++) {
    ctx.moveTo(0, i * 50);
    ctx.lineTo(500, i * 50);
    ctx.stroke();
    ctx.moveTo(i * 50, 0);
    ctx.lineTo(i * 50, 500);
    ctx.stroke();
  }
}
function drawPlayer() {
  drawGrid();
  ctx.fillStyle = "red";
  ctx.fillRect(playerX, playerY, 50, 50);
}
var playerX = 0;
var playerY = 0;
function randomFruit(){
  var x = Math.floor(Math.random() * 10);
  var y = Math.floor(Math.random() * 10);
  ctx.fillStyle = "blue";
  ctx.fillRect(x*50, y*50, 50, 50);
}
setInterval(drawPlayer, 1);
