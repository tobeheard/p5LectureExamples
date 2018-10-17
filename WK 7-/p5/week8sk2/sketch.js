//Data Sonification & Visualisation with .CSV files
// mapping the ‘colour’ cell of each row to the background colour.
// We’ll also keep each background on the screen for an amount of time derived
// from that metal’s atomic number...
// must make sure the .csv file is fully loaded (like audio, images)
// before doing anything else in the code. Hence use the preload (blocking) function.

var colData = []; //create and array to hold the colour Data
var rows; //creat a variable called rows
var i = 0;
var frameWait = 120;
var button;
var tone;

function preload() {
  // loads a csv file table, that has a header row
  // must be in a data folder 'assets', or online URL
  table = loadTable('../assets/metals.csv', 'csv', 'header'); //loads csv by default, can load tsv, has header
}

function setup() {
  createCanvas(500, 500);
  // print number of rows & columns to console
  console.log(table.getRowCount() + ' rows in this table');
  console.log(table.getColumnCount() + ' columns in this table');

  // print columns...('?') to console MUST be correct spelling! or will be correct number of items Undefined.
  print(table.getColumn('Metal'));
  print(table.getColumn('Speed of Sound'));

  // cycle through data, store in var rows 'colour' into the colData[] array
  rows = table.getRows();
  for (var r = 0; r < rows.length; r++) {
    colData.push(rows[r].get('Colour')); //store (.push) the 'colour' cell of each row in the colData[] array
    console.log(rows[r]); //print this to console
  }
  console.log(colData); //now print all the colData


}


function draw() {
  //at every frameWait cycle, set the background to the next rows' colour, loop through loadTable
  if (frameCount % frameWait === 0) {
    background("#" + rows[i % rows.length].get('Colour')); //adding the '#' formats the hex colour
    console.log(background);


    // derive a new frameWait from the 'Atomic Number'
    frameWait = int(map(rows[i % rows.length].get('Atomic Number'), 0, 92, 0, 500)); // % counts to row.length then beging again
    // typecast the mapped number as an int as frameCount is whole numbers
    console.log(frameWait);
    textSize(32);
    stroke(255);
    text(rows[i % rows.length].get('Metal'),random(10,300),random(20,300));
    button =createButton(rows[i % rows.length].get('Atomic Number'));
    button.size(rows[i % rows.length].get('Atomic Number'));
    button.position(random(20, 100), random(10, 100));
    i++;
  }
  // if (button.mousePressed(tone)) {
  //
  //
  //   function tone(){
  //     tone = new p5.Oscillator();
  //     tone.setType('sine');
  //     tone.freq(240);
  //     tone.amp(0.5);
  //     tone.start();
  //   }
  //
  //   if (!playing) {
  //     // ramp amplitude to 0.5 over 0.05 seconds
  //     osc.amp(0.5, 0.05);
  //     playing = true;
  //
  //   } else {
  //     // ramp amplitude to 0 over 0.5 seconds
  //     osc.amp(0, 0.5);
  //     playing = false;
  //
  //   }
}
