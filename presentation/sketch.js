/* 
	final project pitch
*/


var currentSlide = 0;
var numberOfSlides = 3;
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

	var title; // title of the slide
	var description;

	// set up each slide
	if (currentSlide ==0) {
		title = "My Final Project";
		description = "A simulation game based on the self-portrait project.The user will be able to interact with the character by having a conversation with them.";
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