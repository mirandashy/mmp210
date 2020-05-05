/* 
	sound example 

*/


//global sound variables
var sunsetSound;
var sunriseSound;

function preload () {
	sunsetSound = loadSound("sunset.wav");
	sunriseSound = loadSound("sunrise.mp3");
}

function setup() {
	createCanvas(640,360);
	sunsetSound.playMode("restart");
}

function draw () {
	if (sunriseSound.isPlaying()){
		background ('red');
	} else { 
		background("yellow");
		} 
}

function mousePressed() {
	sunsetSound.play();

	if (sunriseSound.isPlaying()) {
		sunriseSound.pause();

	} else {
		sunriseSound.play(); 
	}
}



