// use mic input and FFT to visualise input audio

var micInput;
var fft;



function setup(){
  createCanvas(500,500);
  background(0);

  micInput = new p5.AudioIn();  //audio input
  micInput.start();   //gets audio input from mic

  fft = new p5.FFT(0.8,64);    //create instance of FFT arguments are smoothing, and #bins
  fft.setInput(micInput);
  // amp = new p5.Amplitude(); // let the Amplitude function read the vol of song
}

function draw(){
  background(0);
  var spectrum = fft.analyze();   //here we take the fft.analyze that returns the spectrum array

  noStroke();
  colorMode(HSB);

  for(var i = 0; i<spectrum.length; i++){
    var x = map(i, 0,spectrum.length,0,width);
    var h =-height+ map(spectrum[i],0,255,height,0);
    fill(i,255,255);
    rect(x,height,width/spectrum.length,h);
  }

  var audioWav = fft.waveform(); //create and Array of vols called volHistory
  var centroid = fft.getCentroid();
  fill(255);
  noStroke();
  textSize(30);
  text("centroid = "+round(centroid)+" Hz",10,50);

  translate(width/2, height/2);
  beginShape();
  noFill();
  stroke(155,255,255);
    for(var i=0; i<audioWav.length; i++){
      var r=map(audioWav[i],0,1,50,200);
      var x=r*cos(i);
      var y=r*sin(i);

      vertex(x,y);
    }
  endShape();
  if (audioWav.length > 360){
    audioWav.splice(0,1);
  }



}
