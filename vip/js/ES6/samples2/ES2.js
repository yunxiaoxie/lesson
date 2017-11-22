//Object literal enhancements in ES6
var name = "Crystal";
var belt = "black";

//var ninja= {name: name, belt: belt}; //Old style 
var ninja= {name, belt}; //ES6 style

console.log(ninja);


//function definition
var newNinja = {
    name,
    belt,
    chop: function(n){ //Old style of defining function for Objects
         console.log(`You have chopped ${n} times`);
    },
    chop1(n) { //ES6 style
        console.log(`You have newly chopped ${n} times`);
    }
}

newNinja.chop(5);
newNinja.chop1(5);

console.log(newNinja);

