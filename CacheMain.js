const LRUCache = require("./LRUCache");

const myCache = new LRUCache(2);

//Case 1  
myCache.insert(5, "five");
console.log("Value of key : 5 is  " + myCache.get(5));

console.log("<<<  >>>>");
//Case 2 
myCache.insert(10, "ten");
myCache.insert(5, "five_updated");
console.log("Value of key : 5 is  " + myCache.get(5));
console.log("Value of key : 10 is  " + myCache.get(10));

console.log("<<<  >>>>");
//Case 3 
myCache.insert(5, "five");
myCache.insert(6, "six");
myCache.insert(7, "seven");

console.log("Value of key : 5 is  " + myCache.get(5));
console.log("Value of key : 6 is  " + myCache.get(6));
console.log("Value of key : 7 is  " + myCache.get(7));

console.log("<<<  >>>>");
//Case 4 
console.log("Value of key : 6 is  " + myCache.get(6));
myCache.insert(8, "eight");
console.log("Value of key : 7 is  " + myCache.get(7));
console.log("Value of key : 6 is  " + myCache.get(6));
console.log("Value of key : 8 is  " + myCache.get(8));
console.log("<<<  >>>>");