function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  ctx.lineWidth=10;
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.fill();
  ctx.moveTo(10, 10);
  ctx.lineTo(300, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 100, 90, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 150, 80);
}
draw()