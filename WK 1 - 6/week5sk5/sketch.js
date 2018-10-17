//AM synthesis
//sine wave amplitude modulation
//create a variable called:
var carrier, modulator;

function setup() {
  createCanvas(windowWidth,windowHeight);

  //instansiate a sine osc object calling it modulator
  modulator = new p5.Oscillator();
  modulator.setType('sine');
  modulator.amp(mouseX,mouseY); //paramater of mod depth; make this GUI controlled

  modulator.freq(50); //modulation rate parameter; "            "
  modulator.start();

  //instansiate an osc object calling it carrier
  carrier = new p5.Oscillator();
  carrier.setType('sine');
  carrier.amp(modulator); //set the carriers gain to be modulated by modulator
                              //; make this GUI controlled
  carrier.freq(300); //carrier rate parameter; "            "
  carrier.start();
}

function draw(){
  background(255);
}
