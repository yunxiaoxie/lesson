//Fat arrow function


//Old style:
var ninjaGreeting = function(name){
    console.log(name + " says, Howdy!");
}

ninjaGreeting("Anu");

//ES6 style
//ninjaGreeting1 = (name) => console.log(`${name} says, Howdy!`);
//Above line can be rewritten as: (since it is a single parameter, we remove brackets)
ninjaGreeting1 = name => console.log(`${name} says, Howdy!`);

ninjaGreeting1("Anu");
