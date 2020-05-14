/* 
	final project pitch
*/


var currentSlide = 0;
var numberOfSlides = 7;
var img;

// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

//previous slide buttom
var prevButtonX = nextButtonX;
var prevButtonY = 640;
var prevButtonW = nextButtonW;
var prevButtonH = nextButtonH;

function preload() {
	img = loadImage("pitch.png");
}

function setup(){
	createCanvas(960,720);
}

function draw(){
	background("black");


	stroke(149, 50, 168);
	strokeWeight(90);
	line(0, 720, 960, 720);

	stroke(117, 50, 168);
	strokeWeight(90);
	line(0, 630, 960, 630);

	stroke(81, 50, 168);
	strokeWeight(180);
	line(0, 540, 960, 540);

	stroke(58, 50, 168);
	strokeWeight(180);
	line(0, 360, 960, 360);

	stroke(29, 22, 122);
	strokeWeight(540);
	line(0, 0, 960, 0);



		for (let x = 0; x <= width; x += 50) {
			for (let y = 0; y <= height; y += 50) {
	stroke("white");
	strokeWeight(2);
	point(x, y);
			}
	
		}
	

	var title; // title of the slide
	var description;

	// set up each slide
	if (currentSlide ==0) {

		translate(width/13, height/2.8);
		scale(1.3);

		var x = 320;
		var y = 180;
		//title = "My Final Project";
		
		//description = "A simulation game based on the self-portrait project.The user will be able to interact with the character by having a conversation with them.";
		fill(255, 250, 98);
 		stroke('red');
 		strokeWeight(4);
		ellipse(x, y, 200); // face
		arc(x - 30, y - 20, 35, 35, 0, -PI, PI); //left eye
		noFill();
		arc(x - 37, y - 15, 35, 35, HALF_PI, PI); //left eyebag

		noFill();
		arc(x + 30, y - 20, 35, 35, 0, -PI, PI); // right eye
	
		strokeWeight(4)
		fill(255, 250,98)
		arc(x - 96, y, 25, 40, HALF_PI, -HALF_PI) //left ear


		fill(255, 250, 98)
		arc(x + 96, y , 25, 40, -HALF_PI, HALF_PI) // right ear

		rectMode(CENTER);
		line(x - 8, y + 25, x + 12, y + 25) //mouth
		strokeWeight(5)
		line(270, 140, 305, 140) //left eyebrown
		line(333, 140, 368, 140) //right eyebrown
  

		//arrow 
		stroke('red');
		strokeWeight(4);
		line(x + 30, 50, x + 30, 230);

		line(x, y - 130, x + 30, y - 100); //first from down line on the left
		line(x, y - 140, x + 30, y - 110); //second
		line(x, y - 150, x + 30, y - 120); //third
		line(x + 20, y + 35, x + 30, y + 50) // line on the tip
	
		line(x + 60, y - 130, x + 30, y - 100); //first from down line on the right
		line(x + 60, y - 140, x + 30, y - 110); //second
		line(x + 60, y - 150, x + 30, y - 120); //third
		line(x + 40, y + 35, x + 30, y + 50) //line on the tip

		//body
		fill('red');
		triangle(x, y + 101, x - 120, y + 180 , x + 120, y + 180);




	}else if (currentSlide == 1) {
		title = "User Interaction";
		description = "User will be able to answer by choosing between the options given on the simulation.";
	} else if (currentSlide == 2){
		title = "Graphics";
		description = "The graphics will use p5 shapes and colors.";

		// example graphic
		image(img, 200, 300);


	}

	// display title
	textSize(100);
	fill(255, 179, 0);
	noStroke();
	textAlign(LEFT, TOP);
	text(title, 20, 20);

	//display description
	textSize(40);
	fill("white");
	textAlign (LEFT, TOP);
	text(description, 150, 150, 700);

	//slide button

	// button background design
	fill(255, 179, 0);
	stroke("white");
	strokeWeight(3);

	if (currentSlide < numberOfSlides -1) {
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);  // next button
	}

	if (currentSlide > 0) {
		rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}

	

	// text design
	fill('white');
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);

	if (currentSlide < numberOfSlides - 1) {
		text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	}
	if (currentSlide > 0) {
		text("Prev", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}
	

}

function mousePressed() {
	// detecting mouse collision with the next button
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW && 
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if (currentSlide < numberOfSlides - 1) {
			currentSlide++;
		}
		
	}

	//decting mouse collision with prev button
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if (currentSlide > 0) {
			currentSlide--;
		}
		 

	}
}