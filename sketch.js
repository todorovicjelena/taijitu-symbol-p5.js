angle = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {

  clear();
  translate(width/2, height/2);
  scale(0.60);
  rotate(angle);


  fill(255);
  arc(0, 0, width, height, 0, PI);
  fill(0);
  arc(0, 0, width, height, PI, TWO_PI);
  fill(255);
  ellipse(width/4, 0, width/2, height/2);
  fill(0);
  ellipse(-width/4, 0, width/2, height/2);
  fill(255);
  ellipse(-width/4, 0, width/8, height/8);
  fill(0);
  ellipse(width/4, 0, width/8, height/8);
  
  angle -= 0.01;
}