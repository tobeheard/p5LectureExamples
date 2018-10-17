
var sawOsc, lpf;

function setup(){
  createCanvas(windowWidth,windowHeight);

  //create LPF.
  lpf = new p5.LowPass();
  //instantiate oscillator
  sawOsc = new p5.Oscillator();
  sawOsc.setType('sawtooth');
  //set frequ
  sawOsc.amp(0.5,0.1);
  sawOsc.freq(55);

  //sineOsc.amp(adsr);

  //now disconnet osc from output, reroute through filter
  sawOsc.disconnect();
  sawOsc.connect(lpf);
  sawOsc.start(); //runs now

  cutoffSlider = createSlider(20,1000,440);
  cutoffSlider.position(10,10);
  fill(0);

  resonanceSlider = createSlider(0,100,0);
  resonanceSlider.position(10,30);
}

function draw(){
  background(255);
  text("Cutoff Freq: "+int(lpf.freq()),cutoffSlider.x+cutoffSlider.width+10,22);
  text("Resonance: "+int(lpf.res()),resonanceSlider.x+resonanceSlider.width+10,42);

  lpf.freq(cutoffSlider.value());
  lpf.res(resonanceSlider.value());

}
