/* meme versione one
	02/25/2020
*/


function setup () {
	var canvas= createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 1;
	
}

function draw () {
	background('grey');

	textSize(100);
	//fill("blue");
	//stroke("plum");
	//strokeWeight(5);
	//textStyle(ITALIC);
	textFont('Brush Script MT')
	//textAlign(LEFT, TOP);

	var hello = "Hello World";
	var length = hello.lenght;
	var n = map(mouseX, 0, 500, 0, 10);

	var displayString = hello.substring(0, n);
	text(displayString, 250, height/2);
	//var s= mouseX;
	//textSize(s);

	//var leadingSize = mouseY;
	//textLeading(leadingSize);
	//text(hello, 20, 20, 400, 400);
	//var n = map(frameCount, 100, 400, 0, hello.length);
	//text (hello.charAt(n), 0, 250);
	

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);


	var welcome = "Welcome to my website";
	var end= map(frameCount, 0, 200, 0, welcome.length);
	text (welcome.substring (0, end), 250, 350);
}

