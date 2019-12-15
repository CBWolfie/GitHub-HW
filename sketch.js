function setup() {
  createCanvas(700, 600);
  background(30);
}

function draw() {

	colorMode(RGB, 799, 766, 260, 45);

	fill(50, 66, 50);

	noStroke();

	ellipse(170, 80, 480, 700);

	colorMode(RGB, 700, 600, 265, 50);

	fill(50, 66, 50);

	noStroke();

	ellipse(170, 60, 440, 600);

	colorMode(RGB, 600, 555, 231, 50);

	fill(50, 66, 50);

	noStroke();

	ellipse(170, 40, 400, 500);
 
 	colorMode(RGB, 250, 250, 250, 50);
 	
 	fill(250, 250, 250);

 	quad(90, 120, 80, 90, 90, 99, 120, 90);

 	triangle(600, 70, 300, 200, 186, 175);

 	triangle(500, 120, 233, 299, 300, 375);


 	colorMode(RGB, 100, 300, 1000, 400); 

 	fill(400, 660, 500);

 	noStroke();

 	ellipse(600, 550, 490, 560); 

 	colorMode(RGB, 160, 250, 1200, 350);

 	fill(400, 660, 500);

 	noStroke();

 	ellipse(620, 590, 470, 555);

 	colorMode(RGB, 160, 250, 1500, 350);

 	fill(400, 660, 500);

 	noStroke();

 	ellipse(650, 610, 450, 540);

 	arc(150, 150, 170, 40, 0, PI + QUARTER_PI)

 	colorMode(RGB, 250, 250, 250, 50);
 	
 	fill(250, 250, 250);

 	quad(400, 411, 400, 400, 50, 52, 53, 50);;
 }