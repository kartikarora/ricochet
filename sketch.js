//Lets start by looking at the random() function

//random() can give us random numbers
//Check the reference to see the uses and syntax of this function

// Forked and Modified by Kartik Arora

let omouseX = 0, omouseY = 0, nmouseX = 0, nmouseY = 0;

function setup(){
	createCanvas(screen.width,screen.height);
	
	//First we set a random background colour
	background(random(0, 255), random(0,255), random(0,255));
	
	frameRate(24);
	noLoop();
}

function draw(){
	//Lets assign a random value to the letiable 'randomX' we can use the two parameters of the random function to set the range.
	//Lets get two random numbers between 0 and the width and height of the canvas

	let randomX = random(0, width);
	let randomY = random(0, height);
	
	//Here we set a random fill and stroke colour!
	let color = [random(0, 255), random(0,255), random(0,255)];
	fill(color);
	stroke(color);
  	smooth();
	
	// Calculate size of circle and square based on distance moved by the mouse
	let size = Math.abs(((pmouseX-omouseX)+(pmouseY-omouseY)));
	
  	line(randomX, randomY, randomY-(size/2), randomX+(size/2));
	ellipse(randomX, randomY, size);
  	rect(randomY, randomX, size, size);
}

// Detect mouse movement and store old and new coordinates
function mouseMoved(){
	if (mouseX == pmouseX && mouseY == pmouseY){}
	else{
		omouseX = pmouseX;
		omouseY = pmouseY;
		pmouseX = mouseX;
		pmouseY = mouseY;
		// Draw on the canvas because mouse moved
		draw();
	}
}