//week5sketch4
//DustMote class needs to
//.move
//.display
//.checkBoundaries
//dustMote moves accross

//var dustMote; //declare that the object will requirte memory.
var moteArray = [];
var numberOfMotes = 30;

//load audio
function preload(){
  soundFormats('wav','mp3');
  sound1 = loadSound('/assets/type103new2.mp3');
}

function setup() {
  createCanvas(600,600);
  //instantiate the object.
  //mote = new DustMote(); //this creates a new class in the word mote.
  //loop
  for(i=0; i< numberOfMotes; i++){
  moteArray[i] = new DustMote();
  moteArray[i].x = random(0, width);
  moteArray[i].y = random(0, 50);
  moteArray[i].diameter = random(1, 10);
  }//set object parameters.
  //mote.x = width/2;
  //mote.y = height/2;
  //mote.diameter = 5;
}

function draw() {
  background(255,50);
  for(i = moteArray.length -1; i > 0; i--){
    var yamount =mouseY;
    yamount = map(yamount, 0, width, 0, 5);
    moteArray[i].move(0, 2);
    moteArray[i].display();
    moteArray[i].checkBoundaries();

    if (moteArray[i].isDead){
      moteArray.splice(i,1);
    }

  }
  //mote.move(0,2);
  //mote.display();
  //mote.checkBoundaries();
}

//this code is the entity class.
function DustMote(){
  this.x; //the 'this' syntax makes it local to the  class NOT a global x.
  this.y;
  this.diameter=3; //default diameter.
  this.isDead = false;

  this.move=function(xupdate,yupdate){ //this is local then name move make it a function.
    //move code goes here.
    this.x = this.x + xupdate;
    this.y = this.y + yupdate/this.diameter;
  }
  this.display = function(){
    //display code goes here.
    fill(0);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
  //msg prnt to console when object goes off screen.
  this.checkBoundaries = function(){
    if(this.x < 0 || this.x > width ||this.y < 0 || this.y > height){
      console.log("dot gone fishing!");
      this.isDead = true;
      //now play sound.
      sound1.play(0, random(3,3.5), random(0.5,1));
  }
}
}
