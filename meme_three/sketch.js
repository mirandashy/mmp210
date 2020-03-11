/* meme versione three
	03/11/2020
*/


// global scope
var imageOne;
var imageTwo;
var imageThree;
var imageFour;

var counter = 0;
var instruction = "when you";
var x;
var y;

function preload() {
	imageOne = loadImage("clown_one.jpg");
	imageTwo = loadImage("clown_two.jpg");
	imageThree= loadImage("clown_three.jpg");
	imageFour = loadImage("clown_four.jpg");
} 


function setup () {
	var canvas= createCanvas(1000, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
	
}



function draw () {
	background('grey');


		if (mouseX < width/2 && mouseY < height/2) {
			image(imageOne, 0, 0 , width/2, height/2);
	} 	else if (mouseX > width/2 && mouseY < height/2) {
			image (imageTwo, width/2, 0, width/2, height/2);
	} 	else if (mouseX < width/2 && mouseY > height/2) {
			image(imageThree, 0, height/2, width/2 , height/2);

			
	} 	else {
			image(imageFour, width/2, height/2, width/2, height/2);
	}

		if (mouseX < width/2 && mouseY < height/2) {
			text ('when you keep telling yourself', 80, 10,20);
	} 	else if (mouseX > width/2 && mouseY < height/2) {
			text ('to work on your portfolio', 580, 10, 20);
	} 	else if (mouseX < width/2 && mouseY > height/2) {
			text ('but every tomorrow', 400, 270, 40);
	}	else {
			text ('is a new one', 540 ,270, 40);
	}


	textSize(100);

	textFont('Lacquer')

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	fill("black");
}

