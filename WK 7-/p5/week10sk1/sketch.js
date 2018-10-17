//JSON FILES

var fruits;

function preload(){
  var filepath = '../assets/Fruit2.json'
  fruits = loadJSON(filepath); //load the json into var object 'fruits'
}

function setup(){
  console.log(fruits.fruit.Apple.weight);
}

function draw(){

}
