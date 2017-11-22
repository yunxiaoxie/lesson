//let to assign values.
let let1 = "testing let";
var var1 = "testing var";

if(var1=="testing var"){
    let n1=1; //scope is limited to the block where it is defined.
    var n2=1; //function scope if defined within function (or global if defined outside function). does not limit to blocks
    
    //console.log(n1); //Displays error
    //console.log(n2); //Displays value
}

//console.log(n1); //Gives error
//console.log(n2); //Displays value

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//Spread Operator 
console.log('arr1: \t arr1 = [1,2,3]   \n', arr1);
console.log('arr2: \t arr2 = [4,5,6]   \n',arr2);

arr3=[...arr1,...arr2, ...[10,11]];
console.log('arr3: \t arr3=[...arr1,...arr2, ...[10,11]] \n',arr3);

console.log('Using spread operator to display arrays: (...arr1,...arr2): \n',...arr1,...arr2);
console.log('Using spread operator to display array: (...arr3): \n',...arr3);

function addNums(a,b,c){
    console.log(`Sum of ${a}, ${b}, ${c} = `, a+b+c);
}

let arr=[1,2,3];
addNums(...arr);

addNums(...[5,6,7]);

