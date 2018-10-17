//API FILES

var lat = -41.2865;
var lng = 174.7762;
var jsonDayLength = 12;

//make http request
var xmlhttp = new XMLHttpRequest();

//run callback
xmlhttp.onreadystatechange = function(){
  console.log(this.readyState);
  if(this.readyState == 4 && this.status == 200){
    var myObj = JSON.parse(this.responseText);
    jsonDayLength = myObj.results.day_length;
    jsonDayLength = split(jsonDayLength, ":");
    console.log(jsonDayLength);
  }
};

xmlhttp.open("GET", "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng, true);
xmlhttp.send();


function setup(){
  createCanvas(1000,500);
  img=loadImage('Earthmap.jpg');


filter = new p5.LowPass();

oscillator = new p5.Oscillator('triangle');
oscillator.amp(0.5);
oscillator.freq(150);
oscillator.disconnect();
oscillator.connect(filter);
oscillator.start();
}

function draw(){
  tint(0,63,255,128);
  image(img,0,0,width,height);
  //draw pulsating circle at mouse
  drawLocation(lat,lng,40,0);
}

function drawLocation(_lat,_lng,radius,phase){
  _lng =map(_lng,-180,180,0,width);
  _lat =map(_lat,-90,90,height,0);
  //draw circle r is jsonDayLength
  var mappedDLength= map(Number(jsonDayLength[0]),8,24,0.001,0.09); //(Number takes the string "12" and converts to number 12)
  radius = (sin(mappedDLength*frameCount+phase)%1000)*radius;
  ellipse(_lng,_lat, radius, radius);

  // sweep filter according to current radius
  filter.set(abs(map(radius,0,80,100,1000)),0.9);
}
function mousePressed(){
  lng=map(mouseX,0,width,-180,180);
  lat=map(mouseY,0,height,90,-90);
  // var xmlhttp = new XMLHttpRequest(); //this is java code for opening up a remote page
  xmlhttp.open("GET", "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lng, true);
  xmlhttp.send();
}
