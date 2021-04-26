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