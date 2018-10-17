//play sineTone setting it's frequency form an array of MIDI note values.
 // then trigger ADSR
var pentSequence = [54,56,58,61,63];
//set vars for ADSR params
var attack = 0.01;
var decay = 0.5;
var sustain = 0.8;
var release = 1.0; //these are in secs.

var notIsOff = true;

function setup(){
  //create enve generator
  adsr = new p5.Env();
  adsr.setADSR(attack, decay,sustain, release);
  //instantiate oscillator
  sineOsc = new p5.Oscillator();
  sineOsc.setType('sine');

  //set frequ
  sineOsc.freq(440);
  // sineOsc.amp(0.5,0.1);
  sineOsc.amp(adsr);
  sineOsc.start(); //runs now
}

  //every 60s play a random value from array, convert this midi val it to freq
  //then set to osc freq
// function draw(){
//   if(frameCount%60 === 0){ //if the remainder of frameCount == 0
//     var randomIndexValue = int(random(0,4)); //cast to int for the array to find
//     var freq = midiToFreq(pentSequence[randomIndexValue]);
//   sineOsc.freq(freq);
// }

//every 120 frames, either trigger the adsrs attack of release
function draw(){
  if(frameCount%120 === 0){
    if (notIsOff === true){
      var randomIndexValue = int(random(0,4)); //cast to int for the array to find
      var freq = midiToFreq(pentSequence[randomIndexValue]);
      sineOsc.freq(freq);

      adsr.triggerAttack();
      notIsOff = false;
    }
    else {
      adsr.triggerRelease();
      notIsOff = true;
    }

}
}
