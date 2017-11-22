//Generators

function* gen(){
    console.log("apple");
    console.log("banana");
    console.log("pear");    
}

//gen(); //This will not do anything since the function is a generator.

var myGen = gen(); //this sets up the generator which returns an iterator
myGen.next(); //This will run the code

console.log("\n\n\n");

//Using yield keyword to pause the function flow
function* gen2(){
    yield console.log("apple");
    console.log("banana");
    console.log("pear");    
}

var myGen2 = gen2();
myGen2.next(); //Pauses on line 1
myGen2.next(); //Executes the remaining code


console.log("\n\n\n");

function* gen3(){
    yield "apple";
    yield "banana";
    yield "pear";    
    //console.log("all done");
    return "all done";    
}

var myGen3 = gen3();
console.log(myGen3.next()); //Displays -> Object {value: "apple", done: false}
console.log(myGen3.next()); //Displays -> Object {value: "banana", done: false}
console.log(myGen3.next()); //Displays -> Object {value: "pear", done: false}
/*
If this is last line ->  console.log("all done");
    Displays -> all done; next line ->Object {value: "undefined", done: true} : 
Otherwise
    Displays -> Object {value: "all done", done: true}
*/
console.log(myGen3.next()); 
//