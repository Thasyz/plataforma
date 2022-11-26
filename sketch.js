let snd;

function preload() {
  soundFormats('wav');
  snd = loadSound("./snd/gong.wav");
}

function setup() {
  (400, 400);
}

function draw() {
  background(220);
}

function mouseClicked() {
  snd.play();
}
  