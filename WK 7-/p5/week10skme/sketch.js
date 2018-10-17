//JSON FILES me


var data;
var bgCol;
var button1, button2, button3, button4;
var slider1, slider2, slider3;




function preload() {
  data = loadJSON('../assets/ElectroAcousticWomen.json'); //load the json file into var data
}

function setup() {

  canvas = createCanvas(400, 400);
  bgCol = color(random(0, 255), random(0, 255), random(0, 255));
  button1 = createButton("Performer");
  button1.position(random(20, 100), random(10, 100));
  button1.mousePressed(changebgCol);
  button2 = createButton("Composer");
  button2.position(random(100, 200), random(10, 100));
  button2.mousePressed(changebgCol);
  button3 = createButton("Musician");
  button3.position(random(200, 400), random(10, 100));
  button3.mousePressed(changebgCol);
  slider1 = createSlider(1, 255, 100);
  slider1.position(10, 350);

  var results = data.results; //load results[] into var words


    for (var i = 0; i < results.length; i++) { //this loops through the words[]
      createElement('h5', results[i].about); //prints out all the "about" data in the words[array]
      }
}

function changebgCol() {
  bgCol = color(random(0, 255), random(0, 255), random(0, 255));
}

function showName(){
  var results = data.results;
  for (var j = 0; j < results.length; j++) {
    var name = new results[j].Name;
    // textSize(22);
    // fill(255);
    // text(name,100,10);
    }

}

function draw() {
  background(bgCol);
  fill(200);
  ellipse(200, 200, slider1.value(), slider1.value() / 2);
}
