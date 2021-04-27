var oldx, oldy;
function getCursorPosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  ctx.moveTo(oldx,oldy);
  oldx=x
  oldy=y
  ctx.lineTo(x,y)
  ctx.stroke()
  console.log("mouse at x: " + x + " y: " + y);
  
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, 4, 0, 2 * Math.PI);
  ctx.fill();
 // ctx.beginPath()
 // ctx.lineTo(x,y)
}
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("wheel", function(e) {
  //changeRadius(canvas, e);
});

canvas.addEventListener("mousedown", function(e) {
  getCursorPosition(canvas, e);
});

function keyPress(code){
  console.log(code);
  if(code == 37){
    console.log("LEFT")
    playerX=playerX-50;
  }
   if(code == 39){
    console.log("RIGHT")
     playerX=playerX+50;
  }
   if(code == 38){
    console.log("UP")
  }
   if(code == 40){
    console.log("DOWN")
  }
}
addEventListener("keydown", e => keyPress(e.keyCode));
function drawGrid(){
  for(var i = 0;i<10;i++){
    ctx.moveTo(0,i*50);
    ctx.lineTo(500,i*50);
    ctx.stroke();
    ctx.moveTo(i*50,0);
    ctx.lineTo(i*50,500);
    ctx.stroke();
  }
}
function drawPlayer(x,y){
  ctx.fillStyle="red";
  ctx.fillRect(x,y,50,50);
}
var playerX = 0;
var playerY = 0;

drawGrid()
drawPlayer(playerX,playerY);