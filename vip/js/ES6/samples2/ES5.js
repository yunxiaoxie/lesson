//Using Set

var names = new Set();

//add()
names.add("Shaun").add("Ryu").add("Peter").add("Ryu").add("Crystal"); //Does not add the 2nd "Ryu" - eliminates duplicates
console.log(names);

//size property
console.log(`Size of the set - ${names.size}`); 

//delete
names.delete("Crystal")
console.log(names);

//has
console.log(names.has("Ryu"));

//delete all elements
names.clear();
console.log(names);

//---------------------------------

//Use Set to eliminate duplicates in an array
var ninjas = ["shaun","crystal","yoshi","ryu","yoshi","ryu"];
console.log(ninjas);

var refinedNinjas = new Set(ninjas);
console.log(refinedNinjas);

//Use Spread operator to reassign the refined values which is in a Set back to the array
ninjas = [...refinedNinjas];
console.log(ninjas);
