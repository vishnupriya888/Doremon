function setup() {
  createCanvas(400, 400);
}

function draw() {
   background("lightgreen");
  noStroke();
  fill("lightblue");
  triangle(120,190,90,340,300,340);
  triangle(90, 340, 300, 340,280,190);
  ellipse(200, 120, 250, 200);
  fill("white");
  ellipse(202,240,150,100);
  ellipse(200, 150, 200, 135);
  ellipse(180, 100, 60, 60);
  ellipse(220, 100, 60, 60);
  fill("black");
  ellipse(180, 100, 30, 30);
  ellipse(220, 100, 30, 30);
  fill("red");
  ellipse(200, 130, 20, 20);
  stroke("black");
  strokeWeight(3);
  line(200,140, 200, 200);
  noFill();
  arc(200,150, 100, 100, 20, 90);
  line(230, 140, 270, 130);
  line(230, 150, 270, 150);
  line(230, 160, 270, 170);
  line(170, 140, 130, 130);
  line(170, 150, 130, 150);
  line(170, 160, 130, 170);
  noStroke();
  fill("white");
  ellipse(120, 320, 90, 90);
  ellipse(300, 320, 90, 90);
  fill("lightblue");
  triangle(120,200, 65, 230, 110, 250);
  triangle(280,200, 330, 230, 280, 250);
  fill("white");
  ellipse(60, 230, 40, 40);
  ellipse(330, 230, 40, 40);
  stroke("red");
  strokeWeight(10);
  arc(200, 200, 155, 30,0, 90);
  arc(200, 200, 155, 30,90,110);
  noStroke();
  fill("yellow");
  ellipse(200, 230, 40, 40);
  stroke("black");
  strokeWeight(12);
  point(200, 240);
  strokeWeight(2);
  line(185, 220, 215, 220);
  line(183, 225, 218, 225);
}