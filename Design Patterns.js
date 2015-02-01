//creating objects in js

var playerOne = new Object();
var playerTwo = {};

// adding properties, data
 var playerOne = { name: "The Dude" };
 var playerTwo = {};
 playerTwo.name = "Walter";
 
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
 console.log ( "Hey, lets go " + this.activity + "man." );
 }
 
  // constructor function
  
  var player = function(name) {
  this.name: name,
  this.activity: "bowling",
  this.saySomething: function() {
	console.log( "Careful, man, there's a beverage here!" )
 }
  }
  
 // redefine one instance of the object
  var theDude = new player("The Dude");
  var walter = new player("walter");
  walter.saySomething = function () {
 console.log ( "Hey, lets go " + this.activity + "man." );
 }
 
 // add property to prototype
 player.prototype.car = "old beater";
 
