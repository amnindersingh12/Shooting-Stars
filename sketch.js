var d = [];
var windSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < width * 2; i++) {
    d[i] = new drop();
  }
  rectMode(CENTER);
}

function draw() {
  background(35);
  windSpeed += random(0.02, -0.02);
  for (let i = 0; i < 6; i++) {
    d[i].fall();
    d[i].show();
  }
}

function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW:
			windSpeed++;
			break;
		case RIGHT_ARROW:
			windSpeed--;
			break;
		case ENTER:
			windSpeed = 0;
			break;
		default:
			return false;
	}
}
