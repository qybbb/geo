let offset = 0;

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  // Make a rectangle centred on the screen
  rectMode(CENTER);
}

// Render loop that draws shapes with p5
function draw() {
  background(random(255), random(255), random(255), random(255));
  // Set x-or / difference blend mode
  blendMode(DIFFERENCE);

  // Disable stroke
  // noStroke();

  // Center of screen
  let x = width / 2;
  let y = height / 2;

  // 1/2 the width or height (which ever is smallest)
  let size = min(width, height) / 2;

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  rect(0, 0, size, size);
  pop();

  fill(255);
  offset += 0.1;
  let xPos = offset * 100;
  let yPos = offset * 50;
  circle(width / 2, yPos + 150, 200);
  circle(xPos + 150, height / 2, 400);
  triangle(xPos,mouseX,mouseX+100,mouseX+100,mouseY+200,mouseY+200);
}
