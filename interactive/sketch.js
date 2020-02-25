/* self portrait
	by miranda
	2/06/2020
*/

// global scope (it's like a section, then each function has it's own)
var x = 320; //origin for face
var y = 180;
var s = 200; //size for face




function setup () {
	//setup scope
	createCanvas(640, 360);
	noCursor();
}

function draw () {
	//draw scope
	background ('orange');

 	// shapes with xy coordinate and size //

// white circle behind the face gets bigger and resembles the moon//
	var bigMoon = map(mouseY, 0, 360 , 150, 250);
	fill ("white");
	noStroke();
	ellipse(x, y, bigMoon);




 	//face
	fill (255, 250, 98);
 	stroke ('red');
 	strokeWeight (4);
	ellipse(x, y, s); 
	//x++
	//s++
	fill ("white");

	ellipse (x-30, y-20, 30); //left eye
	noFill(); //290, 160, 30// 

	arc(x-37, y-15, s-165, s-165, HALF_PI, PI); //left eyebag

	//close eye effect, yellow ellipse covers the open lef eye//
	noStroke();
	var closeEye = map(mouseY, 0, 360, 360, 156);
	closeEye = max(156, closeEye);
	fill(255, 250, 98);
	ellipse (x-30, closeEye, 35);

	
	noFill();
	strokeWeight(4);
	stroke('red');
	arc(x+30, y-24, s-165, s-165, 0, PI); // right eye

	

	
	
	fill (255, 250,98);
	strokeWeight(4);
	arc (x-96, y, s-175, s-160, HALF_PI, -HALF_PI) //left ear
	arc (x+96, y, s-175, s-160, -HALF_PI, HALF_PI) // right ear
	


	// shapes that are only xy points //

	rectMode (CENTER);
	line (x-8, y+25, x+12, y+25) //mouth
	strokeWeight (5)
	line (x-50, y-40, x-15, y-40) //left eyebrown
	line (x+13, y-40, x+48, y-40) //right eyebrown





	//arrow 
	stroke ('red');
	strokeWeight (4);

	var a = mouseX;
	var b = mouseY;


	line(a+30, b-130, a+30, b+50); //horizontal stroke

	line(a, b-130, a+30, b-100); //first from down line on the left
	line(a, b-140, a+30, b-110); //second
	line(a, b-150, a+30, b-120); //third
	line(a+20, b+35, a+30, b+50) // line on the tip
	



	line(a+60, b-130, a+30, b-100); //first from down line on the right
	line(a+60, b-140, a+30, b-110); //second
	line(a+60, b-150, a+30, b-120); //third
	line(a+40, b+35, a+30, b+50) //line on the tip





	//body
	fill ('red');
	triangle (x, y+101, x-120, y+180 , x+120, y+180);

	






	

}	