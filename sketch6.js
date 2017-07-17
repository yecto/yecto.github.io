var n;
var t = 1;
var h;
var g = 1;
var contador = 0;

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	noFill();
}

function draw() {
	contador++;
	background(220);
	var ruidoX = 0.00000028;
	var posX = noise(millis() * ruidoX);
	rotateX(map(360, 0, height, 0, contador / posX / 2000));
	rotateY(map(800, 0, width, 0, PI));
	drawCylinderTrian();
	drawCylinderVerde();
	drawCylinderAzul();

}


function drawCylinderAzul() {
	translate(120, 0);
	var rX = 0.000000001;
	var ruidoLoco = noise(millis() * rX) * 40;
	var sides = ruidoLoco;

	ambientLight(255, 255, 255);
	ambientMaterial(30, 255, 200, 150);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.000001;
		var rrX = 0.00002;
		var bR = noise(millis() * rY) * 300;
		var tR = noise(millis() * rrX) * 2000;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.000003;
		var ruidoTall = noise(millis() * rT) * 600;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(angle), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function drawCylinderVerde() {
	translate(130, 0);
	var rX = 0.0000001;
	var ruidoLoco = noise(millis() * rX) * 60;
	var sides = ruidoLoco;

	ambientLight(255, 255, 255);
	ambientMaterial(0, 200, 7, 150);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.0000215
		var rrX = 0.00001;
		var bR = noise(millis() * rY) * 400;
		var tR = noise(millis() * rrX) * 900;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.000003;
		var ruidoTall = noise(millis() * rT) * 600;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(angle), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function drawCylinderTrian() {
	translate(130, 0);
	var rX = 0.000000001;
	var ruidoLoco = noise(millis() * rX) * 30;
	var sides = ruidoLoco;

	ambientLight(255, 255, 255);
	ambientMaterial(191, 0, 70, 180);

	//ambientMaterial(0, 100, 255, 180);
	var angleIncrement = TWO_PI / sides;
	beginShape(TRIANGLES);
	for (var i = 0; i < sides; ++i) {

		var angle = map(i, -7, 0, 90, TWO_PI);
		var rY = 0.000021;
		var rrX = 0.00001;
		var bR = noise(millis() * rY) * 200;
		var tR = noise(millis() * rrX) * 2000;
		var bottomRadius = bR;
		var topRadius = tR;

		// - - - - - - - - - - - - - - - - - - - -
		var ang = map(i, 0, bR / 0.35, 800, PI / tR);
		var rT = 0.000003;
		var ruidoTall = noise(millis() * rT) * 600;
		var tall = ruidoTall * cos(ang);

		vertex(topRadius * cos(angle), 0, topRadius * sin(angle));
		vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
		angle += angleIncrement;

	}
	endShape();
	n += 5;
	g += 0.015;
	t += 5;
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}