// draw 16 circles using array
//holds circle x pos on screen
  //var circlearray = [];
  //var numberOfCircles = 16;
  //var circleSize = 20;
  //var circleSpacing = 30;
//call var circlearray and use function to draw mouseReleased

var circlearray = [];
  function setup() {
    createCanvas(600,600);
    circleArray(16,20,30,30);
    circleArray(16,20,30,60);
    circleArray(16,20,30,90);
    circleArray(16,20,30,120);

  //step through add circle to array
  //for(var i = 0; i < numberOfCircles; i++){
    //ellipse((i*circleSpacing)+circleSpacing,30,circleSize,circleSize);
  //}

}

  function draw() {
  // nothing here as we don't need to update each frame
}
//add input arguments into the function
  function circleArray(numberOfCircles, circleSize, circleSpacing, yOffset){
    for(var i = 0; i < numberOfCircles; i++){
      ellipse((i*circleSpacing)+circleSpacing,yOffset,circleSize,circleSize);
    }
  }
