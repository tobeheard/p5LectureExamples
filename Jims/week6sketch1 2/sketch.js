var numVoices = 15;
var osc = [];
var lpf = [];
var env = [];
var filtenv = [];
var analyzer = [];
var delay;
//var notes = [33,35,35,38,40,41,43];
var notes = [27,39,32,44];

function setup() {
  createCanvas(1200,800);
  for(i = 0; i < numVoices; i++){
    env[i] = new p5.Env();
    env[i].setADSR(5, 5, 0.0, 0.5);
    // set attackLevel, releaseLevel
    env[i].setRange(1, 0);
    env[i].setExp();

    filtenv[i] = new p5.Env();
    filtenv[i].setADSR(2, 1, 0.0, 0.5);
    // set attackLevel, releaseLevel
    filtenv[i].setRange(1000, 0);

    lpf[i] = new p5.LowPass();
    lpf[i].freq(filtenv[i]);
    lpf[i].res(18);

    osc[i] = new p5.Oscillator();
    osc[i].setType('triangle');
    osc[i].amp(env[i]);
    osc[i].disconnect();
    osc[i].connect(lpf[i]);
    osc[i].start();

    analyzer[i] = new p5.Amplitude();
    analyzer[i].setInput(osc[i]);
  }
}

function draw() {
  background(255);
  noStroke();
  for(i = 0; i < numVoices; i++){
    var rms = analyzer[i].getLevel();
    fill(map(rms,0,0.03,0,255));
    rect(0, i*30, rms*100000, 30);
  }
}

function mousePressed(){
  for(i = 0; i < numVoices; i++){
    var randAttack = random(1,10);
    var randDecay = random(0.1,2);
    env[i].setADSR(randAttack, randDecay, 0.0, 0.5);
    env[i].setRange(random(0.01,0.05), 0);
    filtenv[i].setADSR(randAttack, randDecay, 0.0, 0.5);
    filtenv[i].setRange(random(100,1000), 0);

    env[i].play();
    filtenv[i].play();
    var randomNote = int(random(0,notes.length-1));
    randomNote = notes[randomNote];
    osc[i].freq(midiToFreq(randomNote)*int(random(2,10))+random(-10,10));
  }
}
