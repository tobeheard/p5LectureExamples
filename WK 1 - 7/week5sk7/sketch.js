// basic osc  + AR envelope program

//var numVoices = 15;
var osc;
var env;

function setup() {
  createCanvas(800,800);

  env = new p5.Env();
  env.setADSR(0.01, 1, 0.0, 0.5); //AR envelope
  env.setExp(); //use exponential curves

  //effect = new p5.Distortion(0.0, 'none');

  //instansiate a sine osc object calling it modulator
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.amp(env);
  osc.freq(220);
  // osc.disconnect();
  // osc.connect(effect);
  osc.start();
}

function draw(){
  background(150, 80);

  //when mouse is pressed draw a little circle

}
function mousePressed(){
  fill(0);
  ellipse(mouseX,mouseY, 50,50);
  env.play();
}
