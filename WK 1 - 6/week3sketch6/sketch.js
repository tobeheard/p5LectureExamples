var sound1;
var playerwidth = 800; //our waveform
var waveformarray = []; //holds waveform peaks

function preload(){
  soundFormats('wav','mp3','ogg');
  sound1 = loadSound('/assets/Handrail L.wav'); //load sound into array
}

function setup() {
  createCanvas(window.innerWidth, 600); //as wide as browser window

  background(225);
  stroke(0);
  strokeWeight(1);

  rect(10,10,playerwidth,100); //a box to hold wav

  waveformarray = sound1.getPeaks([playerwidth]);

  //for each pint draw a line that extends equally above and below 0 pos of player window
  for(var i = 0; i < playerwidth; i++){
    //line(x1,y1,x1,x2)
    line(i+10, 60-waveformarray[i]*50, i+10, 60+waveformarray[i]*50)
  }

}




function draw() {
  // put drawing code here
}
