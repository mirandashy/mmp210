/* 
	final project 
*/

var currentSlide = 2;
var numberOfSlides = 7;

var nextSlideX = 300;
var nextSlideY = 200;
var nextSlideW = 400;
var nextSlideH = 420;

var firstOptionX = 100;
var firstOptionY = 200;
var firstOptionW = 400;
var firstOptionH = 100;

var secondOptionX = 540;
var secondOptionY = 200;
var secondOptionW = 300;
var secondOptionH = 100;



function setup() {
	createCanvas(960,720);
}

function draw() {
	background("black");

	var instruction;
	var conversation;


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



		if (currentSlide == 0) { 

			instruction = 'Awake the kid by clicking on him';

			
			var x = 320;
			var y = 180;

			translate(width/13, height/2.8);
			scale(1.3);

		
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




	} else if (currentSlide == 1) {


			conversation = " Oh hi, I didn't see you there. How are you?";


				textSize(30);
				fill("white");
				noStroke();
				textFont('Share Tech Mono');
				text("I'm fine", 200, 180);
				text("Could be better", 700, 180);


			

			var x = 320;
			var y = 180;

		
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
			
 

 			if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW && 
				mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
				if (currentSlide = 1) {

				strokeWeight(4);
				stroke("white");
				line(40, -30, 150, -30);
					
			}
			

		}

		if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW && 
		mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
			if (currentSlide = 1) {

			
				strokeWeight(4);
				stroke("white");
				line(380, -30, 580, -30);
			}
			

		}




	} else if (currentSlide == 2) {
 		
		var x = 320;
		var y = 180;
	
		conversation = "Wanna vibe with me?";

			textSize(40);
			fill("white");
			noStroke();
			textFont('Share Tech Mono');
			text("Yes", 200, 180);
			text("No", 700, 180);
			

		
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


		if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW && 
				mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
				if (currentSlide = 1) {

					strokeWeight(4);
					stroke("white");
					line(40, -30, 150, -30);
					
				}
			

		}

		if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW && 
		mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
			if (currentSlide = 1) {

			
					strokeWeight(4);
					stroke("white");
					line(380, -30, 580, -30);
			}
		}
			
	} else {
		background('black');
	}


	textSize(30);
	fill("white");
	noStroke();
	textAlign (CENTER, TOP);
	textFont('Share Tech Mono');
	text(conversation, 320, 100, 500, 500);

	textSize(40);
	fill("white");
	noStroke();
	textAlign (CENTER);
	textFont('Share Tech Mono');
	text(instruction, 320, 100, 500, 500);
}

function mousePressed() {

	if (currentSlide = 0) {
		if (mouseX > nextSlideX && mouseX < nextSlideX + nextSlideW &&
		    mouseY > nextSlideY && mouseY < nextSlideY + nextSlideH) {
			currentSlide = 1;
		
		} else {
			currentSlide = 0;
		}
	}


	if (currentSlide = 1) {
		if (mouseX > firstOptionX && mouseX < firstOptionX + firstOptionW &&
			mouseY > firstOptionY && mouseY < firstOptionY + firstOptionH) {
			currentSlide = 2;

		} else if (mouseX > secondOptionX && mouseX < secondOptionX + secondOptionW &&
				   mouseY > secondOptionY && mouseY < secondOptionY + secondOptionH) {
					currentSlide = 2;

		} else {
			currentSlide = 1;
		}
	}
		

}
