/* self portrait
	by miranda
	2/06/2020
*/


function setup () {
	createCanvas(640, 360);
}

function draw () {
	background ('orange');

 	// shapes with xy coordinate and size //
 	fill (255, 250, 98);
 	stroke ('red');
 	strokeWeight (4);
	ellipse(320, 180, 200); // face
	fill ("white");
	ellipse (290, 160, 30); //left eye
	noFill();
	arc(283, 165, 35, 35, HALF_PI, PI); //left eyebag



	noFill();
	arc(350, 156, 35, 35, 0, -PI, PI); // right eye
	

	
	
	strokeWeight(4)
	fill (255, 250,98)
	arc (224, 180, 25, 40, HALF_PI, -HALF_PI) //left ear


	fill (255, 250, 98)
	arc (416, 180, 25, 40, -HALF_PI, HALF_PI) // right ear
	


	// shapes that are only xy points //

	rectMode (CENTER);
	line (312, 205, 332, 205) //mouth
	strokeWeight (5)
	line (270, 140, 305, 140) //left eyebrown
	line (333, 140, 368, 140) //right eyebrown


	//arrow 
	stroke ('red');
	strokeWeight (4);
	line(350, 50, 350, 230);

	line(320, 50, 350, 80); //first from down line on the left
	line(320, 40, 350, 70); //second
	line(320, 30, 350, 60); //third
	line(340, 215, 350, 230) // line on the tip
	



	line(380, 50, 350, 80); //first from down line on the right
	line(380, 40, 350, 70); //second
	line(380, 30, 350, 60); //third
	line(360, 215, 350, 230) //line on the tip





	//body
	fill ('red');
	triangle (320, 281, 200, 360 , 440, 360);

}	