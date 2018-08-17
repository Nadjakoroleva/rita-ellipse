let x = 0;
let y = 0;
let d = 0;
let r = 0;
let b = 0;
let g = 0;

function setup() {
  createCanvas(1000, 1000);
  x = random(100, 900);
  y = random(100, 900);
  d = random(100, 900);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function draw() {
  //background(b, r, g);
  fill(r, g, b);
  ellipse(x, y, d, d);
  x = random(100, 900);
  y = random(100, 900);
  d = random(100, 900);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  // delay(4000);
}
