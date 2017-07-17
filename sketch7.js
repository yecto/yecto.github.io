//var logo;
var t;
var transparencia = 0;
var contador;


function setup() {

	// logo = loadImage("logo.png");
	createCanvas(windowWidth, windowHeight);
	noFill();
	t = 0;
}

function draw() {
	background(181, 126, 105);
	translate(width / 2, height / 2);
	stroke(255, 170, 0, 125);
	strokeWeight(0.75);
	octado();
	strokeWeight(3);
	octadot();
	t += 5;

}

function octado() {
	beginShape();
	for (var i = 0; i < 600; i++) {
		var ang = radians(i) * map(mouseX, 80, width, 80, 45.5);
		// 40 
		//var rad = map(mouseY, 30, 60, 30, 65) * noise(i * sin(0.002), t * 0.0003);
		var rad = 400 * noise(i * sin(0.002), t * 0.00035);
		var x = rad * sin(ang);
		var y = rad * cos(ang);
		vertex(x * 2.25, y * 2.25);
	}
	endShape();
}

function octadot() {
	beginShape();
	for (var i = 0; i < 600; i++) {
		var ang = radians(i) * map(mouseX, 80, width, 80, 45.5);
		// 40
				var rad = 400 * noise(i * sin(0.002), t * 0.00035); 
		//var rad = map(mouseY, 30, 60, 30, 65) * noise(i * sin(0.002), t * 0.0003);
		//var rad = map(mouseY, 160, height, 160, 260) * noise(i * sin(0.002), t * 0.0003);
		var x = rad * sin(ang);
		var y = rad * cos(ang);
		point(x * 2.25, y * 2.25);
	}
	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/*
var oll = 420;
var z;
var newLen
var len = 0;
var mic;
var crecer = 1;
var contador = 1;
var colorcontador = 1;
var img;
var img01;
var t;


// padding-right: 400px; 
// es el que acá en .css


function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn()
	mic.start();
	background(255, 188, 3);
}

function draw() {

	contador++;
	colorcontador++;
	
	micLevel = mic.getLevel();
	push();
	noStroke();

	rectMode(CENTER);
	translate(width / 2, height / 2);
	fill(255, 188, 3, 0.5);
	rect(0, 0, 2000, 2000);

	strokeCap(SQUARE);
	translate(random(-202, 102), random(-102, 102));
	rotate(radians(z / 0.75));
	

	if (colorcontador <= 200) {
		fill(255, 188, 3);
		stroke(100);
	}
    if (colorcontador >= 201) {
		fill(100);
		stroke(255, 188, 3);
    }
	if (colorcontador >= 400) {
		fill(255, 188, 3);
		stroke(100);
	}
	if (colorcontador == 800) {
		colorcontador = 1;
	}


	if (contador <= 400) {
		amar();
	}
	if (contador >= 401) {
		rama();
	}
	if (contador == 800) {
		contador = 1;
	}


	pop();
	z++;
	t++;
}

function rama() {
	var len = random(0, 8);
	translate(-len, -len);
	rectMode(CENTER);
	ellipse(random(600), random(100), 1 + micLevel * 20, 1 + micLevel * 20);
	var newLen = len * 0.00005;
	if (newLen < 0.00005) {
		return;
	} else {
		push();
		rotate(radians(oll * 180.5));
		rama(30);
		pop();
	}
}


function amar() {
	var len = random(350);
	translate(-len + 120, -len + 120);
	scale(0.5 + micLevel * 2);
	translate(-80, -30)
	translate(random(600), random(300));
	strokeWeight(1 + micLevel * 2);
	//triangle(random(30) + micLevel * 600, random(75) + micLevel * 600, random(58) + micLevel * 600, random(20), random(86) + micLevel * 600, random(75) + micLevel * 600);
	
beginShape();

	for (var i = 1; i < 3; i++) {
		var ang = map(i, random(40), 1, random(20), TWO_PI * 8);
		//var ang = radians(i);
		var rad = 240 * noise(i * 0.0005, t * 0.0001);
		var x = rad * sin(ang);
		var y = rad * cos(ang);
		vertex(x, y);
	}
	endShape(CLOSE);
	
	var newLen = len * 0.005
	if (newLen < 0.005) {
		return;
	} else {
		rotate(radians(oll * 380.5));
		amar(1);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

*/
