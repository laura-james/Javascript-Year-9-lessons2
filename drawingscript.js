function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
  ctx.moveTo(10, 10);
  ctx.lineTo(200, 100);
  ctx.stroke();
}
