/*
	 meme version 4
	 transformation + animation
	 03/21/2020
*/

	// global scope
	var clown_four;
	var phrase= "when you look at yourself in the mirror after spending a whole day of procastination";
	var procastination= "procastination procastination procastination procastination procastination procastination procastination procastination procastination";
	var s = 1; //scale for image
	var speed= 0.01; //speed of the scale 

function preload(){
	clown_four = loadImage("clown_four.jpg");
}

function setup () {
	createCanvas(1000,500);
}

function draw(){
	background (0);

	// mmp210 text style
	fill("white");
	textSize(50);
	textAlign(CENTER, CENTER);




	push();
		// first tranformation
	translate (width/2, height/2);
	scale(s);
	s+=speed;

	imageMode(CENTER);
	image(clown_four, 0,0);
	if (s>5 || s<1) {
		speed *= -1;
	}


	pop();

	// calculate rotation angle
	var r = frameCount * PI /70;

	push();
	//shearY(r);
	//text(procastination, 0, 0);
	translate (50, 50); 
	fill ("black");
	textSize(30);
	var end= map(frameCount, 0, 200, 0, phrase.length);
	text (phrase.substring (0, end), 0, 200, 500);
	pop();

	shearY(r);
	translate (300, height/2);
	fill("black");
	var end= map(frameCount, 0, 200, 0, procastination.length);
	text (procastination.substring (0, end), 0, 10, 50);
}