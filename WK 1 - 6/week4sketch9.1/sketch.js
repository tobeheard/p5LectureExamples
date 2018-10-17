//jims sk8
var backgroundShade = 0;

function setup() {
  //create an html slider (w/ the DOM library) to adjust the size of the circle
  circleSlider = createSlider(0, 800, 400);
  circleSlider.position(25,25); //position the slider on the screen

  //create a text input field whose value will change the background shade
  input = createInput();
  input.position(25,55);

  button = createButton('submit');
  button.position(input.x+input.width+10, 55);
  button.mousePressed(changeBackground);

  createCanvas(800,800);
}

function draw() {
  background(backgroundShade);

  var circleWidth = circleSlider.value();

  fill(255, 111, 2); //circle fill colour
  ellipse(width/2, height/2, circleWidth, circleWidth);

  fill(255);
  text("Circle Size", circleSlider.x+circleSlider.width+8, 40);
}

function changeBackground(){
  //get the value of our text input field
  var inputArgument = input.value();

  //we need to check if the argument is a number and is between 0-255
  if(isNaN(inputArgument)){
    console.log("Argument is not a number.");
  }
  else{
    if(inputArgument >= 0 && inputArgument <= 255){ //set the background to the shade specified in the input field
      backgroundShade = Number(inputArgument);  //must make this into a number
    }
    else{
      console.log("Number out of range; should be 0-255");
    }
  }
}
