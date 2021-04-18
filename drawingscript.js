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
  
  //a greenline
ctx.lineWidth = 5;  
  ctx.moveTo(90, 90);
  ctx.lineTo(100, 120);
  ctx.lineTo(110, 90);
  
  ctx.stroke();
}







function drawbasic(){
  var ctx = document.getElementById("mycanvas").getContext("2d");
   //a red rectangle  
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, 100);
  ctx.lineWidth = 5;
  
  ctx.strokeStyle = "green";
  ctx.moveTo(10, 10);
  ctx.lineTo(160, 110);
  ctx.moveTo(160, 10);
  ctx.lineTo(10, 110);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "orange";
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
draw();


























