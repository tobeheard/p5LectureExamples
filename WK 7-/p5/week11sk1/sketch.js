//OBJECT CLASS CODE .
// see lect notes click generator

var clickGen1;
var clickGen2;



function setup(){
  createCanvas(600,600);
   clickGen1 = new clickGenerator(300, 150);
   clickGen1.configAudio();

   clickGen2 = new clickGenerator(300, 300);
   clickGen2.configAudio();

}

function draw(){
  background(255);

  clickGen1.displayClicker();
  clickGen2.displayClicker();
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
    clickGen1.setAudioParameters(random(220,440));
  }
  if(keyCode===RIGHT_ARROW){
    clickGen2.setAudioParameters(random(220,440));
  }
}

function mousePressed(){
  clickGen1.triggerEnvelope();
  clickGen2.triggerEnvelope();
}

 function clickGenerator(){

  this.configAudio = function(){
  env = new p5.Env();
  env.setADSR(0.001,0.2,0.0,0.5);
  env.setExp();

  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.amp(env);
  osc.freq(this.oscFreq);
  osc.start();
}

  this.setAudioParameters = function(_oscFreq){
  this.oscFreq = _oscFreq;
  osc.freq(this.oscFreq);
}

  this.triggerEnvelope = function(){
  env.play();
}

  this.displayClicker = function(){
  fill(0);
  ellipse(map(this.oscFreq,220,440,0,width), this.ypos,60,60);
}
 }
