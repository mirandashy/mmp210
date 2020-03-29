/*
	 meme version 4
	 transformation + animation
	 03/21/2020
*/

	// global scope
	var clown_four;
	var phrase= "when you look at yourself in the mirror after spending the whole day procastinating";
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
	//var r = frameCount * PI /70;

	push();
	fill ("black");
	textSize(30);
	textFont('Luckiest Guy');
	var end= map(frameCount, 0, 600, 0, phrase.length);
	text (phrase.substring (0, end), 250, 200, 500);
	pop();



	translate (width/2, height/2);
	textSize(100);

	push();
	var r = frameCount *PI/70;
	shearX(r);
	fill("white");
	stroke("red");
	strokeWeight(3);
	text('you are',-150, -150);
	pop();


	push();
	shearX(r);
	var r = frameCount / PI*2;
	fill('red');
	stroke("white");
	strokeWeight(3);
	text('a clown', 150, 150);
	pop();
}