//jims sk7
var soundFile;
var button;
var checkbox;

var playbackrate = 0;

var buttonState = false;

// blocking function that only stops once all files have loaded
function preload(){
  soundFormats('wav','mp3','ogg');

  //load our sounds into the soundArray
  soundFile = '/assets/roland.wav'
  sound1 = loadSound(soundFile);
}

function setup() {
  createCanvas(600, 600); //as wide as the browser window

  button = createButton("Play/Stop");
	button.position(10, 10);
	button.mousePressed(playStopButton);

  checkbox = createCheckbox('Loop', false);
  checkbox.position(10,30);
  checkbox.changed(loopCheckbox);

  startpointInput = createInput();
  startpointInput.position(10,50);
  startpointButton = createButton("Set rate");
  startpointButton.position(150,50);
  startpointButton.mousePressed(setStartPoint);

  amplitude = new p5.Amplitude();

  sound1.play();
}

function draw() {
  background(255);
  var level = amplitude.getLevel();
  var barWidth = map(level,0,1,0,2000);
  rect(10,80,barWidth,30);
}

function playStopButton(){
  buttonState = !buttonState;

  if(buttonState == true){
    sound1.stop();
  }
  else{
    sound1.play();
  }
}

function loopCheckbox() {
  if (this.checked()) {
    sound1.setLoop(true);
  } else {
    sound1.setLoop(false);
  }
}

function setStartPoint(){
  sound1.rate(startpointInput.value());
}
