"use strict";

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Create the heart geometry

var heartShape = new THREE.Shape();
heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, -30, -50, -30, -50, 0);
heartShape.bezierCurveTo(-50, 30, 0, 30, 0, 0);
heartShape.bezierCurveTo(0, -30, 50, -30, 50, 0);
heartShape.bezierCurveTo(50, 30, 0, 30, 0, 0); // Create the heart material

var heartMaterial = new THREE.PointsMaterial({
  size: 0.5,
  color: 0xff69b4
}); // Create the heart mesh

var heartGeometry = new THREE.ShapeGeometry(heartShape);
var heartMesh = new THREE.Points(heartGeometry, heartMaterial);
scene.add(heartMesh); // Set up the animation loop

function animate() {
  requestAnimationFrame(animate); // Bounce the heart up and down

  var time = Date.now() * 0.001;
  var position = heartMesh.geometry.attributes.position;

  for (var i = 0; i < position.count; i++) {
    var y = position.getY(i);
    position.setY(i, Math.sin(time + i * 0.1) * 10 + y);
  }

  position.needsUpdate = true; // Render the scene

  renderer.render(scene, camera);
}

animate();