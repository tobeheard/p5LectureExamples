  function preload(){
    soundFormats('wav','mp3','ogg');
    mySound = loadSound('/assets/roland.wav');
  }

  function setup() {
    mySound.setVolume(0.4);
    mySound.play();
}

  function draw() {
  // nothing here
}
