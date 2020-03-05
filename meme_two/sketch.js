/* meme versione two
	03/03/2020
*/


// global scope
var imageOne;
var imageTwo;
var imageThree;
var imageFour;

var counter = 0;
var instruction = "when yout";
var x;
var y;

function preload() {
	imageOne = loadImage("clown_one.jpg");
	imageTwo = loadImage("clown_two.jpg");
	imageThree= loadImage("clown_three.jpg");
	imageFour = loadImage("clown_four.jpg");
} 


function setup () {
	var canvas= createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
	
}

//function mousePressed () {
	//counter++;
	//if (counter == 3) {
	//	counter == 0;
	//}

	if (mouseX > width/2 && mouseY > height/2) {
		instruction = 'when you tell yourself to start your portfolio';
		y = 50;
	} else if (mouseX > width/2 && mouseY< height/2){
		instruction = "but you keep procastinating";
		x = 50;
	} else if (mouseX< width/2 && mouseY <height/2) {
		instruction ='and procastinating';
		y = height - 100;
	}
//}

function draw () {
	background('grey');

	// draw the image
	//image(imageOne, 0, 70, 512, 384); 
	if (mouseX > width/2 && mouseY > height/2) {
		image(imageOne, width/2, height/2 , width, height);
	} else if (mouseX < width/2 && mouseY > height/2) {
		image (imageTwo, 0, height/2, width/2, height);
	} else if (mouseX > width/2 && mouseY < height/2) {
		image(imageThree, width/2, 0, width , height/2);
	} else {
		image(imageFour, 0, 0, width/2, height/2);
	}

	//image(catImage, 300, 100, 300,300); 

	//var imageColor= get(mouseX, mouseY);
	//fill (imageColor);
	//noStroke();
	//rect(mouseX, mouseY, 50, 50);

	//tint (255, 0, 100);
	textSize(100);
	//fill("blue");
	//stroke("plum");
	//strokeWeight(5);
	//textStyle(ITALIC);
	textFont('Lacquer')
	//textAlign(LEFT, TOP);

	//var hello = "Hello World";
	//var length = hello.lenght;
	//var n = map(mouseX, 0, 500, 0, 10);

	//var displayString = hello.substring(0, n);
	//text(displayString, 250, height/2);
	//var s= mouseX;
	//textSize(s);

	//var leadingSize = mouseY;
	//textLeading(leadingSize);
	//text(hello, 20, 20, 400, 400);
	//var n = map(frameCount, 100, 400, 0, hello.length);
	//text (hello.charAt(n), 0, 250);

	
	//var cat_one = "aa";
	//var cat_two = "bb";
	//if (mouseIsPressed) {
		//text (cat_one, 270,80,200);

	//} else {
		//text (cat_two, 270, 80, 200);
	//}
	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	fill("white");

	text (instruction, x, y, 100);
	//var welcome = "When life becomes to hard to handle";
	//var end= map(frameCount, 0, 200, 0, welcome.length);
	//text (welcome.substring (0, end), 270, 80, 200);
}

