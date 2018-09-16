var backgroundShade = 150; //our

function setup(){
  createCanvas(800,800);
  //textSize(12);

  //create a HTML slider (with DOM library) to change size of circle
  circleSlider = createSlider(0,width,width/2); //min,max//default value
  circleSlider.position(25,25); //position of slider on screen
}
function draw(){
  background(150);

  var circleWidth = circleSlider.value();

  fill(29,60,109);
  noStroke();
  ellipse(width/2, height/2, circleWidth, circleWidth);

  fill(255);
  text("Circle Size", circleSlider.x+circleSlider.width+8, 40)
}

function changeBackground(){
  //get the value of text input field
  var inputArgument = input.value();

  //need to check if number is between 0-255
  if(isNaN(inputArgument)){
    console.log("Argument is not a number")
  }
}
