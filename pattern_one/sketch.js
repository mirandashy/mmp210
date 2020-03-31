
// loop repeats something
for (let i = 100; i >= 1; i--) {
	console.log('i', i); 
}

/*loop example
	3.25.2020
*/

function setup()  {
	createCanvas (640,360);
}

function draw() {
	background ("white");

	strokeWeight (4);
	stroke('red');


	for (let x = 100; x <= width; x += 120) {
		line(x, 50, x, 230); //body

		line(x, 80, x+30, 50); //first right
		line(x, 70, x+30, 40);
		line(x, 60, x+30, 30);

		line(x, 230, x+10, 215) //tip right

		line(x-30, 50, x, 80) //first left
		line(x-30, 40, x, 70);
		line(x-30, 30, x, 60);

		line(x-10, 215, x, 230); //tip left

	}
	

	
	for (let x = 50; x <= width; x += 120) {
		line(x, 120, x, 300);

		line(x, 290, x-30, 320); //left
		line(x, 280, x-30, 310);
		line(x, 270, x-30, 300);


		line(x, 120, x+10, 135);// tip right

		line(x, 290, x+30, 320) //first left
		line(x, 280, x+30, 310);
		line(x, 270, x+30, 300);

		line(x-10, 135, x, 120); //tip left

	}
}