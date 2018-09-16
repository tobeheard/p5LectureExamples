//week5sketch4
//DustMote class needs to
//.move
//.display
//.checkBoundaries
//dustMote moves accross

var mote; //declare that the object will requirte memory.
var moteArray = [];


function setup() {
  createCanvas(600,600);
  //instantiate the object.
  mote = new DustMote(); //this creates a new class in the word mote.

  //set object parameters.
  mote.x = width/2;
  mote.y = height/2;
  mote.diameter = 5;
}

function draw() {
  background(255,50);
  mote.move(0,2);
  mote.display();
  mote.checkBoundaries();
}
//this code is the entity class.
function DustMote(){
  this.x; //the 'this' syntax makes it local to the  class NOT a global x.
  this.y;
  this.diameter=3; //default diameter.

  this.move=function(xupdate,yupdate){ //this is local then name move make it a function.
    //move code goes here.
    this.x = this.x + xupdate;
    this.y = this.y + yupdate;
  }
  this.display = function(){
    //display code goes here.
    fill(0);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
  //msg prnt to console when object goes off screen.
  this.checkBoundaries = function(){
    if(this.x < 0 || this.x >width ||this.y <0 || this.y > height);
      console.log("dot gone fishing!");

  }
}
