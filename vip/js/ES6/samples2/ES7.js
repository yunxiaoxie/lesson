//More generators
//Demonstrates how to pass value back
function* gen3(){
    var x = yield "apple";
    var y = yield "banana";
    var z = yield "pear";    
    return x + y + z;    
}

var myGen3 = gen3();
console.log(myGen3.next()); 
console.log(myGen3.next(15));
console.log(myGen3.next(40)); 
console.log(myGen3.next(20)); 