// phrase and part
var lowOsc, highOsc, myPart;
var lowEnv, highEnv;
var mouseState = false;

var lowPattern = [39,42,46,49,46,44,39]; //midi note pentatonic scales
var highPattern = [68,70,73,75,78,68,70,68];
function setup() {
  createCanvas(800,800);
  background(0);

  //env. generatos
  lowEnv = new p5.Env();
  lowEnv.setADSR(0.001, 0.6, 0.0, 0.5); //AR envelope
  highEnv = new p5.Env();
  highEnv.setADSR(0.001, 0.6, 0.0, 0.5); //AR envelope

  //create oscillators
  lowOsc = new p5.Oscillator();
  lowOsc.setType('triangle');
  lowOsc.amp(lowEnv);
  lowOsc.freq(220);
  lowOsc.start();

  highOsc = new p5.Oscillator();
  highOsc.setType('triangle');
  highOsc.amp(highEnv);
  highOsc.freq(220);
  highOsc.start();

  //create phrases: arguments (mane, callback, pattern)
  var lowPhrase = new p5.Phrase('lowphrase',playLow, lowPattern)
  var highPhrase = new p5.Phrase('highphrase',playHigh, highPattern)
  myPart = new p5.Part(8,1/8); //numSteps,, num tatums
  myPart.addPhrase(lowPhrase);
  myPart.addPhrase(highPhrase);
  myPart.setBPM(120);
  masterVolume(0.1);
}

function draw(){

}

function playLow(time, midiPitch){   ///these are the callback
  background(random(0,255),random(0,255),random(0,255));
  lowOsc.freq(midiToFreq(midiPitch));
  lowEnv.play();
}

function playHigh(time, midiPitch){
  highOsc.freq(midiToFreq(midiPitch));
  highEnv.play();
}

function mouseClicked(){
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    mouseState =!mouseState;
    if(mouseState === true){
      myPart.start();
      myPart.loop();}
        else{
          background(0);
          myPart.stop();
        }
      }
    }
