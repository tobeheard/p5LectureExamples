// LFOs

function setup() {
  createCanvas(800,800);
  background(0);

}

function draw(){
  background(0);
  radius1 = sin((0.01*frameCount)%200)*100;
  radius2 = sin((0.05*frameCount+100)%200)*100;
  //mappedRadius = map(radius1, 0,100. 0,1);
  bias = 100;
  ellipse(width/4,height/2, bias+radius1,bias+radius1); //centre, set size to vary with LFO
  ellipse(width/2,height/2, bias+radius2,bias+radius2);                                        //looks at the sine value at each frame cycle
                                          // for 200 counts then *100
                                                  //increase gain (from-1...+1)
}
