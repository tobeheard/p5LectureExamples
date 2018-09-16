function setup(){
  createCanvas(600,600);
  background(0);
}

function draw(){
  var i;
for(i = 0; i<5; i++) {
  stroke(255);
  line(0,(i*10)+10,width,(i*10)+10);
}
}
