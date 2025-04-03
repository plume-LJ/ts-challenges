"use strict";

// Set up the canvas element
var canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d"); // Set up the initial position and radius of the hearts

var x1 = canvas.width / 3;
var y1 = canvas.height / 2;
var radius1 = 100;
var t1 = 0;
var scale1 = 1;
var x2 = canvas.width * 2 / 3;
var y2 = canvas.height / 2;
var radius2 = 100;
var t2 = 0;
var scale2 = 1; // Run the main game loop

function draw() {
  // Update the position, radius, and scale of the first heart
  t1 += 0.05;
  x1 = canvas.width / 3 + 50 * (2 * Math.pow(Math.sin(t1), 3));
  y1 = canvas.height / 2 - 40 * (Math.cos(t1) - Math.pow(Math.sin(t1), 2));
  radius1 = 100 + 20 * Math.sin(t1);
  scale1 = 0.8 + 0.4 * Math.abs(Math.sin(t1)); // Update the position, radius, and scale of the second heart

  t2 += 0.05;
  x2 = canvas.width * 2 / 3 + 50 * (2 * Math.pow(Math.sin(t2), 3));
  y2 = canvas.height / 2 - 40 * (Math.cos(t2) - Math.pow(Math.sin(t2), 2));
  radius2 = 100 + 20 * Math.sin(t2);
  scale2 = 0.8 + 0.4 * Math.abs(Math.sin(t2)); // Clear the canvas

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Save the current state of the context

  ctx.save(); // Translate and scale the first heart

  ctx.translate(x1, y1);
  ctx.scale(scale1, scale1); // Draw the first heart

  var firstHeartGradient = ctx.createRadialGradient(0, radius1 / 4, 0, 0, radius1 / 4, radius1);
  firstHeartGradient.addColorStop(0, "#f8a5c2");
  firstHeartGradient.addColorStop(0.5, "#f87da3");
  firstHeartGradient.addColorStop(1, "#f8588e");
  ctx.fillStyle = firstHeartGradient;
  ctx.shadowColor = "rgba(255, 0, 0, 0.2)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.beginPath();
  ctx.moveTo(0, radius1 / 4);
  ctx.bezierCurveTo(radius1 / 2, -radius1 / 2, radius1, radius1 / 4, 0, radius1);
  ctx.bezierCurveTo(-radius1, radius1 / 4, -radius1 / 2, -radius1 / 2, 0, radius1 / 4);
  ctx.closePath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fill(); // Restore the context to its previous state

  ctx.restore(); // Save the current state of the context

  ctx.save(); // Translate and scale the second heart

  ctx.translate(x2, y2);
  ctx.scale(scale2, scale2); // Draw the second heart

  var secondHeartGradient = ctx.createRadialGradient(0, radius2 / 4, 0, 0, radius2 / 4, radius2);
  secondHeartGradient.addColorStop(0, "#ff7171");
  secondHeartGradient.addColorStop(0.5, "#ff2626");
  secondHeartGradient.addColorStop(1, "#ff0000");
  ctx.fillStyle = secondHeartGradient;
  ctx.shadowColor = "rgba(255, 0, 0, 0.2)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.beginPath();
  ctx.moveTo(0, radius2 / 4);
  ctx.bezierCurveTo(radius2 / 2, -radius2 / 2, radius2, radius2 / 4, 0, radius2);
  ctx.bezierCurveTo(-radius2, radius2 / 4, -radius2 / 2, -radius2 / 2, 0, radius2 / 4);
  ctx.closePath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fill(); // Restore the context to its previous state

  ctx.restore(); // Request the next frame

  requestAnimationFrame(draw);
} // Start the animation


requestAnimationFrame(draw);