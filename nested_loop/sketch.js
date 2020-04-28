/*
	nested loop example
	4/10/2020
*/
var bgSlider;
var redSlider;
var greenSlider;


function setup() {
	var canvas = createCanvas (500,500);
	canvas.parent("sketch");

	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);
	patternButton.position(-150,10);
	patternButton.parent("sketch");

	var saveButton = createButton("Save");
	saveButton.mousePressed(saveImage);
	saveButton.position(-150,50);
	saveButton.parent("sketch");

	createP("Background Color");
	bgSlider = createSlider(0, 255, 50);
	bgSlider.input(pattern);

	createP("Red Color");
	redSlider = createSlider(0, 255, 0);
	redSlider.input(pattern);

	createP("Green Color");
	greenSlider = createSlider(0, 128, 0);
	greenSlider.input(pattern);

	createP("Blue Color");
	blueSlider = createSlider(0, 205, 0);
	blueSlider.input(pattern);

	pattern();
}

function saveImage() {
	save("pattern.png")
}

function pattern () {
	background(bgSlider.value());

	var w = 60 // width of one cell
	var h = w; //height of one cell 




		


	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <=height; y += h) {
		push();
		translate (x, y);


		var r = redSlider.value(); //red
		var g = greenSlider.value(); //green
		var b = blueSlider.value(); //blue

		stroke(r, g, b);
		strokeWeight(1.5, 3);

		//stroke(r, g, b);
		line(0, 0, 0, 200); //body
		//stroke('white');
		line(30, 0, 30, 200); //body
		

		var randomChoice = random(3);
		if (randomChoice < 1) {


			//stroke("yellow");
			line(0, 50, 30, 20); //first right
			//stroke("white");
			line(0, 40, 30, 10);
			//stroke("yellow");
			line(0, 30, 30, 0);
			

		} else {


			line(-30, 20, 0, 50) //first left
			//stroke("white");
			line(-30, 10, 0, 40);
			//stroke("yellow");
			line(-30, 0, 0, 30);
			
		}
		pop();

			



		}
	}

	

}