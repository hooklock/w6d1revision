//Episode 1

// var name = 'Keith';

// var printName = function() {
//   console.log('My name is ' + name );
// }

// printName();

//Episode 2

// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// }

// console.log(result());

//Episode 3

// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';

// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// }

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree )

//Episode 4

// var detective = {
//     name : 'Ace Ventura',
//     pet : 'monkey'
//   }

// var printName = function(detective) {
//   return detective.name
// }

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// }

// console.log(detectiveInfo());

//Episode 5

// var murderer = 'rick';

// var outerFunction = function(){
//   var murderer = 'marc';

//   var innerFunction = function(){
//     murderer = 'valerie';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('the murderer is ', murderer);

//Episode 6

var victim = "Rebus";
var murderer = "Taggart";
var detective = "Marple";
var method = {
  place: "library",
  weapon: "candlestick"
}

var process = function(){
  victim = "Radio Star";
  var when = "1979";

  var solution = function(){
    murderer = "Video";
  }

  solution();
  
}
process();
console.log(murderer + " killed " + victim);
