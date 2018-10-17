//Data Sonification & Visualisation with .CSV files
// must make sure the .csv file is fully loaded (like audio, images)
// before doing anything else in the code. Hence use the preload (blocking) function.

var colData = [];   //create and array to hold the colour Data
var rows;          //creat a variable called rows
var table;

function preload(){
  // loads a csv file table, that has a header row
  // must be in a data folder 'assets', or online URL
  table = loadTable('../assets/metals.csv', 'csv', 'header');   //loads csv by default, can load tsv, has header
}

function setup(){
  createCanvas(500,500);
  // print number of rows & columns to console
  console.log(table.getRowCount()+' rows in this table');
  console.log(table.getColumnCount()+' columns in this table');

  // print columns...('?') to console MUST be correct spelling! or will be correct number of items Undefined.
  print(table.getColumn('Metal'));
  print(table.getColumn('Speed of Sound'));

  // cycle through data, store in var rows 'colour' into the colData[] array
  rows = table.getRows();
    for(var r=0; r<rows.length; r++){
      colData.push(rows[r].get('Colour')); //store (.push) the 'colour' cell of each row in the colData[] array
      console.log(rows[r]);   //print this to console
    }
    console.log(colData);   //now print all the colData
}

function draw(){

}
