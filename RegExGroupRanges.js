const REGEXP = /red flag|blue flag/g;
const text = "red flag blue flag";
const matches = text.match(REGEXP);
console.log("red flag blue flag".match(REGEXP));
console.log("yellow flag red flag blue flag green flag red flag".match(REGEXP)); 

//neded the help og chat gpt a lot but I now
//start to understand regular expression