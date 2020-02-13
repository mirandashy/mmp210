/* self portrait
	by miranda
	2/06/2020
*/

// global scope
var x = 320; //origin for face
var y = 180;

var s = 200; //size for face





function setup () {
	//setup scope
	createCanvas(x*2, y*2);
}

function draw () {
	//draw scope
	background ('orange');

 	// shapes with xy coordinate and size //

 	//face
	fill (255, 250, 98);
 	stroke ('red');
 	strokeWeight (4);

	ellipse(x, y, s); 
	//x++
	//s++
	fill ("white");
	ellipse (x-30, y-20, s-170); //left eye
	noFill();
	arc(x-37, y-15, s-165, s-165, HALF_PI, PI); //left eyebag


	noFill();
	arc(x+30, y-24, s-165, s-165, 0, PI); // right eye
	

	
	strokeWeight(4)
	fill (255, 250,98)
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
	line(x+30, y-130, x+30, y+50); //horizontal stroke

	line(x, y-130, x+30, y-100); //first from down line on the left
	line(x, y-140, x+30, y-110); //second
	line(x, y-150, x+30, y-120); //third
	line(x+20, y+35, x+30, y+50) // line on the tip
	



	line(x+60, y-130, x+30, y-100); //first from down line on the right
	line(x+60, y-140, x+30, y-110); //second
	line(x+60, y-150, x+30, y-120); //third
	line(x+40, y+35, x+30, y+50) //line on the tip





	//body
	fill ('red');
	triangle (x, y+101, x-120, y+180 , x+120, y+180);

}	