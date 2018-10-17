//FM synthesis
//sine wave amplitude modulation
//create a variable called:
var carrier, modulator;

function setup() {
  createCanvas(windowWidth,windowHeight);

  //instansiate a sine osc object calling it modulator
  modulator = new p5.Oscillator();
  modulator.setType('sine');
  modulator.amp(50,0.1); //paramater of mod depth; make this GUI controlled
  modulator.freq(27.5); //modulation rate parameter; "            "
  modulator.disconnect();
  modulator.start();

  //instansiate an osc object calling it carrier
  carrier = new p5.Oscillator();
  carrier.setType('sine');
  carrier.amp(0.5,0.1);
  carrier.freq(440); //carrier initial freq;
  carrier.start();
  carrier.freq(modulator); //now add the mod to the carrier's freq
}

function draw(){
  background(255);
}
