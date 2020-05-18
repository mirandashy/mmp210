/* 
	final project
*/


var currentSlide = 2;
var numberOfSlides = 7;

// next slide button
var nextButtonX = 300;
var nextButtonY = 200;
var nextButtonW = 300;
var nextButtonH = 300;

var firstOptionX = 100;
var firstOptionY = 200;
var firstOptionW = 100;
var firstOptionH = 100;

var secondOptionX = 540;
var secondOptionY = 200;
var secondOptionW = 200;
var secondOptionH = 100;

function preload() {
	nightSound = loadSound("night_sound.wav");
	img = loadImage("pitch.png");

}

function setup(){
	createCanvas(960,720);
}

function draw(){
	background("black");

	var conversation; // conversation
	var description; // instruction

	// night sky
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


	// stars
		for (let x = 0; x <= width; x += 50) {
			for (let y = 0; y <= height; y += 50) {
				stroke("white");
				strokeWeight(2);
				point(x, y);
			}
	
		}

	

	// set up each slide
	if (currentSlide == 0) { 

		description = "Awake the kid by clicking on him";

		push();

			translate(width/13, height/2.8);
			scale(1.3);

		var x = 320;
		var y = 180;
		
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

		fill("red");
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);

		//title = 'click the kid to wake him up';

		pop();



	} else if (currentSlide == 1) {
 		
		var x = 320;
		var y = 180;
	
		conversation = "Oh hi, I didn't see you there. How are you?";
		

		push();
			translate(width/13, height/2.8);
			scale(1.3);

		fill(255, 250, 98);
 		stroke('red');
 		strokeWeight(4);
		ellipse(x, y, 200); // face

		fill("white");
		ellipse(x - 30, y - 20, 30);
		
		noFill();
		arc(x - 35, y - 15, 35, 35, HALF_PI, PI); //left eyebag

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

		pop();

		textSize(40);
		fill("white");
		textFont('Share Tech Mono');
		text("I'm fine", 740, 230);
		text("Could be better", 260, 230);

		if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW && 
		mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
			if (currentSlide = 1) {

				push()
				strokeWeight(4);
				line(90, 285, 430, 285);
				stroke("white");
				pop();
			}
			

		}



		if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW && 
		mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
			if (currentSlide = 1) {

				push()
				strokeWeight(4);
				line(650, 285, 830, 285);
				stroke("white");
				pop();
			}
			

		}


	} else if (currentSlide == 2) {
 		
		var x = 320;
		var y = 180;
	
		conversation = "Wanna vibe with me?";

		push();
			translate(width/13, height/2.8);
			scale(1.3);

		fill(255, 250, 98);
 		stroke('red');
 		strokeWeight(4);
		ellipse(x, y, 200); // face

		fill("white");
		ellipse(x - 30, y - 20, 30);
		
		noFill();
		arc(x - 35, y - 15, 35, 35, HALF_PI, PI); //left eyebag

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

		pop();

		textSize(40);
		fill("white");
		textFont('Share Tech Mono');
		text("No", 740, 230);
		text("Yes", 260, 230);

		if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW && 
		mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
			if (currentSlide = 1) {

			push()
			strokeWeight(4);
			line(90, 285, 430, 285);
			stroke("white");
			pop();
			}
			

		}



		if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW && 
		mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
			if (currentSlide = 1) {

				push()
				strokeWeight(4);
				line(650, 285, 830, 285);
				stroke("white");
				pop();
			
			}	

		}


	}

	// display title
	
	textSize(50);
	fill("white");
	textAlign (CENTER, TOP);
	textFont('Share Tech Mono');
	text(conversation, 150, 50, 700);

	//var end = map(frameCount, 0 , 200, 0, conversation.length);
	//text(conversation.substring (0, end), 100, 100, 400);

	

	//display description
	textSize(40);
	fill("white");
	textAlign (CENTER, TOP);
	textFont('Share Tech Mono');
	//text(description, 150, 150, 700);

	var end= map(frameCount, 0, 200, 0, description.length);
	text (description.substring (0, end), 100, 100, 400);

}


function mousePressed() {

	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if (currentSlide = 0) {
			currentSlide = 1;
		}
	}
	
	 //from slide 1 to slide 2 (first option)
	if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW && 
		mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
		if (currentSlide = 1) {
			currentSlide = 2;
		}
		
	}

	//from slide 2 to 3 (second option)
	if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW &&
		mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
		if (currentSlide = 1) {
			currentSlide = 2;
		}
	}	
}