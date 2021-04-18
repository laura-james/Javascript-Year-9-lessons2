function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  //styles
  ctx.lineWidth = 10;
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "green";
  //a greenline
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
  //a yellow circle with a green outline
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 100, 90, 0, 2 * Math.PI);
  //ctx.closePath();
  ctx.fill();
  ctx.stroke();
   //a red rectangle  
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 150, 80);
  
  //a red semi circle
  ctx.beginPath();
  //ctx.fillStyle = "yellow";
  ctx.arc(50, 75, 50, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.fill();
}
draw();
