/*
//creating objects in js

var playerOne = new Object();
var playerTwo = {};
console.log(playerOne);

// adding properties, data
 var playerOne = { name: "The Dude" };
 var playerTwo = {};
 playerTwo.name = "Walter";
 console.log( playerTwo.name);
 console.log(playerOne.name);

 // adding functionality
 
 var playerOne = {
 name: "The Dude",
 activity: "bowling",
 saySomething: function() {
	console.log( "Careful, man, there's a beverage here!" )
 }
 }
 //mixed data and functionality
 playerOne.doSomething = function () {
 console.log ( "Fuck it, Dude, let's go " + this.activity + "." );
 }
 playerOne.doSomething();
*/

  // constructor function
  
  function player(name) {
  this.name = name;
  this.activity = "bowling";
  this.saySomething = function() {
	console.log( "Careful, man, there's a beverage here!" );
 }
  }
  // redefine one instance of the object
  var theDude = new player("The Dude");
  var walter = new player("Walter Sobchak");
 walter.saySomething = function () {
 console.log ( "Hey, lets go " + walter.activity + "man." );
 }
 
console.log(theDude.saysomething() );
 
/*
 // add property to prototype
 player.prototype.car = "old beater";
 
//change property in prototype
player.prototype.car = "totaled";

// add properties from one class to another class
var house = function() {};
house.prototype.flooring = "rug";
var mansion = function() {}:
mansion.prototype.flooring = house.prototype.flooring;
mansion.prototype.walls = "Little Lebowski Urban Achievers";
console.log(mansion.flooring);

//anonymous closure...self-executing function w/o a name
(function() { console.log( "Hello world!")})();