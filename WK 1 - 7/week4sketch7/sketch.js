var playerwidth = 800; //our waveform
var waveformarray = []; //holds waveform peaks
var songDuration;


//button variables
var buttonActiveColour;
var buttonInactiveColour;
var buttonX = 820;
var buttonY = 35;
var buttonWidth = 50;
var buttonHeight = 50;
var buttonState = true;
var soundFile;

//blocking func only stops once all files have loaded
function preload(){
  soundFormats('wav','mp3','ogg');

//load sound into array
sound1 = loadSound('type103.wav');
}


function setup() {
  createCanvas(window.innerWidth, 600); //as wide as browser window

  buttonActiveColour = color('#224f42');
  buttonInactiveColour = color('#e03408');


  background(225);
  stroke(0);
  strokeWeight(1);

  rect(10,10,playerwidth,100); //a box to hold wav

  waveformarray = sound1.getPeaks([playerwidth]);

  //for each pint draw a line that extends equally above and below 0 pos of player window
  for(var i = 0; i < playerwidth; i++){
    //line(x1,y1,x1,x2)
    line(i+10, 60-waveformarray[i]*50, i+10, 60+waveformarray[i]*50)
  }
sound1.play();
}


function draw() {
  // put drawing code here
  background(225);
  stroke(0);
  strokeWeight(1);
  fill(255);

  rect(10,10,playerwidth,100); //a box to hold wav
  //scale the sounds current pos to the player width
  //when the sound starts, it's at 0px; ends at playerwidth px
  for(var i = 0; i < playerwidth; i++){
    //line(x1,y1,x1,x2)
    line(i+10, 60-waveformarray[i]*50, i+10, 60+waveformarray[i]*50)

}

  sound1.currentTime();

  //map(valueToMap, fromLow, fromHigh, toLow, toHigh)
  //      0, lengthOfSound, 0, widthOfWaveFormView
  var playheadPosition = map(sound1.currentTime(), 0, sound1.duration(), 0, playerwidth);
  line(playheadPosition, 0, playheadPosition, 100);

  //draw the button (change colour if active or not)
   drawCustomButton()

    if(buttonState === true){
      fill(buttonActiveColour);
    }
    else {
      fill(buttonInactiveColour);
    }
rect(buttonX, buttonY, buttonWidth, buttonHeight);


  //mousepress callback --check if button is pressed
  function mousePressed(){
    if(mouseX > buttonX && mouseX < buttonX+buttonWidth){
      if(mouseY > buttonY && mouseY < buttonY+buttonHeight){
        checkCustomButton();
      }
  }

}
//update button buttonState
function checkCustomButton() {
  buttonState = !buttonState; //flips state
  if (buttonState === false){
    sound1.setVolume(0.0); //mute
  }
  else{
    sound1.setVolume(1.0); //unmute
  }
}
}
