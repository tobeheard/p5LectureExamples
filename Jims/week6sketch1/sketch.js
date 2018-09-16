var numVoices = 15; //how many different voices of polyphony this can be determined by CPU
var osc = []; //these are the arrays to hold the signal chain
var lpf = [];
var env = [];
var filtenv = [];
var analyzer = [];
var delay;
//var notes = [33,35,35,38,40,41,43]; //these arrays hold the pitches of osc
var notes = [27,39,32,44];

function setup() {
  createCanvas(1200,800);
  for(i = 0; i < numVoices; i++){ //at each position i create a new envelope
    env[i] = new p5.Env();        //they are all adressed within the for loop
    env[i].setADSR(5, 5, 0.0, 0.5);
    // set attackLevel, releaseLevel
    env[i].setRange(1, 0);
    env[i].setExp();

    filtenv[i] = new p5.Env();  //sweep through the cutoff freq
    filtenv[i].setADSR(2, 1, 0.0, 0.5);
    // set attackLevel, releaseLevel
    filtenv[i].setRange(1000, 0);

    lpf[i] = new p5.LowPass();  //set the filter env to control the freq of lpf
    lpf[i].freq(filtenv[i]);
    lpf[i].res(18);

    osc[i] = new p5.Oscillator();
    osc[i].setType('triangle');
    osc[i].amp(env[i]);   //set AR env to control amplitude
    osc[i].disconnect(); //this is because an oc is hard set to output
    osc[i].connect(lpf[i]); //we now connect it to lpf
    osc[i].start();

    analyzer[i] = new p5.Amplitude(); //this will analyze the amplitude of each osc i
    analyzer[i].setInput(osc[i]);
  }
}

function draw() {
  background(255);
  noStroke();
  for(i = 0; i < numVoices; i++){     //draw the stacked array of the RMS value
    var rms = analyzer[i].getLevel(); //it needs to be scaled as RMS is tiny
    fill(map(rms,0,0.03,0,255));      //make it random
    rect(0, i*30, rms*100000, 30);
  }
}

function mousePressed(){
  for(i = 0; i < numVoices; i++){       //this is the performance interactive part
    var randAttack = random(1,10);
    var randDecay = random(0.1,2);      //use of random to set attack decay etc
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
