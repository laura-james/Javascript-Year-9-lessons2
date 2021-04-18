function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  ctx.lineWidth=10;
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
  ctx.moveTo(10, 10);
  ctx.lineTo(300, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 150, 80);
}
