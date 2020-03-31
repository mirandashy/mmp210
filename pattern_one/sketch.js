
// loop repeats something
for (let i = 100; i >= 1; i--) {
	console.log('i', i); 
}

/*loop example
	3.25.2020
*/

function setup()  {
	createCanvas (640,360);
	frameRate(3);
}

function draw() {
	background ("white");

	strokeWeight (4);
	stroke('red');


	for (let x = 100; x <= width; x += 120) {

		let y = random(30,320);
		line(x, y-20, x, y+200); //body

		line(x, y+50, x+30, y+20); //first right
		line(x, y+40, x+30, y+10);
		line(x, y+30, x+30, y);

		line(x, y+200, x+10, y+185) //tip right

		line(x-30, y+20, x, y+50) //first left
		line(x-30, y+10, x, y+40);
		line(x-30, y, x, y+30);

		line(x-10, y+185, x, y+200); //tip left

	}
	

	
	for (let x = 50; x <= width; x += 120) {
		
		let y = random(30,300);
		line(x, y-180, x, y);


		line(x, y-10, x-30, y+20); //left
		line(x, y-20, x-30, y+10);
		line(x, y-30, x-30, y);


		line(x, y-180, x+10, y-165);// tip right

		line(x, y-10, x+30, y+20) //first left
		line(x, y-20, x+30, y+10);
		line(x, y-30, x+30, y);

		line(x-10, y-165, x, y-180); //tip left

	}
}