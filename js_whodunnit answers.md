#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```
var name = 'Keith';

var printName = function() {
	console.log('My name is ' + name );
}

printName();

My Answer:
Global var of Keith being set as name, no local var of name being set within printName
when invoked printName will use global var and return = Keith

Actual Answer = My name is Keith

```

### Episode 2
```
score = 5;

var result = function() {
	var score = 3;
	return score;
}

console.log(result());

My Answer:
score of 5 set as a global. var result being invoked and has a local var of score set so will return = 3

Actual Answer = 3

```



### Episode 3

```
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
	var suspectThree = 'Harvey'
	console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

My Answer:
Four suspects set as global vars. var allSuspects has a local var suspectThree being set of "Harvey" so when invoked will replace the gloabl var of "Keith" to "Harvey"
console.log will return the global var of Keith

Actual Answer:
Suspects include: Jay, Val, Harvey, Rick
Suspect three is:Keith
```

### Episode 4

```
var detective = {
		name : 'Ace Ventura',
		pet : 'monkey'
	}

var printName = function(detective) {
	return detective.name
}

var detectiveInfo = function() {
	detective['name'] = 'Poirot'
	return printName(detective);
}

console.log(detectiveInfo());

My Answer:
var detective is a hash setting name and pet. var printName is a function called on detective that will return the value of the key name:
var detectiveInfo is then updating the initial name: key of var detective from Ace Ventura to Poirot
console.log invokes detectiveInfo so will return Poirot

Actual Answer: Poirot

```

### Episode 5
```
var murderer = 'rick';

var outerFunction = function(){
	var murderer = 'marc';

	var innerFunction = function(){
		murderer = 'valerie';
	}

	innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

Answer:
Global var murderer of "rick"
var outerFunction has a local var of murderer "marc" which is then set to valerie in the innerFunction which is then invoked.
When outerFunction is invoked it will have its local var set by the innerFunction i.e. valerie.
console.log is outside the outerFunction so will return the global var murderer of rick.

Actual Answer: the murderer is rick
```

### Episode 6 - Make up your own episode/s!

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

### Harry's mindboggler

var detective = 'Dr Watson';
var outerFunction = function(decided){
    var detective = 'Miss Marple';
    var theOtherDetective = "Sherlock";
    var innerFunctionA = function(){
        var detective = 'Hercule Poirot';
        detective = "Scooby Doo";
    };
    var innerFunctionB = function(){
        var detective = 'Hercule Poirot';
        var someAction = function() {
            var detective = "Maigret";
            if (decided) {
                theOtherDetective = "Jake Parelta";
            } else {
                detective = "Chief Clarence \"Clancy\" Wiggum";
            }
            return detective;
        };
        detective = someAction;
    };
    var innerFunctionC = function(){
        var detectiveFrost = 'Jack Frost';
        var somethingWheelyFunc = function() {
            var bestWheeledDetectiveEver = "Ironside";
            detective = bestWheeledDetectiveEver;
            return theOtherDetective;
        };
        detective = 'John Luther';

        detective = somethingWheelyFunc();
        return detective;
    };
    detective = innerFunctionA();
    detective = innerFunctionB();
    detective = innerFunctionC();
    return detective;
};
detective = outerFunction(false);
console.log('The best detective is', detective, "of course!");

// detective = outerFunction(true);
// console.log('The best detective is', detective, "of course!");

both return Sherlock unless there is a () after detective = someAction on line 166
