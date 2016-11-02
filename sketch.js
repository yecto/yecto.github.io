var oll = 420;
var z;
var newLen
var len = 0;
var mic;
var crecer = 1;
var contador = 1;
var img;
var img01;

function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn()
	mic.start();
	background(200, 150, 0);
}

function draw() {
	contador++;
	micLevel = mic.getLevel();
	push();
	noStroke();
	rectMode(CENTER);
	translate(width / 2, height / 2);
	fill(200, 150, 0, 2);
	rect(0, 0, 2000, 2000);
	//rotate(radians(oll / 2));
	//fill(255, 120);
	fill(200, 150, 0);
	stroke(100, random(255));
	translate(random(-202, 102), random(-102, 102));
	rotate(radians(z / 0.25));
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
	push();
	imagen01();
	pop();
	z++;
}

function rama() {
	var len = random(0, 8);
	translate(-len, -len);
	rectMode(CENTER);
	//rect(random(200), map(mouseX, 45, random(80, 60), 0, 2), 0 + micLevel * 6, 2 + micLevel * 120);
	ellipse(random(600), random(100), 1 + micLevel * 50, 1 + micLevel * 50);
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
	var len = random(80);
	translate(-len, -len);
	scale(0.5 + micLevel * 1.8);
	//rect(random(200), map(mouseX, 45, random(80, 60), 0, 2), 0 + micLevel * 6, 2 + micLevel * 120);
	triangle(random(30) + micLevel * 600, random(75) + micLevel * 600, random(58) + micLevel * 600, random(20), random(86) + micLevel * 600, 75 + micLevel * 600);
	//ellipse(random(600), random(100), 1 + micLevel * 60, 1 + micLevel * 60);
	var newLen = len * 0.00005;
	if (newLen < 0.00005) {
		return;
	} else {
		rotate(radians(oll * 180.5));
		amar(3);
	}
}

function imagen01() {

	img = createGraphics(130, 130);
	//img.loadPixels();
	img.background(255);

	/*	
		for (i = 0; i < img.width; i++) {
			for (j = 0; j < img.height; j++) {
				img.set(i, j, color(0, 90, 102, i % img.width * 2));
			}
		}
	*/

	img.updatePixels();
	//	image(img, 34, 34);
	image(img01, 17, 20);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}