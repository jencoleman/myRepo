/*

Create a script that will use the data object and the template to convert it to the string:

Hello, my name is Biggles, I am 24 years old, and I am a Pilot for a living.

and insert that into myDiv1.

Use the same code to do the same with data2 and data3 using tempalte2. 

*/

data = {
name: "Biggles",
age: 24,
job: "Pilot"
}

data2 = {
specie: "Baboon",
type : "Monkey",
snout : "Doglike"
}
data3 = {
specie: "Eel",
type : "Fish",
snout : "snakelike"
}

var template = "Hello, my name is {{NAME}}, I am {{AGE}} years old, and I am a {{JOB}} for a living.";

var template2 = "Hello, I am a {{specie}}, which is a type of {{type}}, that has a {{snout}} snout.";


var replacer = function( sentence, obj ) {

var patt = /{{.*?}}/;

while ( patt.test(sentence) == true ){

var bracketed = patt.exec( sentence ); 

var unBracketed = bracketed.toString().replace("{{", "").replace("}}", "").toLowerCase();

var dataValue = obj[ unBracketed ];

sentence = sentence.replace( bracketed, dataValue );
}
if (obj === data){
document.getElementById("myDiv1").innerHTML = sentence;
}
if (obj === data2) {
document.getElementById("myDiv2").innerHTML = sentence;
}
if (obj === data3) {
document.getElementById("myDiv3").innerHTML = sentence;
}
}

