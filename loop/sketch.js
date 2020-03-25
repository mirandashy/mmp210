
// loop repeats something
for (let i = 100; i >= 1; i--) {
	console.log('i', i); 
}

/*loop example
	3.25.2020
*/

function setup(){
	createCanvas (640,360);
}

function draw(){
	background ("white");

	for (let x = 0; x <= width; x +=100){

		fill('red');
		noStroke();
		rect(0, 0, width, height/6);

		fill ('red');
		ellipse (x, 110, 40);

		fill ('white');
		ellipse (x, 100, 50);


		fill ('black');
		ellipse (x, 90, 45);

		

		

	}

	for (let x = 0; x <= width; x +=80){

		fill('black');
		noStroke();
		rect(0, height/2, width, height/6);
	}

	for (let x = 0; x <= width; x +=80){

		fill('black');
		noStroke();
		rect(0, height, width, height/6);

		fill ('black');
		ellipse (x, 260, 40);

		fill ('white');
		ellipse (x, 250, 50);


		fill ('red');
		ellipse (x, 240, 45);

		

	}

}