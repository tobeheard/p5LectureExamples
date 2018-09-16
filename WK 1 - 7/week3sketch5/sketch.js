var soundArray = []; //creates an array to hold sound files

function preload(){   //blocking func only stops once all files have loaded
  soundFormats('wav','mp3','ogg');
  soundArray[0] = loadSound('/assets/Handrail L.wav');  //load sound into array
  soundArray[1] = loadSound('/assets/roland.wav');
}

function setup() {
  playSoundFromArray(0, 0.4);
  playSoundFromArray(1, 0.8);
}

//Afuntion that takes an array position and gain level,
//and plays the soundfile form that position in the array.
function playSoundFromArray(arrayPosition,volume){
  soundArray[arrayPosition].setVolume(volume);
  soundArray[arrayPosition].play();
}

//also play sounds when mouse pressed
function mousePressed() {
  playSoundFromArray(0, 0.4);
  playSoundFromArray(1, 0.8);
}
