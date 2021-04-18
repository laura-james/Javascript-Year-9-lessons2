function drawemoji() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  //styles
  ctx.lineWidth = 10;
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "green";
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
  ctx.fillStyle = "red";
  ctx.fillRect(70, 130, 60, 10);
  
  //a red semi circle
  ctx.beginPath();
  //ctx.fillStyle = "yellow";
  ctx.arc(65, 75, 20, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(145, 75, 20, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function draw(){
  var ctx = document.getElementById("mycanvas").getContext("2d");
   //a red rectangle  
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, 100);
}
draw();
