// multiples! array based signal chains

var numVoices = 15;
var osc =[];
var lpf =[];
var env =[];
var filterenv =[];
var analyser =[];

function setup() {
  createCanvas(800,800);

  env = new p5.Env();
  env.setADSR(0.01, 1, 0.0, 0.5); //AR envelope
  env.setExp(); //use exponential curves



  //instansiate a sine osc object calling it modulator
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.amp(env);
  osc.freq(220);
  // osc.disconnect();
  // osc.connect(effect);
  osc.start();

  effect = new p5.Delay();
  effect.process(osc,0.25,0.7, 5000);
}

function draw(){
  background(150, 80);
  strokeWeight(3);
  line(0,mouseY,mouseX,mouseY);
  line(mouseY,0,mouseX,mouseY);
  //when mouse is pressed draw a little circle
  //make some gridlines
  strokeWeight(1);
  stroke(128);
  for(i = 0; i<8; i++){
    line(i*100,0,i*100,height);
  }

}
function mousePressed(){
  fill(0);
  ellipse(mouseX,mouseY, 50,50);
  env.play();
}
