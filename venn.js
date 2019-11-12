var canvas = $("#canvas1")[0];
var context = canvas.getContext("2d");

var circle = {
  radius: 100,
  x: 160,
  y: 160
},
 otherCircle = {
   radius: 100,
   x: circle.x + 100,
   y: circle.y
 };

function union() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.strokeStyle = "black"
  context.stroke();
  context.fillStyle = "red";
  context.fill();

  context.beginPath();
  context.arc(otherCircle.x, otherCircle.y, otherCircle.radius, 0, 2 * Math.PI);
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "red";
  context.fill();

  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.strokeStyle = "black"
  context.stroke();
}

function intersection() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 0;
  context.fillStyle = "white"
  context.fill();
  context.closePath();
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.strokeStyle = "black"
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(otherCircle.x, otherCircle.y, circle.radius, 0, 2*Math.PI);
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context.stroke();

  context.globalCompositeOperation = "source-atop"
  context.beginPath();
  context.arc(otherCircle.x, otherCircle.y, otherCircle.radius, 0, 2 * Math.PI);
  context.closePath();
  context.fillStyle = "purple";
  context.fill();
  context.restore();
}

function leftOnly() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(circle.x, otherCircle.y, otherCircle.radius, 0, 2 * Math.PI);
  context.closePath();
  context.fillStyle = "blue";
  context.fill();

  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.strokeStyle = "black"
  context.stroke();
  context.closePath();

  context.globalCompositeOperation = "destination-out"
  context.beginPath();
  context.arc(otherCircle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 0;
  context.fillStyle = "red"
  context.fill();

  context.globalCompositeOperation = "source-over";
  context.beginPath();
  context.arc(otherCircle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.stroke()

  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.lineWidth = 1;
  context.stroke()
}

leftOnly();