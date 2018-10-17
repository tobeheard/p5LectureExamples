var socket;

function setup() {
createCanvas(800,600);
background(50);

// start a socket connection with server
// one day I could run this on a outside server
socket = io.connect('http://localhost:3000')

socket.on('mouse', newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255);  //white circle
  ellipse(data.x,data.y,70,70);
}

function mouseDragged(){
  console.log('sending: ' + mouseX + ' ' + mouseY);

  var data = {
    x:mouseX,
    y:mouseY
  }
  socket.emit('mouse', data);

  noStroke();
  fill(255,100,50); //orange circle
  ellipse(mouseX,mouseY,40,40);

  sOsc = new p5.SinOsc();
    sOsc.freq(random(100,2000));  //(map(100,1200,random(0,59),random(0,59))));???

    var aLevel = 1.0;
    var rLevel = 0;
    var aTime = 0.01
    var dTime = 0.2;
    var sTime = 20;
    var rTime = 1;
      env = new p5.Envelope();
    env.setADSR(aTime, dTime, sTime, rTime);
    env.setRange(aLevel, rLevel);
    env.play;
    sOsc.amp(0,0.5);
    sOsc.freq(env);
    sOsc.start();

}

function draw() {

}
