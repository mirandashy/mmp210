/* 
	dom example
	4.1.2020
	*/

	var heightSlider;

	function setup() {
		createCanvas (640,360);

				
	
		heightSlider = createSlider(0, 360, 0, 10);
		heightSlider.input(pattern); 


		var saveButton = createButton("Save Image");
		saveButton.mousePressed(saveImage);

		pattern();

	}

	function saveImage() {
		save("pattern.png");

	}




	function pattern(){
		background(0);
			


		for (let x=70; x<= width; x+=120){

			noStroke();
			fill("yellow");
			ellipse(x, 100, 100);
			ellipse(x, 250, 100);

		}



		//arrow poiting down

		for (let x = 100; x <= width; x += 120) {

			push();
		strokeWeight (4);
		stroke("red");

		let y = random(30,320);

		rotate(heightSlider.value);
		line(x, y-20, x, y+200); //body

		line(x, y+50, x+30, y+20); //first right
		line(x, y+40, x+30, y+10);
		line(x, y+30, x+30, y);

		line(x, y+200, x+10, y+185) //tip right

		line(x-30, y+20, x, y+50) //first left
		line(x-30, y+10, x, y+40);
		line(x-30, y, x, y+30);

		line(x-10, y+185, x, y+200); //tip left
		pop();

	}
	
	//arrow pointing up
	
	for (let x = 50; x <= width; x += 120) {

			push();
		strokeWeight (4);
		stroke('black');
		
		let y = random(30,300);

		
		rotate(heightSlider.value);

		line(x, y-180, x, y);


		line(x, y-10, x-30, y+20); //left
		line(x, y-20, x-30, y+10);
		line(x, y-30, x-30, y);


		line(x, y-180, x+10, y-165);// tip right

		line(x, y-10, x+30, y+20) //first left
		line(x, y-20, x+30, y+10);
		line(x, y-30, x+30, y);

		line(x-10, y-165, x, y-180); //tip left
		pop();

	}

	}