function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  //styles
  ctx.lineWidth = 10;
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "cyan";
  //a greenline
  //ctx.moveTo(0, 0);
  //ctx.lineTo(200, 100);
  //ctx.stroke();
  //a yellow circle with a green outline
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 100, 90, 0, 2 * Math.PI);
  //ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //a red rectangle
  ctx.fillStyle = "cyan";
  //ctx.fillRect(55, 130, 90, 40);
  //ctx.strokeRect(55, 130, 90, 40);

  //a red semi circle
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,45,56,0.9)";
  ctx.arc(60, 75, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(145, 75, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(100, 135, 20, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "blue";
  // ctx.ellipse(100, 100, 50, 75, 0, 0, 2* Math.PI);
  ctx.stroke();
  ctx.fill();

  //a greenline
  ctx.lineWidth = 5;
  ctx.moveTo(90, 90);
  ctx.lineTo(100, 120);
  ctx.lineTo(110, 90);

  ctx.stroke();
}

function drawbasic() {
  var ctx = document.getElementById("gridcanvas").getContext("2d");
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      ctx.fillStyle = "rgb(255,123,66)";
      ctx.fillRect(i * 50, j * 50, 30, 30);
    } //end j for loop
  } //end i for loop
}
//drawbasic()
var i = 0;
function randCircle() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 50);
  var blue = Math.floor(Math.random() * 100);
  ctx.fillStyle = "rgba(" + red + "," + green + "," + blue + ",0.4)";
  ctx.strokeStyle = "orange";
  ctx.beginPath();
  var r1 = Math.floor(Math.random() * 200);
  var r2 = Math.floor(Math.random() * 200);
  var radius = Math.floor(Math.random() * 20);
  var radius2 = Math.floor(Math.random() * 20);
  //ctx.arc(r1, r2, radius, 0, 2 * Math.PI);
  ctx.ellipse(r1, r2, radius, radius2, 1.2, 0, 2 * Math.PI);
  ctx.fill();
  //ctx.stroke();
}
//setInterval(draw, 50);

function drawGrid() {
  var ctx = document.getElementById("mycanvas2").getContext("2d");

  for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
      //ctx.fillStyle = "magenta";
      ctx.fillStyle = "rgb(255," + i * 25 + "," + j * 25 + ")";

      ctx.fillRect(i * 40, j * 40, 20, 20);
    } //end j for loop
  } //end i for loop
}
//drawGrid();
var height = 400;
function drawLinesOLD() {
  height = height - 2;
  if (height < -400) {
    height = 400;
  }
  var ctx = document.getElementById("mycanvas2").getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, 400, 400);
  // ctx.beginPath();
  for (var i = 0; i < 41; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 10, 400 - height);
    ctx.lineTo(200, 200);

    ctx.stroke();
  }

  for (var i = 0; i < 41; i++) {
    //   ctx.beginPath();
    ctx.moveTo(i * 10, height);
    ctx.lineTo(200, 200);

    ctx.stroke();
  }
}

function drawLines() {
  var ctx = document.getElementById("mycanvas2").getContext("2d");
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      ctx.fillStyle = "rgb(255," + i * 25 + "," + j * 25 + ")";
      ctx.fillRect(i * 40, j * 45, 15, 20);
    } //end j for loop
  } //end i for loop
  ctx.beginPath();
  ctx.strokeStyle = "cyan";
  for (var i = 0; i < 41; i++) {
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }
  for (var i = 0; i < 41; i++) {
    ctx.moveTo(i * 10, 400);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }
}
drawLines();
var radius = 10
function drawRandom() {
  var ctx = document.getElementById("mycanvas3").getContext("2d");
  var red = Math.floor(Math.random() * 20);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  //var radius = Math.floor(Math.random() * 20);
  var x = Math.floor(Math.random() * 400);
  var y = Math.floor(Math.random() * 400);
  var x2 = Math.floor(Math.random() * 400);
  var x3 = Math.floor(Math.random() * 400);
  var y2 = Math.floor(Math.random() * 400);
  var y3 = Math.floor(Math.random() * 400);
  ctx.beginPath();
  ctx.fillStyle = "rgb(" + red + "," + blue + "," + green + ",0.6)";
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
ctx.moveTo(200, 200);
ctx.quadraticCurveTo(x,y, x2,y2);
ctx.stroke();
}
//drawRandom()
setInterval(drawRandom, 100);

function changeRadius(canvas, event){
  console.log(event.deltaY)
  if (event.deltaY>0){
    radius= radius+1
  }else{
    radius= radius-1
  }
  console.log(radius)
}

var canvas = document.getElementById("mycanvas3");
canvas.addEventListener("wheel", function(e) {
  changeRadius(canvas, e);
});



function getCursorPosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  console.log("mouse at x: " + x + " y: " + y);
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
}
canvas.addEventListener("mousedown", function(e) {
  getCursorPosition(canvas, e);
});


