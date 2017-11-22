//New String methods - repeat, startsWith, endsWith, includes
//repeat()
var s="hello ";
console.log("Repeating hello 5 times - ", s.repeat(5));

//startsWith()
s = "Goodbye";
console.log(s.startsWith("Good"));
console.log(s.startsWith("bye",4)); //0-based index

//endsWith()
console.log(s.endsWith("bye") );
console.log(s.endsWith("Good", s.length-3)); //Starts from the end. 0-based index

//includes()
console.log(s.includes("bye"));

