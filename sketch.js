var seed = Math.random() * 1341;
var t;
var num, vNum;
var radius, mySize;
let colors7 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
var sizes = [];
let phase = 0;
let zoff = 0;
let slider;
let value=0;
let v_planet = [];

function setup() {
  mySize = min(windowWidth, windowHeight);
	createCanvas(windowWidth, windowHeight);
resetSketch();
var button = createButton("reset")
button.mousePressed(resetSketch) 
}


function resetSketch(){
  
	background(255,255,255);
	num = int(random(200, 100));
  //num = int(random(2, 200)); ou este ! quantidade de fios
	radius = mySize * 0.01;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 10)) //tamanho inicial
	}
	t = 0;
}


function draw() {
	// background(color_bg);


	randomSeed(seed);
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a + t) / random(2, 5);
		let y = radius * cos(a + t) / random(2, 5);
		v_planet[i] = createVector(x, y);
	}
	push();
	translate(width / 2, height / 2);
	for (let j = 0; j < 2; j++) {

		
		rotate(random(TAU) * j / 10 + t);
		noFill();
		stroke(random(colors7));
		strokeWeight(random(1, 2));
      

		beginShape();
		// curveVertex(v_planet[0].x, v_planet[0].y);
		for (let i = 0; i < num; i++) {
			let d = random(radius / 1, radius / 8);
			let x_plus = 2
			let y_plus = 2
			curveVertex(v_planet[i].x + x_plus, v_planet[i].y - y_plus);
		}
		endShape(CLOSE);
      
      
	}
	pop();

	t += random(0.001, 0.055);
	if (radius < mySize * 5) {
		radius += random(1, 10);
	} else {
		noLoop();
	}
   
  

}





